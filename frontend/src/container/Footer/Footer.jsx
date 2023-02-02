import React,{useState} from 'react';

import { images } from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';
import {client} from '../../client';

import './Footer.scss';


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Let's <span>Get </span>in Touch</h2>
      
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:contacto.diegoisunza@gmail.com" className="p-text" style={{color:'black'}}>contacto.diegoisunza@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +52 5532405062" className="p-text" style={{color:'black'}}>+52 5532405062</a>
        </div>
      </div>
      {!isFormSubmitted 
        ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" style={{backgroundColor:'#fff',color:'black'}} type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" style={{backgroundColor:'#fff',color:'black'}} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              style={{backgroundColor:'#fff',color:'black'}}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
      
          <button type="button" className="p-text" style={{backgroundColor:'#000',color:'white'}}  onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);