export const success = (search) => {
    return{
        type: 'SEARCH_MOVIES_SUCCESS',
        payload: search
    }
};
export const failure = (search) => {
    return{
        type: 'SEARCH_MOVIES_FAILURE',
        payload: search
    }
};
export const req = () => {
    return{
        type: 'SEARCH_MOVIES_REQUEST',
    }
};

export const yearAsc = () => {
    return{
        type: 'YEAR_ASC'
    }
};

export const yearDesc = () => {
    return{
        type: 'YEAR_DESC'
    }
};