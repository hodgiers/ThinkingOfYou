//The device which publishes messages on a particular topic.

//NOTE: The Pi AND App deployed to Heroku will act as subscribers. 
//The pi will notify App that message has been acknowledged. The app will subscribe to message acks.


//BEGINNING STEPS:
//Send a Connect packet to the broker (With Authentication if needed)

//Wait for Connect acknowledgement packet from the broker

//and when Connect acknowledgement is received , send the publish message packet with appropriate topic name