/**
 * @description This class handles our GET requests for our GET routes. It will return data and a message (JSON)
 */
const Routes = require('./Routes');

class GetRoutes extends Routes {

    constructor() {
        super(); // Super is used to access properties and methods from the parent object (class)
    }

    /**
     * @description GET route for `/api/posts/`. This will GET data from our MongoDB database.
     */
    getBlogPosts() {
        this.router.get('/posts', async (req, res) => {
            try {
                const connection = this.connection;
                const col = connection.db().collection('posts');
                // Get all data from our collection and return an array that contains all the documents.
                const posts = await col.find().toArray();
                // Return JSON with a success, message and some data.                
                res.json({
                    success: true,
                    message: 'Got blog posts',
                    responseData: posts
                });
            } catch (err) {
                // Return JSON with a success of false, message and some data or the error.
                res.json({
                    success: false,
                    message: 'Could not get blog posts',
                    responseData: err
                });
                console.error(err);
            }
        });
        return this.router;
    }

    /**
     * @description GET route for `/api/post/:id`. This will GET data from our MongoDB database based on the ID passed as a param.
     */
    getBlogPostByID() {
        this.router.get('/post/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const connection = this.connection;
                const col = connection.db().collection('posts');
                // Get data based on passed ID.
                const post = await col.findOne({ '_id' : new this.ObjectID(id) });
                // Return JSON with a success, message and some data.                
                res.json({
                    success: true,
                    message: 'Got blog post',
                    responseData: post
                });
            } catch (err) {
                // Return JSON with a success of false, message and some data or the error.
                res.json({
                    success: false,
                    message: 'Could not get blog post',
                    responseData: err
                });
                console.error(err);
            }
        });
        return this.router;
    }

}
module.exports = GetRoutes;
