import React from 'react';
import {motion} from  'framer-motion';

import {AppWrap} from '../../wrapper';
import {images} from '../../constants';

import './Header.scss';


const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <motion.div
       whileInView={{x:[-100,0], opacity: [0,1]}} //opacity from 0 to 1 invisible to visible
       transition={{duration: 0.5}}
       className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <motion.div 
              whileInView={{opacity:1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type:'spring'}}
              style={{marginLeft: 20}}
            >
              <p className="p-text">Hey there, I am</p>
              <h1 className="head-text">&lt;Diego/&gt;</h1>
            </motion.div>
          </div>

          <motion.div 
            whileInView={{opacity:1}}
            whileHover={{scale: 1.3}}
            transition={{duration: 0.5, type:'keyframes'}}
            className="tag-cmp app__flex"
          >
          <p className="p-text">Software Engineer</p>
          <p className="p-text">Full-Stack Developer</p>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
      whileInView={{opacity: [0,1]}} 
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__header-img"
      whileHover={{scale: 1.1}}
      >
        <img style={{height:'90%'}} src={images.logo_no_bg} alt="profile_background" />
        <motion.img
        whileInView={{scale: [0,1]}} 
        transition={{duration: 1, ease: 'easeInOut'}}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
        />
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.python, images.react, images.solidity].map((circle,index) => (
          <motion.div 
            whileInView={{opacity:1}}
            whileHover={{scale: 1.2}}
            transition={{duration: 0.5, type:'keyframes'}}
            className="circle-cmp app__flex" key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
};

export default AppWrap(Header, 'home');