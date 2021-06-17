const initialState: any = [];

export default function search (state = initialState, action:any) {
    switch(action.type) {
        case 'SEARCH_BY_ID':
            console.log('search id', action.payload)
            state = action.payload;
            return state;

        case 'SEARCH_BY_KEYWORD':
            // console.log('search keyword', ...action.payload)
            state = action.payload;
            return state;
        
        default: return state
    };
}