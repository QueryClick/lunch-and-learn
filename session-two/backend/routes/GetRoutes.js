/**
 * @description This class handles our GET requests for our GET routes. It will return data and a message (JSON)
 */
const Routes = require('./Routes');

class GetRoutes extends Routes {

    constructor() {
        super(); // Super is used to access properties and methods from the parent object (class)
    }

    getBlogPosts() {
        this.router.get('/posts', async (req, res) => {
            try {
                const connection = this.connection;
                const col = connection.db().collection('posts');
                const posts = await col.find().toArray();
                res.json({
                    success: true,
                    message: 'Got blog posts',
                    responseData: posts
                });
            } catch (err) {
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

    getBlogPostByID() {
        this.router.get('/post/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const connection = this.connection;
                const col = connection.db().collection('posts');
                const post = await col.findOne({ '_id' : new this.ObjectID(id) });
                res.json({
                    success: true,
                    message: 'Got blog post',
                    responseData: post
                });
            } catch (err) {
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
