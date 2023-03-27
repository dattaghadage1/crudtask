import { createSlice } from "@reduxjs/toolkit";
const INCDECSLICE = createSlice({
    name: "INCDEC",
    initialState: {
        users: []
    },
    reducers: {
        ADDUSER: (state, action) => {
            state.users.push(action.payload)
        },
        DELETE: (state, action) => {
            const exist = state.users.find((e) => e.id === action.payload)
            if (exist.id === action.payload) {
                state.users = state.users.filter((emp) => emp.id !== action.payload)
            }
            else {
                alert("errooooor")
            }
        },
        UPDATEEMP: (state, action) => {
            const { id, name, age, city } = action.payload
            console.log(name)
            let update = state.users.find((emp) => emp.id === id)
            if (update) {
                update.name = name
                update.age = age
                update.city = city
            } else {
                console.log("not match id")
            }
        }
    }
})
export default INCDECSLICE.reducer;
export const { ADDUSER, DELETE, UPDATEEMP } = INCDECSLICE.actions;
