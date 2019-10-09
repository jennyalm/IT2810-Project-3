export const increment = () => {
    return {
        type: 'INCREMENT',
        payload: 10
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT',
        payload: 5
    };
};

export const search = (txt) => {
    return {
        type: 'SEARCH',
        payload: txt
    };
};

export const save_search = () => {
    return {
        type: 'SAVE_SEARCH',
    }
}