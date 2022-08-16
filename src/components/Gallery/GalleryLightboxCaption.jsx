import React from 'react'
import { motion } from 'framer-motion'

function GalleryLightboxCaption({ posturl, caption }) {

	const preventBubbling = e => {
		e.stopPropagation();
	}

	return (
		<motion.figcaption>
			<a
				onClick={preventBubbling}
				href={posturl}
				target="_blank"
				rel="noreferrer"
			>
				{ caption }
			</a>
		</motion.figcaption>
	)
}

export default GalleryLightboxCaption