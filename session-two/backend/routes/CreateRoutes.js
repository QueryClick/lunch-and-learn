/**
 * @description This class handles our POST requests for our POST routes. It will return a message.
 */
const Routes = require('./Routes');

class CreateRoutes extends Routes {

    constructor() {
        super(); // Super is used to access properties and methods from the parent object (class)
    }

    createBlogPost() {
        this.router.post('/post', async (req, res) => {
            try {
                const connection = this.connection;
                const col = await connection.db().collection('posts');
                const { title, content } = req.body;
                const data = {
                    title,
                    content
                };
                const insert = await col.insertOne(data);
                res.json({
                    success: true,
                    message: 'Blog post created',
                    responseData: insert
                });
                return insert;
            } catch (err) {
                res.json({
                    success: false,
                    message: 'Blog post could not be created',
                    responseData: err
                });
                console.error(err);
            }
        });
        return this.router;
    }

}
module.exports = CreateRoutes;