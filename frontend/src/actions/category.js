const initialState = {
    category: [{
        id: 0,
        title: 'IPHONE'
    }]
}

export default (state, action) => {

    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                category: action.payload
            };
        case 'ADD_CATEGORY':
            return {
                category: [
                    ...state.category,
                    action.payload
                ]
            };
        default:
            return state;
    }
}