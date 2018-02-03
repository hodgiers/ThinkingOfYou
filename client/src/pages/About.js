import React from 'react'
import { Card, Icon, Reveal, Container, Image } from 'semantic-ui-react'
import '../App.css';

const CardExampleCardProps = () => (
  
  <Card.Group className="card-container backgroundImage">
  <Card>
    <Image src={require("../images/rashan.jpg")} />
    <Card.Content>
      <Card.Header>Rashan Hodge</Card.Header>
      <Card.Description>Protects networks from intrusion and could possibly stop collusion.</Card.Description>
    </Card.Content>
  </Card>
      
    
  <Card>
    <Image src={require("../images/arash.jpg")} />
    <Card.Content>
      <Card.Header>Arash Teimourpoor</Card.Header>
      <Card.Description>Saleforce architect by day, developer by night.</Card.Description>
    </Card.Content>
  </Card>
    
  <Card>
    <Image src={require("../images/bill.jpg")} />
    <Card.Content>
      <Card.Header>Bill Almy</Card.Header>
      <Card.Description>Bill attends a web development bootcamp and owns a suit. Be like Bill.</Card.Description>
    </Card.Content>
  </Card>
      
  <Card>
    <Image src={require("../images/rahim.jpg")} />
    <Card.Content>
      <Card.Header>Rahim Pradhan</Card.Header>
      <Card.Description>Interests include coding and long walks on the beach.</Card.Description>
    </Card.Content>
  </Card>
      
  <Container text className='order ordercontainer'>
    <p><h2>About Us</h2>

        <ul>
          <li>What is Thinking Of You?</li>
          <p>We are changing the way you think about a loved one.</p>
          <li>What makes you so special?</li>
          <p>Using a 3D printer, a Raspberry Pi and other items, we have come up with a creative way to think about your loved ones.</p>  
          
        </ul>  
        </p>
            </Container>
            </Card.Group>
 
)

export default CardExampleCardProps;
    
    
      
    
  