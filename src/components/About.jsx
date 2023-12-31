import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
            <div options={{
              max: 45,
              scale: 1,
              speed: 450
          }}  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
                <img src={icon} alt='title' className='w-16 h-16 object-contain'/>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm an aspiring web developer with a strong focus on React.js. 
          Despite my limited professional experience, I've built numerous 
          projects and continuously learn with each one. I'm eager to expand 
          my knowledge by exploring other major frameworks. Browse my portfolio 
          to see my projects and witness my dedication to creating dynamic web applications. 
          Let's work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");