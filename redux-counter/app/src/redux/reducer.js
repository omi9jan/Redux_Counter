import {INC, DEC} from "./actionTypes"

const initalState = {
    count : 0
}

export const reducerFun = (state=initalState, {type, payload}) => {
    switch(type)
    {
        case INC :{
            return{
                ...state,
                count: state.count + payload,
            }
        }
        case DEC :{
            return{
                ...state,
                count : state.count - payload,
            }
        }
        default:{
            return state;
        }     
    }
}

