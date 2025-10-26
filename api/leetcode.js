// LeetCode API Proxy - Vercel Serverless Function
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const username = req.query.username || 'tharunk03';

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              profile {
                ranking
              }
            }
          }
        `,
        variables: {
          username: username
        }
      })
    });

    const data = await response.json();
    
    if (data.data && data.data.matchedUser) {
      const userData = data.data.matchedUser;
      const submitStats = userData.submitStats.acSubmissionNum;
      
      const easySolved = submitStats.find(s => s.difficulty === 'Easy')?.count || 0;
      const mediumSolved = submitStats.find(s => s.difficulty === 'Medium')?.count || 0;
      const hardSolved = submitStats.find(s => s.difficulty === 'Hard')?.count || 0;
      
      const totalSolved = easySolved + mediumSolved + hardSolved;
      const ranking = userData.profile?.ranking || 0;
      
      res.status(200).json({
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        acceptanceRate: ((totalSolved / (totalSolved + 7)) * 100).toFixed(2),
        globalRanking: ranking,
        totalSubmissions: submitStats.reduce((sum, stat) => sum + stat.submissions, 0)
      });
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('LeetCode API Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch LeetCode stats',
      message: error.message 
    });
  }
}

