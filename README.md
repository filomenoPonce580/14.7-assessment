# 14.7-assessment

Making requests: Assessment
Instructions
To complete this practice problem, you will be building a number of functions that make external requests using the axios library. In each function, you will be asked to make a request and then log out a specific response.

See below for more information on the project setup as well as the requirements for each function.

Starter code
To start, make sure you've forked and cloned the constellations server, linked below. Follow the instructions in that repository to get the project up and running.

GitHub: Constellations server
Project setup
The src/main.js file includes an axios variable and a BASE_URL variable which points to the correct URL for the constellations server. Please do not change either of these lines.

All of the functions you will need to fill in are included in this file.

Functions
For each of the following functions, you will need to make a request using the BASE_URL. For each function, you should make a request using the BASE_URL and the provided path. Replace :id in any path with the appropriate parameter.

For example, your URL might look like the following:

const url = `${BASE_URL}/constellations/${id}`;
Remember that the response from axios will include a data key that will contain the response.

Once the request has been made, log out the data key as instructed below.

index()
Method	Path
GET	/constellations
The index() function should return all of the constellation resources.

create()
Method	Path
POST	/constellations
The create() function should take an object, body, and create a new constellation.

show()
Method	Path
GET	/constellations/:id
The show() function should take an id and return a constellation for the given constellation.

update()
Method	Path
PUT	/constellations/:id
The update() function should take an id and an object, body, and update the given constellation.

destroy()
Method	Path
DELETE	/constellations/:id
The destroy() function should take an id destroy the given constellation.

Tips
You may complete this challenge on your own machine before uploading it to Qualified.
Reference the related lesson for help on completing this practice problem.
