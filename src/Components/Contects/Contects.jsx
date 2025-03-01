import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  //handler for "send message"
  const sendEmail = (e) => {
    e.preventDefault();

    const parameters = {
      from_name: name,
      from_email: email,
      to_name: "Ravi",
      message: message,
    };

    emailjs.send(
        "service_0r4pc7y",
        "template_zk4lk0i",
        parameters,
        "egcfkHhJ4n7u-xD60"
      )
      .then((response) => {
        alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const cardBg = 'bg-[#1E3E62]';
  const primaryText = 'text-white';
  const secondaryText = 'text-gray-300';

  return (
    <>
      <div className="text-center mb-16 py-20 bg-[#122439] relative overflow-hidden">
        {/* Background Pattern
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[#FF6500]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }} />
        </div> */}

        <h2 className="text-4xl font-bold text-white mb-5 text-center">
          Get in <span className="text-[#FF6500]">Touch</span>
        </h2>
        <div className="w-[90%] mx-auto max-w-7xl grid md:grid-cols-2 gap-12 p-8">

          {/* Left Column - Contact Info */}
          <div className={`${cardBg} rounded-lg p-8 space-y-8 shadow-xl`}>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 mt-1 text-[#FF6500]" />
                <div className='flex flex-col items-start'>
                  <h3 className={`font-semibold ${primaryText}`}>Address:</h3>
                  <p className={`${secondaryText}`}>Shakarpur, New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 mt-1 text-[#FF6500]" />
                <div className='flex flex-col items-start'>
                  <h3 className={`font-semibold ${primaryText}`}>Contact Number:</h3>
                  <p className={`${secondaryText}`}>+918700834348</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 mt-1 text-[#FF6500]" />
                <div className='flex flex-col items-start'>
                  <h3 className={`font-semibold ${primaryText}`}>Email Us:</h3>
                  <p className={`${secondaryText}`}>inboxraviiranjan@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`rounded-lg p-8 space-y-3 ${cardBg} shadow-xl`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label htmlFor="fullName" className={`block ${primaryText} text-left`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  id="fullName"
                  placeholder="Jesse"
                  className="text-gray-600 w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="email" className={`block ${primaryText}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleEmailChange}
                  value={email}
                  placeholder="example@gamil.com"
                  className="text-gray-600 w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="message" className={`block ${primaryText}`}>
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                onChange={handleMessageChange}
                value={message}
                placeholder="Write Your message"
                className={`text-gray-600 w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none`}
              />
            </div>

            <button className={`mx-6 px-6 py-3 text-left rounded-lg flex items-center gap-2 bg-[#FF6500] hover:bg-[#FF8000] text-white`}
            onClick={sendEmail}
            >  
              Send Me Message
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
