import React, { useState } from 'react';
import './Contact.css';
import config from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status messages when user starts typing again
    if (status) {
      setStatus('');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      console.log('Form validation failed');
      return;
    }

    setStatus('sending');
    setErrorMessage('');
    
    try {
      console.log('Attempting to send message with data:', formData);
      
      const response = await fetch(`${config.apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      });

      console.log('Response received:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Success response:', data);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          <span role="img" aria-label="phone">📞</span> Contact Me
        </h2>
        
        {/* Show status messages at the top */}
        {status === 'success' && (
          <div className="status-message success-message">
            ✅ Message sent successfully! Thank you for reaching out.
          </div>
        )}
        {status === 'error' && (
          <div className="status-message error-message">
            ❌ {errorMessage || 'Something went wrong. Please try again.'}
          </div>
        )}

        <p className="contact-description">
          Let's connect! Fill out the form below to get in touch.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              disabled={status === 'sending'}
              className={status === 'sending' ? 'input-disabled' : ''}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              disabled={status === 'sending'}
              className={status === 'sending' ? 'input-disabled' : ''}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="5"
              disabled={status === 'sending'}
              className={status === 'sending' ? 'input-disabled' : ''}
            />
          </div>

          <button 
            type="submit" 
            className={`submit-button ${status === 'sending' ? 'sending' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 