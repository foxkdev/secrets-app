import { error } from '@sveltejs/kit';
import { getPage } from '$api/page';

/** @type {import('../$types').PageLoad} */
export function load({ params }) {
	const page = getPage(params.slug)
	return page;
	// error(404, 'Not found');
}