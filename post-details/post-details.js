
let urlSearchParams = new URLSearchParams(window.location.search);
let postID = urlSearchParams.get('postID');
let postString = urlSearchParams.get('post');
let post = JSON.parse(postString);

let postInfoDiv = document.createElement('div');
postInfoDiv.classList.add('postInfoDiv')

for (const postKey in post) {
    let postDetails = document.createElement('div');
    postDetails.innerText = `${postKey}: ${post[postKey]}`
    postDetails.classList.add('postDetails')
    postInfoDiv.appendChild(postDetails)
}
document.body.appendChild(postInfoDiv)

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .then((response) => response.json())
    .then(comments => {

        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('commentsDiv')
            let h6 = document.createElement('h6');
            h6.innerText = 'Comments'
            commentsDiv.appendChild(h6)

        for (const comment of comments) {

            let commentsText = document.createElement('div');
            commentsText.classList.add('commentsText')

            for (const commentKey in comment) {

                commentsText.innerText = `${commentKey}: ${comment[commentKey]}`
                commentsDiv.appendChild(commentsText)

            }
            document.body.appendChild(commentsDiv)
        }

    })