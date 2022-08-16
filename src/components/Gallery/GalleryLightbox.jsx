import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';

import GalleryLightboxImg from './GalleryLightboxImg';

import styles from './Gallery.module.scss'
import GalleryLightboxCaption from './GalleryLightboxCaption';

function GalleryLightbox({ selectedId, setSelectedId }) {

	const bg = useRef(null)
	const link = useRef(null);

	const width = selectedId.preview?.images[0].source.width || 1280;
	const height = selectedId.preview?.images[0].source.height || 720;
	const srcthumb = selectedId.preview?.images[0]?.resolutions[2]?.url || selectedId.url_overridden_by_dest;
	const srchd = selectedId.url_overridden_by_dest;
	const posturl = `http://reddit.com${selectedId.permalink}`;

	const [src, setSrc] = useState(srcthumb)

	const clickedBg = e => {
		e.stopPropagation();
		if(e.target !== link.current)
			setSelectedId(null);
	}

	useEffect(() => {
		// Delay the loading of the high definition source to prevent a laggy opening animation
		setTimeout(() => {
			setSrc(srchd)
		}, 400)
	}, [srchd])

	return (
		<motion.div
			className={styles.backdrop}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			ref={bg}
			onClick={(e) => clickedBg(e)}>
			<motion.figure
				layoutId={selectedId}
				className={styles.lightboxcontainer}
				style={{ aspectRatio: width / height }}
			>
				<GalleryLightboxImg
					src={src}
					width={width}
					height={height}
				/>
				<GalleryLightboxCaption
					ref={link}
					posturl={posturl}
					caption={selectedId.title}
				/>
			</motion.figure>
		</motion.div>
		
	)
}

export default GalleryLightbox