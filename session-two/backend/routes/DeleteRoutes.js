/**
 * @description This class handles our DELETE requests for our DELETE routes. It will return a message.
 */
const Routes = require('./Routes');

class CreateRoutes extends Routes {

    constructor() {
        super(); // Super is used to access properties and methods from the parent object (class)
    }

    /**
     * @description DELETE route for `/api/delete/post/:id`. This will delete data from our MongoDB database based on the passed ID.
     */
    deleteBlogPost() {
        this.router.delete('/post/:id', async (req, res) => {
            // Get the ID passed as a parameter
            const { id } = req.params;
            try {
                const connection = this.connection;
                const col = connection.db().collection('posts');
                const post = await col.deleteOne({ '_id' : new this.ObjectID(id) });
                // Return JSON with a success, message and some data.
                res.json({
                    success: true,
                    message: `Post with id ${id} has been deleted.`,
                    responseData: post
                });
                return post;
            } catch (err) {
                // Return JSON with a success of false, message and some data or the error.                
                res.json({
                    success: false,
                    message: 'Could not delete blog post',
                    responseData: err
                });
                console.error(err);
            }
        });
        return this.router;
    }

}
module.exports = CreateRoutes;