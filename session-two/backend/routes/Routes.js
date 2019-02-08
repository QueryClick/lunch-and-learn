/**
 * @description This class creates a new Router for express and allows extending class to use.
 * We also create a new database instance.
 */
const router = require('express').Router();

const { Database, ObjectID } = require('../Database');
const { mongo_url } = require('../config/env');

class Routes {
    constructor() {
        this.connection = null;
        this.getConnection();
        this.router = router;
        this.ObjectID = ObjectID;
    }

    /**
     * @description Create a connection and assign to connection property.
     */
    async createConnection() {
        try {
            const database = new Database();
            this.connection = await database.connect(mongo_url);
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
