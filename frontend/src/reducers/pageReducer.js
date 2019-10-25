const initialState = {
    page: 1
};



const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return{
                ...state,
                page: state.page + 1
            }
        case 'PREV_PAGE':
            return{
                ...state,
                page: state.page - 1
            }
        case 'RESET_PAGE':
            return{
                ...state,
                page: 1
            }
        default:
            return{
               ...state
            }
    }
}


export default pageReducer