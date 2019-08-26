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

export default combineReducers({hoveredElement});