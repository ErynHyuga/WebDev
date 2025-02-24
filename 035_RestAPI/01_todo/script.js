document.getElementById("btn").addEventListener("click", function () {
    loadDataFromAPI();
});

const loadDataFromAPI = () => {
    fetch("https://67b848f6699a8a7baef36c05.mockapi.io/People")
        .then(response => response.json())
        .then((json) => {
            let html = [];

            json.forEach((todo) => {
                html.push(
                    "<div><div><div>" + 
                    todo.title + 
                    "</div>" + 
                    todo.until + 
                    +"</div> " +
                    "<br><img width='100px' src ='" + 
                    todo.responsible + 
                    "?id=" + 
                    Math.random() + 
                    "'/></div>");
            });
            document.getElementById("content").innerHTML = html.join("");
            console.log(html)
        });

}

loadDataFromAPI();

