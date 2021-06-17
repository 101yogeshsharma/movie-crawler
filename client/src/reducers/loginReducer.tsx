const initialState = false;

export default function(state = initialState, action:any) {
    switch(action.type) {
        case 'LOGIN':
            console.log('logging in', action.payload)
            state = action.payload;
            return state;

        case 'LOGOUT':
            console.log('logging out', action.payload)
            state = action.payload;
            return state;
        
        default: return state
    };
}