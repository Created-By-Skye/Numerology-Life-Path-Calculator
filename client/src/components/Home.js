import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Home.css';
import SignupButton from './SignupButton'

const Home = () => {
return (
  
<div id="wrapper">
<Container fluid id="container">
<Jumbotron fluid id="jumbo">
        <h1>Numerology: Life Path Calculator</h1>
        <br />
        <br />
        <br />
          <h2 className="lead">Click below to find your path!</h2>
          <br />
       <SignupButton />
      </Jumbotron>
      </Container>

</div>
)
}

export default Home