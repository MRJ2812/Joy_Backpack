// Normal fetching

fetch('')
    .then((response) => response.json())
    .then((data) => console.log(data));