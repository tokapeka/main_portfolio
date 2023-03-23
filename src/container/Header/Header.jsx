import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss'
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft: 20}}>
              <p className='p-text' >Hello, I'm</p>
              <h1 className='head-text'>Anton</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web and Software Developer</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="Anton's profile image"/>
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className='overlay_circle'          
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.javascript, images.reacticon, images.html, images.css, images.sass].map((circle, index) => (
          <div className='circle-cmp app___flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}        
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');