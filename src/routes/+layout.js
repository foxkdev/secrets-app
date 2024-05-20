import { error } from '@sveltejs/kit';
import { getOrganization } from '$api/islands/organization/organization';

/** @type {import('../$types').PageLoad} */
export async function load({ params }) {
  const user = {
    id: 1,
    name: "Carlos",
  }
  const org = await getOrganization(params.id);
	return {
    user,
    org,
  };
	// error(404, 'Not found');
}