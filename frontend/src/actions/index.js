// creates the action for dispatching to redux-store

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

export const titleAsc = () => {
    return{
        type: 'TITLE_ASC'
    }
};

export const titleDesc = () => {
    return{
        type: 'TITLE_DESC'
    }
};

export const searchValue = (search) => {
    console.log("search payload: " + search);
    return{
        type: 'SEARCH',
        payload: search
    }
}

export const nextPage = () => {
    return{
        type: 'NEXT_PAGE',
    }
}

export const prevPage = () => {
    return{
        type: 'PREV_PAGE',
    }
}

export const resetPage = () => {
    return{
        type: 'RESET_PAGE',
    }
}

export const filterAction = () => {
    return{
        type: 'FILTER_ACTION'
    }
}
export const filterComedy = () => {
    return{
        type: 'FILTER_COMEDY'
    }
}
export const filterDrama = () => {
    return{
        type: 'FILTER_DRAMA'
    }
}
export const filterFantasy = () => {
    return{
        type: 'FILTER_FANTASY'
    }
}
export const filterThriller = () => {
    return{
        type: 'FILTER_THRILLER'
    }
}


