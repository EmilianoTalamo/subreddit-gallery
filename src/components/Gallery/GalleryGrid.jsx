import styles from "./Gallery.module.scss";

import { CircleLoader } from "react-spinners";
import GalleryItem from "./GalleryItem";

function GalleryGrid({ data, loading, selectedId, setSelectedId }) {
	if(loading)
		return (
			<div className={styles.loader}>
				<CircleLoader color="#ffffff" />
			</div>
		)
	else
		return (
			<ul className={styles.grid}>
				{data.map((post) => {

					const pic = post.data.preview?.images[0]?.resolutions[2]?.url ||
					post.data.url_overridden_by_dest;

					return (<GalleryItem
						key={post.data.id}
						pic={pic}
						id={post.data}
						selectedId={selectedId}
						setSelectedId={setSelectedId}
					/>)
					})}
			</ul>
		);
}

export default GalleryGrid;
