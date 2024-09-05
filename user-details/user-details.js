const urlSearchParams = new URLSearchParams(window.location.search);
const userID = urlSearchParams.get('userID');
let userJson = urlSearchParams.get('user');
let user = JSON.parse(userJson);

let container = document.getElementsByClassName('container')[0];

function userRecursion(user) {
    for (const key in user) {
        if (typeof user[key] === 'object' && user[key] !== null) {
            userRecursion(user[key])
        } else {
            let userInfoDiv = document.createElement('div');
            userInfoDiv.classList.add('userInfoDiv')
            userInfoDiv.innerText = `${key}: ${user[key]}`
            container.appendChild(userInfoDiv)
        }
    }
}

userRecursion(user)

let buttonGetPosts = document.createElement('button');
buttonGetPosts.innerText = 'Post of current user'
container.appendChild(buttonGetPosts)

buttonGetPosts.onclick = function () {
    buttonGetPosts.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
        .then((response) => response.json())
        .then((posts) => {

            posts.map((post) => {
                let postDiv = document.createElement('div');
                postDiv.classList.add('postDiv')

                let postID = post.id
                let postJson = JSON.stringify(post)
                let button = document.createElement('button');
                button.classList.add('button')
                button.innerText = 'Get posts'
                button.onclick = function () {
                    window.location.href = `../post-details/post-details.html?postID=${postID}&post=${postJson}`
                }
                for (const postKey in post) {
                    if (postKey === 'title') {

                        let info = document.createElement('p');
                        info.classList.add('info')
                        info.innerText = ` ${post[postKey]}`

                        postDiv.append(info, button)
                        document.body.appendChild(container)
                    }

                }
                container.append(postDiv)
            })
        })
}
