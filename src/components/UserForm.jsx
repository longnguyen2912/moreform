import React, {useState} from "react";

const UserForm = (props) => {
    const [firstname,setFirstName] = useState("");
    const [firstnameVali,setfirstnameVali] = useState(false);
    const [lastname,setLastName] = useState("");
    const [lastnameVali,setlastnameVali] = useState(false);
    const [email,setEmail] = useState("");
    const [emailVali,setemailVali] = useState(false);
    const [password,setPassword] = useState("");
    const [passwordVali,setpasswordVali] = useState(false);
    const [confirmed,setConfirmed] = useState("");
    const [confirmedVali,setconfirmedVali] = useState(false);

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setfirstnameVali(<p>First Name must be at least 2 characters</p>);
        }
        else{
            setfirstnameVali(<></>);
        }
        if(e.target.value.length===0){
            setfirstnameVali(<></>);
        }
    }
    const validateLastName = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setlastnameVali(<p>Last Name must be at least 2 characters</p>);
        }
        else{
            setlastnameVali(<></>);
        }
        if(e.target.value.length===0){
            setlastnameVali(<></>);
        }
    }
    const validateEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length<2){
            setemailVali(<p>Email must be at least 2 characters</p>);
        }
        else{
            setemailVali(<></>);
        }
        if(e.target.value.length===0){
            setemailVali(<></>);
        }
    }
    const validatePassword = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setpasswordVali(<p>Password must be at least 8 characters</p>);
        }
        else{
            setpasswordVali(<></>);
        }
        if(e.target.value.length===0){
            setpasswordVali(<></>);
        }
    }
    const validateConfirmed = (e) =>{
        setConfirmed(e.target.value);
        if(e.target.value.length!== password){
            setconfirmedVali(<p>Password must match</p>);
        }
        else{
            setconfirmedVali(<></>);
        }
        if(e.target.value.length===0){
            setconfirmedVali(<></>);
        }
    }
    
    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="firstname">First Name: </label>
                    <input type="text" onChange={validateFirstName} value={firstname} />
                </div>
                {firstnameVali}
                <div>
                    <label htmlFor="lastname">Last Name: </label>
                    <input id="lastname" type="text" onChange={validateLastName}  value={lastname} />
                </div>
                {lastnameVali}
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" onChange={validateEmail} value={email} />
                </div>
                {emailVali}
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" onChange={validatePassword} value={password} />
                </div>
                {passwordVali}
                <div>
                    <label htmlFor="confirmed">Confirm Password: </label>
                    <input id="confirmed" type="password" onChange={validateConfirmed} value={confirmed} />
                </div>
                {confirmedVali}
            </form> 
        </div>
    );
}
export default UserForm;