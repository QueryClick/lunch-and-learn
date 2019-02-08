const express = require('express'); // Bring in Express, our web application framework.
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers.

// Bring in our routes
const CreateRoutes = require('./routes/CreateRoutes');
const GetRoutes = require('./routes/GetRoutes');
const DeleteRoutes = require('./routes/DeleteRoutes');
const app = express(); // Create an Express application and assign it to variable app.
const port = 3000; // Port to run on. Change if you want.

// Create a new instance of our routes so that we can create endpoints for them.
const createRoutes = new CreateRoutes();
const getRoutes = new GetRoutes();
const deleteRoutes = new DeleteRoutes();

// Allow CORS (Cross-Origin Resource Sharing). 
// Read more here - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(require('cors')());

app.use(bodyParser.urlencoded({extended: true}));

// Our routes, and what we do when someone hits one.
app.use('/api', [getRoutes.getBlogPosts(), getRoutes.getBlogPostByID()]);
app.use('/api/create', createRoutes.createBlogPost());
app.use('/api/delete', deleteRoutes.deleteBlogPost());

app.listen(port, () => {
    console.log(`Backend service running on port ${port}`);
});