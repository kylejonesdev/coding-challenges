let modalBox = document.getElementById("modal1");
let modalButton = document.getElementById("button1");
let dataDump = document.getElementById("dataDump");

modalButton.addEventListener("click", showModal);
window.addEventListener("click", (e) => closeModal(e.target));

console.log("hello")

const getData = (async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    return data;
})

const showData = (async () => {
    let d = await getData();
    console.log(d);
    dataDump.innerText = d.results[0].email;
})

showData();


function showModal() {
    console.log("click");
    modalBox.style.display = "block";
}

function closeModal(target) {
    if (target == modalBox) {
        console.log("close");
        modalBox.style.display = "none";
    }
}