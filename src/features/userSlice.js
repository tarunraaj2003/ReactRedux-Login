import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        values:[]
    },
        reducers:{
            login:(state,action)=>{
                state.user=action.payload;
                state.values=[...state.values,state.user];
            },
            logout:(state)=>{
                state.user=null; 
            },
            remove:(state,action)=>{
                let filtered=state.values.filter((character,index)=>{
                    return index!==action.payload
                })
                state.values=filtered;
            }
        },
})

export const {login,logout,remove}=userSlice.actions;

export const selectUser=(state)=>state.user.user;

export const selectValues=(state)=>state.user.values;

export default userSlice.reducer;