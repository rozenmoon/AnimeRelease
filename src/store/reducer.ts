import {combineReducers} from 'redux';

const hoveredElement = (state = {id: -1}, action: {type: string, id: number}) => {
	switch(action.type){
		case 'MOUSEENTER':
			return {
				...state,id: action.id}

		case 'MOUSELEAVE':
			return{
				...state,id: -1}

		default:
			return state;
	}

}

const InitialData = (state = {}, action: {type:string, data: any}) => {
	switch(action.type){
		case 'LOAD_INIT_DATA':
			return {
				...state, loading: true, upcoming: {}
			};
		case 'UPCOMING_SUCESS':
			return {
				...state, upcoming: action.data.top.slice(0,8), loading: false
			}
		default:
			return state
	}
}

const SelectedAnime = (state = {}, action: {type: string, selectedAnime?: any, selectedAnimeData?: any}) => {
	switch(action.type){
		case 'SELECT_ANIME_START':
			return{
				...state, selectedAnime: action.selectedAnime
			};
		case 'SELECT_ANIME_SUCCESS':
				return{
				...state, selecedAnimeData: action.selectedAnimeData
			};
		default:
			return state
	}
}

export default combineReducers({hoveredElement,InitialData,SelectedAnime});