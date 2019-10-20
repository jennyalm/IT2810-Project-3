import axios from 'axios';


export const success = (search) => {
    return{
        type: 'SEARCH_MOVIES_SUCCESS',
        payload: search
    }
}
export const failure = (search) => {
    return{
        type: 'SEARCH_MOVIES_FAILURE',
        payload: search
    }
}
export const req = () => {
    return{
        type: 'SEARCH_MOVIES_REQUEST',
    }
}

export const yearAsc = () => {
    return{
        type: 'YEAR_ASC'
    }
}

export const yearDesc = () => {
    return{
        type: 'YEAR_DESC'
    }
}

// Fetch items (with axios) from database and dispatch to updateItems.
export const fetchItems = url => {
    return (dispatch) => {
        return axios.get(url)
            .then(
                response => dispatch(req())
            )
            .catch(error => {
                console.log('Feil');
                console.log(error);
            });
    };
}