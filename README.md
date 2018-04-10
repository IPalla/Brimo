# Welcome to Brimo!

  

  

## What is Brimo?

  

Brimo is an open source project to create a domotic home system. Brimo will help you to organize your sensors and communicate with them.

  

  

## Why Brimo?

  

  

- Its open source

  

- You can create your own sensors

  

- Easy to run: it's designed to be runned on a raspberry, but of course you can install it on your computer.

  

- You are free to modify, delete or add new features depending on your needs.

  

- Fast and simple.

  

  

## Installation

  

  

- Download or clone the repository.

  

- Configure Brimo (see 'Configure it')*

  

- Access to brimoServer/ folder.

  

- Run "$python server.py"

  

- That's all!

  

> *: This step is not necessary.

  

>  **Note:** You will need to install cherrypy, sqlite3 and json modules. "pip install ..." on Linux.

  

>  **Note 2:** Brimo is designed to run on Linux systems, but of course youre able to configure it for Windows.

  

  

## Configure it

  

  

Brimo is ready to run, but there are few configurations you can do after running it.

  

To configure edit brimoServer/server.py:

  

  

- "SSL = False" : Brimo is ready to run under SSL. You just have to change this line to "SSL = True" and indicate your ssl private key and certificate on ssl_config variable.

  

  

- "DEBUG_LEVEL = levels.DEBUG" : I have implemented a debug python module. You can change the debug level to: DEBUG, INFO, WARNING, ERROR or CRITICAL depending on your debug preferences. There are two log files: logs/cherr.logs and logs/logs.txt (one for server accesses and full logs and other for info, debug and errors). Youre also able to change them or even disable debugging.

  

  

To add/remove or change users you can access to brimoServer/model.py and change/add code in line 100. By default:

  

  

r = c.execute('INSERT INTO users (user, pass) VALUES ("root", "root")')

  

  

Youre able to change this values or add new ones.

  

  

## Technologies

  

  

Brimo has been implemented using:

  

-  **Angular5**: Front-End Development (view)

  

-  **Python**: Back-End and Controller (cherrypy, model, err and cache modules)

  

-  **SQLITE3**: Brimo stores a few information on SQL databases.

  

  

## Architecture

  

  

Brimo is a Rest-ful application which follows an Model-View-Controller architecture. As it has been developed to run on lightweight systems (Rpi) model and controller are lighter than usual, thus view has a little more workload.

  

  

### VIEW

  

  

Brimo interface has been developed using Angular5. You can change the whole interface in brimoAngular folder. Of course, you need to add it to the server, you can use auto-gen.sh script to auto-add it or just make it by your own.

  

  

### MODEL

  

  

-Model.py: it controls users and devices models.

  

  

### CONTROLLER AND OTHERS

  

  

- Cache.py: online information is necessary to control our devices and know their information, that's why user makes a lot of requests to the server (each 5 seconds). Most of times database hasn't changed so it's not necessary to access it. Cache.py is an easy to understund module implemented by myself.

  

- Err.py: debug is a very important aspect while developing software, and cherrypy default logs may be stressful sometimes. That's why I've develop my own debug module. It's easy to understund and really useful.

  

- server.py: Brimo's main module. It uses cherrypy to implement a light http server.

  

  

## COMMUNICATION

  

  

Brimo is based on HTTP and all communication is carried by HTTP requests.

  

  

URIS:

  

  

/login

  

/devices accepting GET and POST

  

/device/{device_id} accepting GET, PUT and DELETE

  

  

#### Registering a sensor

  

When a sensor wants to register in Brimo it has to make a **POST /devices ** request with some parameters on the request body as JSON:

	{
	"commands" : "NNY",
	"name" : "device",
	"info" : "inf",
	"freq" : "5000",
	"IP": "192.168.1.42"
	}

  

If everything is OK server will send a response with and id on its body and a 201 status code and an id on its body:

  
	
	{
	"id": 1
	}

  

  

#### Editing/updating or deleting a sensor

  

After register, device must update its information by using **PUT /device/{device_id} ** with the information on its body:

  
	
	{
	"info" : "new_information"
	}

  

This URI also accepts DELETE and PUT to delete/update other information:

  

	{

	"new_location" : "kitchen",
	"new_name" : "coffee"
	}

  
## VERSION

**0.0.1**  
Brimo is already on production phase.

## AUTHOR

  

Brimo has been developed by Ignacio Pallarés Jiménez as part of a Software Engineering's End of Degree Projectc carried out at Escuela Politécnica Superior, Universidad Autónoma de Madrid.

Supervised and reviewed by Oscar Delgado (oscar.delgado@uam.es) and Eloy Anguiano (eloy.anguiano@uam.es).

Feel free to contact me if you want to collaborate adding/editing resources.

	contact: nachopallaj@gmail.com
