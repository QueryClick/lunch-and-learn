/**
 * @description This class handles our POST requests for our POST routes. It will return a message.
 */
const Routes = require('./Routes');

class CreateRoutes extends Routes {

    constructor() {
        super(); // Super is used to access properties and methods from the parent object (class)
    }

    /**
     * @description POST route for `/api/create/post/`. This will post data to our MongoDB database.
     */
    createBlogPost() {
        this.router.post('/post', async (req, res) => {
            try {
                const connection = this.connection;
                // Save to the database collection 'posts'
                const col = await connection.db().collection('posts');
                // Grab the title and content passed within the body of the POST request.
                const { title, content } = req.body;
                const data = {
                    title,
                    content
                };
                // Insert the data.
                const insert = await col.insertOne(data);
                // Return JSON with a success, message and some data.
                res.json({
                    success: true,
                    message: 'Blog post created',
                    responseData: insert
                });
                return insert;
            } catch (err) {
                // Return JSON with a success of false, message and some data or the error.
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
