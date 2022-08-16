import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchReddit, filterImagePosts } from '../../lib/redditApi'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

function Gallery() {
	const [searchParams] = useSearchParams();
	const [selectedId, setSelectedId] = useState(null)
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		const getData = async () => {
			setLoading(true);
			let rawData = await fetchReddit(searchParams.get('sub'))
			let filteredData = filterImagePosts(rawData);
			setData(filteredData);
			setLoading(false);
		}

		setData([]);
		getData();

	},[searchParams])

	useEffect(() => {
		if(selectedId)
			document.body.classList.add('lightbox')
		else
			document.body.classList.remove('lightbox')
	}, [selectedId])

	return (
		<section>
			<GalleryGrid loading={loading} data={data} selectedId={selectedId} setSelectedId={setSelectedId} />
			<AnimatePresence>
				{ selectedId && <GalleryLightbox selectedId={selectedId} setSelectedId={setSelectedId} /> }
			</AnimatePresence>
		</section>
	)
}

export default Gallery