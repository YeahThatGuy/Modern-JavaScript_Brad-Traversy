const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];

// Synchronous way; problem is that getPosts happens quicker than createPost, which results in new posts not being retrieved, since they have a longer Timeout
// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function () {
//         let output = "";
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({ title: "Post Three", body: "This is post three" });

// getPosts();


// Asynchronous way, pass getPosts as a callback function from within createPost, which will process prior to the Timeout
// Callback = function that can be passed as an argument to another function and then get called within that function
function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function () {
        let output = "";
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
