export const menuItems  = [
	// Home Menu
	{
		id: 'home',
		label: 'home',
        to:'/'
	},
	// Shop Menu
	{
		id: 'shop',
		label: 'shop',
		subs: [
			{
				id: '1',
				label: 'accessories',
				to: 'shop/accessories'
			},
			{
				id: '2',
				label: 'coffee',
				to: '/shop/coffee'
			},
			{
				id: '3',
				label: 'glasses',
				to: 'shop/glasses'
			}
		]
	},
	// About Menu
	{
		id: 'about',
		label: 'about',
		to: '/about-us'
	}
];
