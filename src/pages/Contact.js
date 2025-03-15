import React, { useState } from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Email Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone Number Validation (10 Digits)
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Handle Email Change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Remove error when user corrects input
    if (validateEmail(newEmail)) {
      setEmailError('');
    }
  };

  // Handle Phone Change
  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);

    // Remove error when user corrects input
    if (validatePhoneNumber(newPhone)) {
      setPhoneError('');
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsSending(true); // Show loading state

    let isValid = true;

    // Email Validation
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    // Phone Validation
    if (!validatePhoneNumber(phone)) {
      setPhoneError('Phone number must be 10 digits');
      isValid = false;
    }

    // If any field is invalid, stop form submission
    if (!isValid) {
      setIsSending(false); // Stop loading if validation fails
      return;
      }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await fetch("http://localhost/projects/email.php", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.text(); // Read response from PHP
      if (result === "success") {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setEmailError("");
        setPhoneError("");
        setIsSubmitted(false);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
    finally {
      setIsSending(false); // Stop loading after request is done
    }
  };

  return (
    <section id="contact" className="contact-component">
      <h1>Get in <span className='highlet'>Touch</span></h1>
      <div className="contact-info">
        <div className="contact-details">
          <h2>Contact Information</h2>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <strong>Address</strong><br />
              2/71, Karungalpalayam, Namakkal-637003
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <strong>Phone</strong><br />
              9488888911
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <strong>Email</strong><br />
              maasigolisoda@gmail.com
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />

          {/* Email Input */}
          <div style={{ position: "relative" }}>
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={handleEmailChange}
              required 
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>

          {/* Phone Number Input */}
          <div style={{ position: "relative" }}>
            <input 
              type="text" 
              placeholder="Your Phone Number" 
              value={phone}
              onChange={handlePhoneChange}
              required 
            />
            {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
          </div>

          {/* Message Input */}
          <textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
          />

<button type="submit" disabled={isSending}>
  {isSending ? "Sending..." : "Send Message"}
</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
