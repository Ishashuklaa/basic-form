import { useState } from "react"

export default function Form (){
   let [FormData, setFormData] = useState({
    fullName:"",
    Username:""
   });
//     let handleNameChange =(event)=>{
//          setFullName(event.target.value);
//     }

//     let handleUsername =(event)=>{
//         setUsername(event.target.value);
//    }

let handleInputChange=(event)=>{
   let fieldName = event.target.name;
  let newValue = event.target.value;

 setFormData((currData) =>{
    currData[fieldName] = newValue;
    return{...currData};
 });

};

 let handleSubmit=(event)=>{
    event.preventDefault();
    setFormData({
        fullName:"",
        Username:"",
        Password:"",
    });
 };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname"> FullName </label> 
            <input 
            placeholder="enter your fullname"
             type="text" 
             value={FormData.fullName} 
             onChange={handleInputChange}
             id="fullName"
             name="fullName"
             />
             <br></br>
            <label htmlFor="Username"> Username </label> 
            <input 
            placeholder="enter Username"
             type="text" 
             value={FormData.Username} 
             onChange={handleInputChange}
             id="Username"
             name="Username"
             />
             <br></br>
             <label htmlFor="Password"> Password </label> 
            <input 
            placeholder="enter Password"
             type="text" 
             value={FormData.Password} 
             onChange={handleInputChange}
             id="Password"
             name="Password"
             />
             <br></br>
            <button> Submit </button>
        </form>
    )
}