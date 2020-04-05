import {filmlist} from "../App" 
import { ADD_MOVIE, DELETE,EDIT } from "../Actions/Action const"

 const intialState={filmlist}
 function movieReducer(state=intialState ,{newmovie,type,id,payload}){
     switch(type){
         case ADD_MOVIE:
             return{...state,filmlist:[...state.filmlist,newmovie]             }

        case DELETE:
            return{...state,filmlist:state.filmlist.filter(el=>el.id!==id)}
        case EDIT:
            return{ ...state,filmlist:state.filmlist.map(el=>el.id==payload.id?payload:el) }

             default:
                return state
     }
    
  
 }
export default movieReducer