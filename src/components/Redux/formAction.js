import {FORM_DATA} from './formType';

export const storeFormData=(data)=>{
    return{
        type:FORM_DATA,
        payload:data
    }
}