// The URL of the API we're working with
// I'll share this URL at the session.
const url = '';

/**
 * @name iterateResponseAndPrintToBody - Oh boy what a name.
 * @description This a helper function to display API response to our website. It would take too long to type this out during the session.
 * @param {Object[]} apiResponse - The response from the API.
 */
function iterateResponseAndPrintToBody(apiResponse) {
    const blogPost = document.getElementById('blog-posts'); //  <div id="blog-posts"></div> 
    blogPost.innerHTML = ''; // Make sure it's emppty.

    // Since our response from the API is an array of obecjts, we can just iterate through them!
    apiResponse.responseData.forEach((blog) => {
    
        // First, let's create a title with a link for each blog post.
        const h3 = document.createElement('H3');
        let link = document.createElement('A');
        link.text = blog.title;
        link.href = url + '/api/post/' + blog._id;
        h3.appendChild(link);

        // Next, we will create our body content of the blog post within a paragraph.
        const paragraph = document.createElement('P');
        const paragraphContent = document.createTextNode(blog.content);
        paragraph.appendChild(paragraphContent);

        // We then create a delete button, which will call the method `deletePost()`
        let deleteButton = document.createElement('BUTTON');
        const deleteButtonContent = document.createTextNode('Delete This Post');
        deleteButton.setAttribute('onclick', `deletePost('${blog._id}')`);
        deleteButton.appendChild(deleteButtonContent);

        // Finally we append all of this to our blog post section.
        blogPost.append(h3, paragraph, deleteButton);

    });
}

/**
 * @name getPosts
 * @description Get the posts from our API
 */
function getPosts() {

}

/**
 * @name createPost
 * @description Use our API to create a post
 */
function createPost() {

}

/**
 * @name deletePost
 * @description Use our API to delete a post
 */
function deletePost(id) {

}