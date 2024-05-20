<script>
	// import Header from './Header.svelte';
	import { page } from "$app/stores";
	import './styles.css';

	export let data;

	const org = data.org
	const user = data.user

	const menus = [
		{
			name: 'Projects',
			icon: '#',
			link: '/projects',
			active: false
		},
		{
			name: 'Members',
			icon: '#',
			link: '/members',
			active: false
		},
		{
			name: 'Settings',
			icon: '#',
			link: '/settings',
			active: false
		}
	]

	const getPageActive = () => {
		console.log('PAGE', $page)
		const prefixPath = "/org/[id]"
		menus.forEach(menu => {
			const path = prefixPath + menu.link
			if (path == $page.route.id) {
				menu.active = true
			} else {
				menu.active = false
			}
		})
	}

	getPageActive()
	console.log('LAYOUT', data)
</script>

<div class="flex w-full h-full">
	<div class="flex flex-col min-w-60 w-60 bg-gray-100 h-full shadow-[rgba(0,0,0,0.024)_-1px_0px_0px_0px_inset] overflow-hidden p-4">
		<div class="flex justify-between w-full">
			<div class="flex text-lg h-10 items-center">{org.name}</div>
			<a class="flex bg-gray-600 hover:bg-gray-700 text-white items-center justify-center w-10 h-10 rounded-full" href="/account">
				{user.name.slice(0, 1)}
			</a>
		</div>
		<div class="flex flex-col gap-1 mt-4">
			{#each menus as menu}
				<a href={`/org/${$page.params.id}${menu.link}`} class={`flex items-center p-3 hover:bg-gray-200 rounded-lg font-medium ${menu.active ? "bg-gray-200": ""}`}>
					<img src={menu.icon} class="mr-6"/>
					{menu.name}
				</a>
			{/each}
		</div>
	</div>
	<slot class="p-3 w-full"/>
</div>
