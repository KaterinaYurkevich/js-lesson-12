// 1)

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson('no-such-user.json')
    .catch(alert);


//2)

async function getData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

getData("https://jsonplaceholder.typicode.com/todos/1");

//2 var

function getDataNew(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(alert);
}

getDataNew("https://jsonplaceholder.typicode.com/todos/1");