import React from 'react';
import { Form, Label, FormGroup, Input } from 'reactstrap';

import { Button } from 'react-bootstrap';



const ProfileForm =() => {
  
  
return (
    <Form style={{
      backgroundColor: 'white',
      textAlign: 'left',
      width: '500px',
      height: '600px',
      position: 'relative',
      left: '200px',
      top: '40px',
      padding: '10px 10px 10px 10px',
      margin: '20px 20px 20px 20px'
    }}>
      <FormGroup>

        <Label htmlFor="profileForm"><h1>Your Numerology Profile</h1></Label>
        
      </FormGroup>
      <FormGroup>
        <Label htmlFor="firstAndLastName">Email Address</Label>
      <Input 
          type="email"
          name="email"
          id="email"
         />
        
      </FormGroup>
     
      <FormGroup>
        <Label htmlFor="fullName">Full Name</Label>
      <Input 
          type="text"
          name="fullName"
          id="fullName"
         />
        
        
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="birthDate">Birth Date</Label>
        <Input
          type="date"
          name="birthDate"
          id="birthDate"
          />
        
      </FormGroup>
      
     
      <FormGroup>
        <Label htmlFor="gender">Gender</Label>
      <Input type="select" name="gender" id="gender" >
       
          <option> </option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          <option>Prefer Not To Say</option>
      </Input>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="colorPicker">Color</Label>
        <Input
          type="color"
          name="colorPicker"
          id="colorPicker"
          placeholder="color placeholder"
          style={{height: '50px'}}
          
        />
      </FormGroup>
    
       
     <Button
          type="submit"
          name="submit"
          id="b" >
         
      Submit
          
        </Button>
    

     
    </Form>
  );
}
  

export default ProfileForm