/**
 * @description Class to create a database connection with MongoDB based on your set URL of Mongo.
 */
const { MongoClient, ObjectID } = require('mongodb');

class Database {

    constructor() {
        this.db = null;
    }

    async connect(databaseURL) {
        try {
            const connection = await MongoClient.connect(databaseURL, { useNewUrlParser: true });
            this.db = connection;
            return this.db;
        } catch (err) {
            return err;
        }
    }

    dbObj() {
        return this.db;
    }

}
module.exports = {
    Database,
    ObjectID
};
