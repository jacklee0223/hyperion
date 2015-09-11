# Hyperion

##About
Hyperion allows users to control drones from the browser and add information on list of drones.

##Technologies Used
Stack: MongoDB, Express, Angular, Node.js

CSS: Materialize, Sass

Dependencies:     
	"angular": "^1.4.5",
    <br>"body-parser": "^1.13.3",
    <br>"bower": "^1.5.2",
    <br>"cookie-parser": "~1.3.5",
    <br>"cors": "^2.7.1",
    <br>"cylon": "^1.1.0",
    <br>"cylon-firmata": "^0.22.0",
    <br>"cylon-gpio": "^0.26.0",
    <br>"cylon-i2c": "^0.22.0",
    <br>"debug": "~2.2.0",
    <br>"dotenv": "^1.2.0",
    <br>"ejs": "^2.3.3",
    <br>"express": "^4.13.3",
    <br>"favicon": "0.0.2",
    <br>"jade": "~1.11.0",
    <br>"johnny-five": "^0.8.91",
    <br>"method-override": "^2.3.5",
    <br>"mongoose": "^4.1.3",
    <br>"morgan": "~1.6.1",
    <br>"passport": "^0.3.0",
    <br>"serialport": "^1.7.4",
    <br>"socket.io": "^1.3.6"

Drone: Arduino Uno, Parallax Shield, 2 Servos, 1 Led, JY MCU Bluetooth Module, sonar & swivel mount

##Installation Instruction

Web Link: <br>
https://young-crag-5724.herokuapp.com/

Github Repo: <br>
https://github.com/jacklee0223/hyperion/blob/master/README.md

```
git clone git@github.com:jacklee0223/hyperion.git
```

```
cd hyperion
```

```
npm install
```

```
bower install
```

Click on dropdown menu at the far right side of the nav-bar
<img src="https://i.imgur.com/od8W2i3.png">

Control drone by clicking on the buttons
<img src="https://i.imgur.com/FGomeX4.png">

##User Stories-MVP
As a user, I would like to be able to be able to add/edit/delete drone data

As a user, I would like to be able to connect to the drone via usb

As a user, I would like to be able to connect to the drone via bluetooth

As a user, I would like to be able to control the drone on the browser

As a user, I would like to be able to log in/out and create account

##Ice Box
Seamless remote (bluetooth/wifi) connection

Add auto-pilot function and add algorithm for artificial intelligence (e.g. detect and avoid obstacle)

Add aerial drone (AR Drone 2.0) controller

Add utility drone (e.g. mechanical arm) controller

Add camera on the ground drone and stream footage real time

Add VoIP (Voice Over IP) function for users to be able to communicate with each other

Add social board and chat room for users

##Issues
Control via bluetooth not functioning, most likely due to socket.io errors (cannot load resource, err_connection_refused)

Major roadblock: deployed app on heroku cannot find connection module to the drone, because the client communicates to the drone via server

missing client routes for angular