import { useState } from "react";

export default function CommentsForm(){

    let [formData, setFormData] = useState({
        username:"",
        Remarks:"",
        rating:5,
    });


    let handleInputChange=(event)=>{
        setFormData((currData) => {
            return{...currData, [event.target.name] : event.target.value}
        });
    };


    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
          username:"",
          Remarks:"",
          rating:"",
        });
    }

    return(
        <div>
            <h4> Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <input
                 placeholder="username" 
                 type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  id="username"
                  name="username"
                  />
                <br></br> <br></br>
                  
                  <label htmlFor="remark"> Remarks</label>
                <textarea value={formData.Remarks} placeholder="Remarks" onChange={handleInputChange} id="remark"  name="Remarks">Remarks</textarea>
                <br></br> <br></br>

                 <label htmlFor="rating"> rating</label>
                <input
                 placeholder="rating" 
                 type="number" min={1} max={5}
                  value={formData.rating}
                  onChange={handleInputChange}
                  id="rating"
                  name="rating"
                  />
                <br></br> <br></br>

                <button> Add Comment </button>
            </form>
        </div>
    );
}