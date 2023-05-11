import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';
//function para agragar datos a la API
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Optimus Prime",
    "price": 300,
    "description": "Autobot Prime",
    "categoryId": 1,
    "images": ["https://static.wikia.nocookie.net/transformers/images/5/57/Optimus_Prime.jpg/revision/latest?cb=20161022202620&path-prefix=es"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));