import { sanitizeSub } from "./sanitizeSub"

export async function fetchReddit(sub) {

	const sanitizedSub = sanitizeSub(sub)

	if(!sanitizedSub) {
		return []
	}

	const endpoint = `https://api.reddit.com/r/${sanitizedSub}/hot?limit=100&raw_json=1`
	
	let res = [];
	try{
		res = await fetch(
			endpoint,
			{
				method: 'GET',
				mode: 'cors',
				redirect: 'follow'
			}
		)
	}
	catch(err) {
		return res;
	}

	const json = await res.json();

	if(!json?.data?.children) {
		return [];
	}

	return json.data.children;
}

export function filterImagePosts(data) {
	if(!data || data.length === 0) return []
	return data.filter(post => post.data.post_hint === 'image' || post.data.domain === 'i.redd.it')
}