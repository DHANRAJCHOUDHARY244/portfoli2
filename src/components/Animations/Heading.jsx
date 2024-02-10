import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import './animation.scss'
import { styles } from './data'
import { motion } from 'framer-motion'
const Heading = ({ iconClass, heading, subHeading1, subHeading2 }) => {
    const refHeader = useRef(null)
    const inViewH = useInView(refHeader);
    return (
        <motion.div className={`section-header `}>
            <motion.h4 className={`subtitle`}
                style={inViewH ? { ...styles.scale } : ''}>
                <motion.i className={iconClass} style={inViewH ?styles.rotate:''} />
                {heading}
            </motion.h4>
            <motion.h1 
                style={inViewH ? { ...styles.Heading2 } : ''}
                ref={refHeader}>
                {subHeading1}
                <motion.span
                    style={inViewH ? { ...styles.Heading2 } : ''}>
                    {subHeading2}
                </motion.span>
            </motion.h1>
        </motion.div>
    )
}

export default Heading