import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import axios from "axios";

const ProfileForm = () => {
  const {
    user: { email },
  } = useAuth0();

  const [currentName, setCurrentName] = useState("");
  const [currentGender, setCurrentGender] = useState("");
  const [currentBirthMonth, setCurrentBirthMonth] = useState("");
  const [currentBirthDay, setCurrentBirthDay] = useState("");
  const [currentBirthYear, setCurrentBirthYear] = useState("");

  const handleFormSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/profiles", {
        name: currentName,
        birthMonth: Number(currentBirthMonth),
        birthDay: Number(currentBirthDay),
        birthYear: Number(currentBirthYear),
        gender: currentGender,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form style={{ backgroundColor: "#fff", textAlign: "left", margin: '2em 4em', padding: '1.5em 3em', borderRadius: '10px' }}>
      <h1 style={{textAlign: 'center'}}>Create First Profile</h1>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileName">Name</Label>
        <Input
          type="text"
          name="profileName"
          id="profileName"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          placeholder="Your Name"
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileGender">Gender</Label>
        <Input
          type="text"
          name="profileGender"
          id="profileGender"
          value={currentGender}
          onChange={(e) => setCurrentGender(e.target.value)}
          placeholder="Male, Female, Non-Binary, Other"
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileBirthMonth">Birth Month (Enter as number)</Label>
        <Input
          type="number"
          name="profileBirthMonth"
          id="profileBirthMonth"
          value={currentBirthMonth}
          onChange={(e) => setCurrentBirthMonth(e.target.value)}
          placeholder="7"
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileBirthDay">Birth Date (Enter as number)</Label>
        <Input
          type="number"
          name="profileBirthDay"
          id="profileBirthDay"
          value={currentBirthDay}
          onChange={(e) => setCurrentBirthDay(e.target.value)}
          placeholder="21"
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileBirthYear">Birth Year (Enter as number)</Label>
        <Input
          type="number"
          name="profileBirthYear"
          id="profileBirthYear"
          value={currentBirthYear}
          onChange={(e) => setCurrentBirthYear(e.target.value)}
          placeholder="1998"
        />
      </FormGroup>
      <Button onClick={handleFormSubmit}>Submit</Button>
    </Form>
  );
};

export default ProfileForm;
