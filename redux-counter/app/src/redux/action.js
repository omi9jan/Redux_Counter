import {INC,DEC} from "./actionTypes";

export const Increment = () => ({type:INC, payload:1})
export const Decrement = () => ({type:DEC, payload:1})