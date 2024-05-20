import { getOrganization } from '$api/islands/organization/organization';
import { error } from '@sveltejs/kit';

/** @type {import('../$types').PageLoad} */
export async function load({ params }) {
	const org = await getOrganization(params.id);
	return org ? { org } : error(404, 'Not found');
	// error(404, 'Not found');
}