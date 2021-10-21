import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';


const Home = () => {
  const { loginWithRedirect } = useAuth0();
return (

<div id="wrapper">
<Container fluid id="container">
<Jumbotron fluid id="jumbo">
        <h1>Numerology: Life Path Calculator</h1>
        <br />
        <br />
        <br />
        
          <br />
      <Button onClick={() => loginWithRedirect()}>Get My Life Path Number!</Button>
      </Jumbotron>
      </Container>

</div>
)
}

export default Home