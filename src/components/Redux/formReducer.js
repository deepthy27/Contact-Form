import {FORM_DATA} from './formType';

const formReducer=(state,action)=>{
    switch(action.type){
        case FORM_DATA:
            return{
               ...state,
               formData:action.payload
            }
        default: return state
    }
}

export default formReducer;