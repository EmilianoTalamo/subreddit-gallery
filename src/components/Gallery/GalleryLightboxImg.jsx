import React from 'react'
import { motion } from 'framer-motion'

function GalleryLightboxImg({ src, width, height}) {
	return (
		<motion.img
			src={src}
			initial={{ aspectRatio: 1/1 }}
			exit={{ aspectRatio: 1/1 }}
			animate={{ aspectRatio: width / height}}
			>
		</motion.img>
	)
}

export default GalleryLightboxImg