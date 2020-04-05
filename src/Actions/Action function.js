import { ADD_MOVIE, DELETE, EDIT } from "./Action const";



export const addMovie=(newmovie)=>({
    type:ADD_MOVIE, newmovie:{...newmovie,id:Math.random()}

})
export const deleteMovie=(id)=>({
    type:DELETE,id
})
export const editMovie=(payload)=>({
    type:EDIT,payload
})
