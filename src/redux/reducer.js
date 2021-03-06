import * as types from './actiontypes'

const initialState=[
    {
        users:[],
        user:{},
        loading:true,
    }
]



export const usersReducers=(state=initialState,action)=>{
     switch(action.type){

         case types.GET_USERS:
             return{
                 ...state,
                 users:action.payload,
                 loading:false
             } ;
             case types.DELETE_USER:
                 return{
                     ...state,
                     loading:false
                 };
                 case types.GET_SINGLE_USER:
                    return{
                        ...state,
                        user:action.payload,
                        loading:false
                    };
              default:return state;
     }
}