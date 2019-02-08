/**
 * @description This class handles our DELETE requests for our DELETE routes. It will return a message.
 */
const Routes = require('./Routes');

class CreateRoutes extends Routes {

    constructor() {
        super(); // Super is used to access properties and methods from the parent object (class)
    }

    deleteBlogPost() {
        this.router.delete('/post/:id', async (req, res) => {
            const { id } = req.params;
            console.log(id);
            try {
                const connection = this.connection;
                const col = connection.db().collection('posts');
                const post = await col.deleteOne({ '_id' : new this.ObjectID(id) });
                res.json({
                    success: true,
                    message: `Post with id ${id} has been deleted.`,
                    responseData: post
                });
                return post;
            } catch (err) {
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