document.getElementById("btn").addEventListener("click", function () {

});

const load = () => {
    fetch("https://67b848f6699a8a7baef36c05.mockapi.io/People")
        .then(response => response.json())
        .then((data => { console.log(data) }));

}