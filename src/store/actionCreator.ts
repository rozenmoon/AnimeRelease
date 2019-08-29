export const onMouseEnterTile = (id: number) => ({
	type: 'MOUSEENTER',
	id: id,
})

export const onMouseLeaveTile = () => ({
	type: 'MOUSELEAVE',
})

export const loadInitData = () => ({
	type: 'LOAD_INIT_DATA',
})