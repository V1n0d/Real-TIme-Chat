Real-TIme-Chat
==============

1)GO to The Root Directory and Run the command 

npm install

it will install following npm packages like express, mongoose, jade.


After installing the packages run the index.js file using the command
nodejs index.js

The port is set to 3100. You can view the app in 127.0.0.1:3100

MongoDB is set to run in default port. If it throws any error connecting to particular port try changing it.

index.js file contains the server side socket code.
chat.js file in public/js/chat.js has the client side code for socket.io and other events.
