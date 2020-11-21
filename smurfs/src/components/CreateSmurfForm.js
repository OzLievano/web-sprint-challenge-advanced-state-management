import React, {useState} from 'react'

const CreateSmurfForm = () => {
    const [formState, setFormState] = useState({
        name:'',
        age:'',
        height:'',
        id:Date.now()
    })

    const handleChange= (e) => {
        console.log(e)
        setFormState(e.target.value)
    }
    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}

export default CreateSmurfForm
