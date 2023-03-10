import {INC, DEC} from "./actionTypes";

const initialstate = {
    count :0,
}
export const reducer = (state = initialstate, action) => {
    switch(action.type)
    {
        case INC :
        {
            return{
                ...state,
                count : state.count + action.payload,
            };
        };
        case DEC : 
        {
            return{
                ...state,
                count : state.count - action.payload,
            };
        };
        default:
        {
            return state;
        };
    }
}