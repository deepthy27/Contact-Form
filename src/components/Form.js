import React, { useState} from 'react';
import {useFormik } from 'formik';
import form from '../assets/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import { storeFormData } from './Redux/formAction';
function Form(props) {

    const [eyepassword, setHidden, hide] = useState('false');
    const [visible, setVisible] = useState(false);
    const [eyeconfirm, setPass, eye] = useState('false');
    const dispatch=useDispatch();
    const formik = useFormik({
        initialValues:{
            userName  : '',
            password: '',
            confirmPassword:'',
            email:'',
            phone:'',
            addressLane:'',
            city:'',
            stateName:'',
            zipCode:''
        },

        onSubmit:values =>{
           alertMessage();
           dispatch(storeFormData(values))
        },
        validate: values =>{
            let errors={}
            if(!values.userName){
                errors.userName='Required'
            }else if (!(values.userName.match(/^[A-Za-z]+$/))){
                errors.userName='Invalid User Name'
            }

            if(!values.password){
                errors.password='Required'
            }else if (!(values.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/))){
                errors.password='Password should contain atleast 8 to 15 characters,at least one lowercase,one uppercase,one numeric digit,one special character'
            }

            if(!values.confirmPassword){
                errors.confirmPassword='Required'
            }else if (values.password !== values.confirmPassword){
                errors.confirmPassword="Password doesn't match"
            }
            if(!values.email){
                errors.email='Required'
            } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
                errors.email='Invalid Email format'
            }
            if(!values.phone){
                errors.phone='Required'
            }else if (!(values.phone.match(/^\d{10}$/))){
                errors.phone='Invalid Phone Number'
            }

            if(!values.addressLane){
             errors.addressLane='Required'
            }else if (!(values.addressLane.match(/^[a-zA-Z0-9\s,'-]*$/))){
                errors.addressLane='Address should Contain Alpha Numeric'
            }

            if(!values.city){
                errors.city='Required'
            }

            if(!values.stateName){
                errors.stateName='Required'
            }

            if(!values.zipCode){
                errors.zipCode='Required'
            }else if (!(values.zipCode.match(/^[0-9]+$/))){
                errors.zipCode='Invalid Zip Code'
            }
            return errors
            
        },
        validateOnMount:true
    });  
    const toggleShow = ()  => {
        const hide = setHidden(!eyepassword);
      
        }
        const toggleConfirmShow = ()  => {
          const eye = setPass(!eyeconfirm);
          
          }
          const onDismiss = () => {
              setVisible(false);
              props.history.push("/modal");
            };

          const alertMessage = ()=>setVisible(true);
  return (
    <div>
        <div className="container">
            <div className="jumbotron jumbotron-css">
            <h2 className="labels form-title">Details Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label className="labels">Name:</label>
                    <input type="text" className="form-control" value={formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Name (Ex:Jhon)" name="userName"/>
                    {formik.errors.userName && formik.touched.userName ? <div className="error">{formik.errors.userName}</div>:null}
                </div>    

                <div className="form-group"> 
                    <label className="labels">Email:</label>
                    <span className="glyphicon glyphicon-envelope"></span>
                    <input type="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Email (Ex:Jhon@gmail.com)" name="email"/>
                    {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div>:null}
                </div>

                <div className="form-group">
                    <label className="labels">Password:</label>
                    <input type={eyepassword ? "password" : "text"} className="form-control" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder="Enter password (Ex:LvIndia$4)" name="password"/>
                    <span onClick={toggleShow} className="eye-password">{eyepassword?<VisibilityIcon />:<VisibilityOffIcon/>}</span>
                    {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div>:null}
                </div>
                <div className="form-group">
                    <label className="labels">Confirm Password:</label>
                    <input type={eyeconfirm ? "password" : "text"} className="form-control"  value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter password (Ex:LvIndia$4)" name="confirmPassword"/>
                    <span onClick={toggleConfirmShow} className="eye-confirm-password" >{eyeconfirm?<VisibilityIcon/>:<VisibilityOffIcon/>}</span>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div>: null}
                </div>

                <div className="form-group">
                    <label className="labels" >Phone:</label>
                    <input type="tel" className="form-control"  value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Phone Number (Ex:9999999999)" name="phone"/>
                    {formik.errors.phone && formik.touched.phone ? <div className="error">{formik.errors.phone}</div>: null}
                </div> 

                <div className="form-group">
                    <label className="labels" >Address Lane:</label>
                    <input type="text" className="form-control" value={formik.values.addressLane} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Address (Ex:123 Main Street)" name="addressLane"/>
                    {formik.errors.addressLane && formik.touched.addressLane ? <div className="error">{formik.errors.addressLane}</div>: null}
                </div>
                <div className='row'>
                <div className="form-group col-sm-4">
                    <label className="labels" >city:</label>
                    <input type="text" className="form-control" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Address (Ex:Bangalore)" name="city"/>
                    {formik.errors.city && formik.touched.city ? <div className="error">{formik.errors.city}</div>: null}
                </div>  

                <div className="form-group col-sm-5">
                    <label className="labels" >State:</label>
                    <input type="text" className="form-control" value={formik.values.stateName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Address (Ex:Karnataka)" name="stateName"/>
                    {formik.errors.stateName && formik.touched.stateName ? <div className="error">{formik.errors.stateName}</div>: null}
                </div> 

                <div className="form-group col-sm-3">
                    <label className="labels" >Zip Code:</label>
                    <input type="text" className="form-control" value={formik.values.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Address (Ex:500230)" name="zipCode"/>
                    {formik.errors.zipCode && formik.touched.zipCode ? <div className="error">{formik.errors.zipCode}</div>: null}
                </div> 
                </div>

                <button type="submit" disabled={!formik.isValid} className="btn btn-info btn-lg btn-block">Submit</button>
            </form>
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                Form Submitted Successfully!!
            </Alert>
            </div>
        </div>

    </div>
  );
}

export default withRouter(Form);
