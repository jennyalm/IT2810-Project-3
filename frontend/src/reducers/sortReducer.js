
const initialState = {
    sortBy: 'Year',
    order: -1
}

const sortReducer = (state = initialState, action) => {
    switch(action.type){
        case 'YEAR_ASC':
            return{
                ...state,
                sortBy: 'Year',
                order: -1
            }
        case 'YEAR_DESC':
            return{
                ...state,
                sortBy: 'Year',
                order: 1
            }
        case 'TITLE_ASC':
            return{
                ...state,
                sortBy: 'Title',
                order: 1
            }
        case 'TITLE_DESC':
            return{
                ...state,
                sortBy: 'Title',
                order: -1
            }
        default:
            return{
                ...state
            }
    }
}

export default sortReducer