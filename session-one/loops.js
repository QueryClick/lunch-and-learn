// Iterate through an array of strings 
var names = ['aaron', 'ross', 'steven'];

for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Iterate through an array of numbers and add them together 
var numbers = [10, 20, 50, 89];
var total = 0;
for(var i = 0; i < numbers.length; i++) {
    // On each iteration, add the number to the total variable.
    total += numbers[i];
}
console.log(total); // Log the total amount

// Create an array of objects.
var blogPosts = [
    {
        title: 'Blog post 1',
        content: 'hello there blog post 1'
    },
    {
        title: 'Blog post 2',
        content: 'hello there blog post 2'
    },
    {
        title: 'Blog post 3',
        content: 'hello there blog post 3'
    }
];

for(var i = 0; i < blogPosts.length; i++) {
    console.log(blogPosts[i].title); // Log each title
    console.log(blogPosts[i].content); // Log each content
}