// import React, {useState} from 'react'
// import {connect} from 'react-redux'
// import {postDataToSmurf} from '../actions'

// const CreateSmurfForm = () => {

//     const [formState, setFormState]=useState({
//         name:'',
//         age:0,
//         height:'',
//         id:Date.now()
//     })

//     const handleChange= (e) => {
//         e.preventDefault();
//         setFormState({[e.target.name]:e.target.value});
//     }

//     return (
//         <div>
//             <form onSubmit={postDataToSmurf(formState)}>
//                 <h1>BUILD YOUR OWN SMURF</h1>
//                 Smurf Name:<input 
//                     type="text" 
//                     id="name" 
//                     name="name"
//                     value={formState.name}
//                     onChange={handleChange}
//                 /><br/>
//                 Smurf Age:<input 
//                     type="number" 
//                     id="age" 
//                     name="age"
//                     value={formState.age}
//                     onChange={handleChange}
//                 /><br/>
//                 Smurf Height:<input 
//                     type="text" 
//                     id="height" 
//                     name="height"
//                     value={formState.height}
//                     onChange={handleChange}
//                 />
//                 <button>Create Smurf</button>
//             </form>
//         </div>
//     )
// }

// export default connect(() => {
//     return {};
//   },{postDataToSmurf})(CreateSmurfForm)
