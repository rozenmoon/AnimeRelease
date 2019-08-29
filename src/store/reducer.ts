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

export default combineReducers({hoveredElement,InitialData});