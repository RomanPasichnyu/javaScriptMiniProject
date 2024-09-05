fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let container = document.getElementsByClassName('container')[0];

        users.map(user => {

            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv', 'show');
            userDiv.innerText = `ID:${user.id} | Name:${user.name}`;

            let button = document.createElement('button');
            button.classList.add('button')
            button.innerText = 'User details';

            let userString = JSON.stringify(user);
            button.onclick = function () {
                window.location.href = `../user-details/user-details.html?userID=${user.id}&user=${userString}`
            }

            container.append(userDiv);
            userDiv.appendChild(button);
        });
    });