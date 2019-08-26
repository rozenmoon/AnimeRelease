export const onMouseEnterTile = (id: number) => ({
	type: 'MOUSEENTER',
	id: id,
})

export const onMouseLeaveTile = () => ({
	type: 'MOUSELEAVE',
})