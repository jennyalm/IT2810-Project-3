const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case "SEARCH_MOVIES_FAILURE":
            return {
                ...state,
                loading: true,
                errorMessage: action.error
            };
        default:
            return{
                ...state,
                loading: false,
                movies: [],
                errorMessage: null
            }
    }
};

export default reducer