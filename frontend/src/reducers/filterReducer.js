
const initialState = {
    filterBy: '',
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FILTER_ACTION':
            return{...state, filterBy: 'action',}
        case 'FILTER_COMEDY':
                return{...state, filterBy: 'comedy',}
        case 'FILTER_DRAMA':
            return{...state, filterBy: 'drama',}
        case 'FILTER_FANTASY':
            return{...state, filterBy: 'fantasy',}
        case 'FILTER_THRILLER':
            return{...state, filterBy: 'thriller',}
        default:
            return{
                ...state
            }
    }
}

export default filterReducer