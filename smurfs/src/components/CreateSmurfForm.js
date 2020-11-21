import React, {useState} from 'react'
import axios from 'axios';

const CreateSmurfForm = () => {

    const [formState, setFormState]=useState({
        name:'',
        age:0,
        height:''
    })

    const handleChange= (e) => {
        console.log(e)
        e.preventDefault();
        setFormState({[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        axios.post("http://localhost:3333/smurfs",{
            name:formState.name,
            age:formState.age,
            height: formState.height,
            id:Date.now()
        })
        .then((res)=>{console.log(res)})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>BUILD YOUR OWN SMURF</h1>
                <label htmlFor="name">Smurf Name: 
                    {' '}<input type="text" id="name" name="name" value={formState.name} onChange={handleChange}/>
                </label><br/>
                <label htmlFor="age"> Smurf Age:
                   {'   '} <input type="number" id="age" name="age" value={formState.age}
                    onChange={handleChange}
                    />
                </label><br/>
                <label htmlFor="height">Smurf Height:
                   {' '} <input type="text" id="height" name="height" value={formState.height}
                    onChange={handleChange}/>
                </label><br/>
                <button type="submit">Create Smurf</button><br/>
                <br/>
            </form>
        </div>
    )
}

export default CreateSmurfForm
