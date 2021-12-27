// Add your code here
// const name = "Andjela";
// const email = "andjela@gmail.com";
const body = document.getElementsByTagName("body")[0];
let message = 'Unauthorized Access' 

function submitData(name, email) {
    const confgObj = {
        method: "POST",
        headers: {
           "Content-type": "application/json",
           "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", confgObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))

    .catch(response => 'Unauthorized Access')
}
    function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append(message)
    }

