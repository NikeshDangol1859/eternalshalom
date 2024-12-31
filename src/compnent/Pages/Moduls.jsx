import React from 'react'
import { Modal } from 'react-bootstrap'

function Moduls(props) {

    let saveData = () => {
        let dataValidation = {}
          if(!input_data.name){
            dataValidation.name = "Name is required"
          }       
          if(!input_data.gender){
            dataValidation.gender = "Gender is required"
          }
          if(!input_data.address){
            dataValidation.address = "address is required"
          }
          if(!input_data.age){
            dataValidation.age = "age is required"
          }
          if(!input_data.email){
            dataValidation.email = "email is required"
          }
          else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input_data.email)){
            dataValidation.email = "Should contain @gmail.com"
          }
          if(!input_data.password){
            dataValidation.password = "password is required"
          }
  
  
  
  
  
          seterror (dataValidation)
  
          if(Object.keys(dataValidation).length==0)
            {
              if (props.getedit == "") {                  
                      toast.success("Successfully User Added")                 
                  
                }
                else {
                    toast.success("Successfully User Modified")               
                  
                }   
                        
            }
  
      }



  return (
    <>
       
<Modal show={showhide}>
        <Modal.Header closeButton onClick={()=>{props.getadduser()}}>
          <Modal.Title>Register Student</Modal.Title>
        </Modal.Header>

<Modal.Body>
<div className='container p-3'>
  <label htmlFor="name" className="form-label">Student's Name</label>
  <input type="text" id="uname" className="form-control" name='name' value={input_data.name} onChange={setData}/> 
  {error.name && <span className='text-danger'>{error.name} </span>} <br></br>
  <label htmlFor="name" className="form-label">Gender</label>
  <input type="text" id="ugender" className="form-control" name='gender' value={input_data.gender} onChange={setData}/> 
  {error.gender && <span className='text-danger'>{error.gender} </span>} <br></br> 
  <label htmlFor="name" className="form-label">Address</label>
  <input type="text" id="uaddress" className="form-control" name='address' value={input_data.address} onChange={setData}/>  
  {error.address && <span className='text-danger'>{error.address} </span>} <br></br>
  <label htmlFor="name" className="form-label">Age</label>
  <input type="text" id="uage" className="form-control" name='age' value={input_data.age} onChange={setData}/> 
  {error.age && <span className='text-danger'>{error.age} </span>} <br></br> 
  <label htmlFor="name" className="form-label">Class</label>
  <input type="email" id="uemail" className="form-control" name='email' value={input_data.email}  onChange={setData}/> 
  {error.email && <span className='text-danger'>{error.email} </span>} <br></br>
  <label htmlFor="name" className="form-label">Parent's Name</label>
  <input type="text" id="upass" className="form-control" name='password' value={input_data.password}  onChange={setData}/> 
  {error.password && <span className='text-danger'>{error.password} </span>} <br></br>
  
</div>
</Modal.Body>
<Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.getadduser()}}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
      
    </>
  )
}

export default Moduls
