'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import PrivacyPolicy from './PrivacyPolicy';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/styles/phone-input.css';
import '@/styles/contact-form.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+91',
    message: '',
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePhoneChange = (value, country) => {
    setFormData(prev => ({
      ...prev,
      phone: '+' + value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Local backend endpoint
    const endpoint = 'http://localhost:5000/contact/submit';
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you for reaching out! We\'ve received your submission and will get back to you within 24 hours. If it\'s urgent, please feel free to contact us directly.', {
          duration: 5000
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '+91',
          message: '',
          privacyPolicy: false,
        });
      } else {
        const errorData = await response.json().catch(() => null);
        toast.error(errorData?.message || 'Failed to send message. Please check your connection and try again.', {
          duration: 4000
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Unable to connect to the server. Please try again later or contact support directly.', {
        duration: 4000
      });
    }
  };

  return (
    <div id="Contact" className="py-8 px-4 sm:px-6 lg:px-8 w-full bg-[#F8FFF8]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="font-poppins text-[#51B504] text-sm font-semibold uppercase tracking-wide mb-1">
            Contact Us
          </h3>
          <h2 className="text-lg sm:text-2xl font-bold text-[#130F26] mb-2">
            We&apos;d love to hear from you
          </h2>
          <p className="text-sm text-[#4A5568]">
            Have a question or want to know more? Fill out the form below.
          </p>
        </div>
        <form className="mt-6 space-y-4 contact-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="input-group">
              <label htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>
            <div className="sm:col-span-2 input-group">
              <label htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="sm:col-span-2 input-group">
              <label htmlFor="phone" className="block text-sm font-medium poppins-thin text-[#344054] mb-1">
                Phone number
              </label>
              <div className="phone-wrapper">
                <PhoneInput
                  country={'in'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    required: true,
                    name: 'phone',
                    placeholder: '+91 96080-85106'
                  }}
                  containerClass="phone-input-container"
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                  preferredCountries={['in', 'us', 'gb', 'ca']}
                />
              </div>
            </div>
            <div className="sm:col-span-2 input-group">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <div className="checkbox-wrapper">
                <input
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="checkbox"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacyPolicy" className="!mb-0 !inline-block">
                  By selecting this, you agree to our{' '}
                  <PrivacyPolicy />
                  .
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
