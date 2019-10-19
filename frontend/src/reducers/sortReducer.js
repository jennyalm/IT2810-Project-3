
const initialState = {
    sortBy: 'Year',
    order: 1
}

const sortReducer = (state = initialState, action) => {
    switch(action.type){
        case 'YEAR_ASC':
            return{
                sortBy: 'Year',
                order: 1
            }
        case 'YEAR_DESC':
            return{
                sortBy: 'Year',
                order: -1
            }
        default:
            return{
                sortBy: 'Year',
                order: 1
            }
    }
}

export default sortReducer