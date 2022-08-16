import styles from './Search.module.scss'

import { useSearchParams } from "react-router-dom";
import { useState } from 'react'
import { sanitizeSub } from "../../lib/sanitizeSub"

function Search() {
	let [searchParams, setSearchParams] = useSearchParams();
	let [ value, setValue ] = useState(searchParams.get('sub') || '')

	const write = (value) => {
		setValue(sanitizeSub(value))
	}

	const submit = (value) => {
		setSearchParams({ sub: value })
	}
	
	return (
		<div className={`form-element ${styles.search}`}>
			<input
				type="text"
				className="input flat"
				placeholder="Type a subreddit"
				value={value}
				onChange={evt => write(evt.target.value)}
				onBlur={evt => submit(evt.target.value)}
				onKeyDown={evt => { evt.key === 'Enter' && submit(evt.target.value) }}
			/>
		</div>
	);
}

export default Search;
