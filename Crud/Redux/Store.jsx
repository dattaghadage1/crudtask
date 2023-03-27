import { configureStore } from "@reduxjs/toolkit";
import users from '../Redux/Reducer/Reducer1'

const store=configureStore({
reducer:{
    users:users
}
})
export default store