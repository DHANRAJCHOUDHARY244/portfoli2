import React, { useRef } from 'react';
import { styles } from './data';
import './animation.scss'
import { useInView } from 'framer-motion';
import {motion} from 'framer-motion'
const TypingText = ({ text }) => {
    const wordArray = text.split('');
    const paraRef = useRef(null);
    const inViewH = useInView(paraRef);

    return (
        <motion.section style={inViewH ? { ...styles.Heading2 } : ''} ref={paraRef}>
            {wordArray.map((item, index) => (
                <motion.span key={index}
                    style={inViewH ? { ...styles.fadeIn, animationDelay: `${index * 0.1}s` } : ''}
                >{item}</motion.span>
            ))}
        </motion.section>
    );
};

export default TypingText;
