const fullName = document.getElementById("fullname");
const alamat = document.getElementById("alamat");

console.log(fullName)
console.log(alamat)


const Base_URL = "https://jsonplaceholder.typicode.com/users/3";

async function getDataUser() {
    try {
        const response = await fetch(Base_URL)
        const data = await response.json()

        fullName.innerText = data.name;
        alamat.innerText = data.address.street;

        console.log("ini data nya bro: ", {data})
    } catch(error) {
        console.log("ini error: ", {error})
    };
};

getDataUser()
console.log(Base_URL, ": ini link api nya");