'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const InfoCard = ({path,text,flip=false}) => {
	return (
		<motion.div className={`flex w-full items-center bg-[#ffffffb2] gap-6 md:gap-10 rounded-xl md:rounded-2xl
            p-4 md:p-10 ${flip?'flex-col md:flex-row-reverse': 'flex-col md:flex-row'}`}
			style={{boxShadow: '1px 1px 10px rgba(0,0,0,0.2)'}}

            initial={{x: flip ? 200 : -200, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{
                duration: 1,
                delay: 0.3,
            }}
		>
			<div className='w-full'>
				<Image src={path} className="rounded-xl w-full h-auto"/>
			</div> 
			<span className="text-base md:text-xl px-1 theme-color-dark">{text}</span>
		</motion.div>
	)
}

export default InfoCard;