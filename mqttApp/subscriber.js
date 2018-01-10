//The device which receives messages by subscribing to a particular topic.

//NOTE: The Pi AND App deployed to Heroku will act as subscribers. 
//The pi will listen for new messages. The app will listen for message acknowledgements from the pi.


//BEGINNING STEPS:
//Send a Connect packet to the broker with auth

// Wait for Connect acknowledgement packet from the broker

// and when Connect acknowledgement is received , send the subscribe packet with appropriate topic name

// Wait for the subscribe acknowledgement packet