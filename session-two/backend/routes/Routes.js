/**
 * @description This class creates a new Router for express and allows extending class to use.
 * We also create a new database instance.
 */
const router = require('express').Router();

const { Database, ObjectID } = require('../Database');
const { mongo_url } = require('../config/env');

class Routes {
    constructor() {
        this.connection = null; // Connection null by default.
        this.getConnection(); // Attempt to get a connection.
        this.router = router; // Create a property of the router instance we're using from Express.
        this.ObjectID = ObjectID; // Assign MongoDBs `ObjectID` to this property. 
    }

    /**
     * @description Create a connection and assign to connection property.
     */
    async createConnection() {
        try {
            const database = new Database(); // Get a new instance of our database.
            this.connection = await database.connect(mongo_url); // Create a connection with your specified MongoDB URL.
            return this.connection;
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * @description Check if there's a connection. If not, create one.
     */
    async getConnection() {
        try {
            this.connection = this.connection === null
                ? this.connection = this.createConnection()
                : this.connection;
            return this.connection;
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports = Routes;
