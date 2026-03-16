import React, { useState } from "react";

function FormValidation(){
    const[formdata, setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
    const[error, setErrors]=useState({});

    //handle input change
    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData({
            ...formdata,
            [name]:value
        });
    };

    // form validation logic
    const validateform=()=>{
        let newErrors={};

        //name valodation
        if(formdata.name.trim()===""){
            newErrors.name="Name is Required"; 
        }

        //email valodation
        const emailpattern=/\S+@\S+\.\S+/;
        if(formdata.email===""){
            newErrors.email="Email is Required"; 
        }else if (!emailpattern.test(formdata)){
            newErrors.email="Invalid Email Format";
        }

        //password valiadtion
        if(formdata.password===""){
            newErrors.email="Password is Required"; 
        }else if (formdata.password.length<6){
            newErrors.password="Password must be more than 6 charecters";
        }
        return newErrors;

    };

    //submit handeler

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationErrors=validateform();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }else{
            alert("Form Submitted Successfully");

            setFormData({
                name:"",
                email:"",
                password:""
            });
            setErrors({});
        }
    };

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>User Registration</h2>

                <label>Name</label>
                <input 
                type="text" 
                name="name"
                value={formdata.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                />
                {console.name&& <p className="error">{errors.name}</p>}



                <label>Email</label>
                <input 
                type="text" 
                name="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Enter your email"
                />
                {console.email&& <p className="error">{errors.email}</p>}


                <label>Password</label>
                <input 
                type="password" 
                name="password"
                value={formdata.password}
                onChange={handleChange}
                placeholder="Enter your password"
                />
                {console.password&& <p className="error">{errors.password}</p>}


                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default FormValidation;