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
    <Form style={{ backgroundColor: "red", textAlign: "left" }}>
      <FormGroup>
        <Label for="exampleEmail">Plain Text (Static)</Label>
        <Input plaintext value="Some plain text/ static value" />
      </FormGroup>
      <FormGroup>
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
      <FormGroup>
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
      <FormGroup>
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
      <FormGroup>
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
      <FormGroup>
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
      {/* <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleNumber">Number</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="number placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input
          type="datetime"
          name="datetime"
          id="exampleDatetime"
          placeholder="datetime placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleColor">Color</Label>
        <Input
          type="color"
          name="color"
          id="exampleColor"
          placeholder="color placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
          multiple
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
      {/* <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleRange">Range</Label>
        <Input type="range" name="range" id="exampleRange" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" /> Option one is this and that—be sure to include
          why it's great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup> */}
      <Button onClick={handleFormSubmit}>Submit</Button>
    </Form>
  );
};

export default ProfileForm;
