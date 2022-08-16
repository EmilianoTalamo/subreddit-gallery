import styles from "./Gallery.module.scss";

import ScrollReveal from "scrollreveal";

import { useEffect, useRef } from "react";
import {
	motion
} from "framer-motion";

function GalleryItem({ pic, id, selectedId, setSelectedId }) {

	const element = useRef(null)

	useEffect(() => {
		ScrollReveal().reveal(element.current, {
			reset: true,
			opacity: 0
		})
	}, [element])
	

	return (
		<li className={styles.itemwrapper}>
			<motion.figure
				className={styles.item}
				ref={element}
				layoutId={id}
			>
				<motion.img
					src={pic}
					alt={id.title}
					loading="lazy"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setSelectedId(id)}
				/>
			</motion.figure>
		</li>
	);
}

export default GalleryItem;
