NEOAIS analytics

A nodejs web application that serves data that has been processed and stored in a mongodb warehouse.
An Express.js app on the server serves the data in JSON structures to an Ember.js on the client. The client app
makes use of require.js and D3 charts to visualise the data in an extensible and easily maintained MVC framework.

Technology Stack

D3.js charts -------- User interaction layer
Ember.js
\/
RESTFul API
\/
Express.js
Node.js ---------- Web Service Layer
Mongoose.js
Mongodb ---------- Persistence Layer