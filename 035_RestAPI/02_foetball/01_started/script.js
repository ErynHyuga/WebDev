document.getElementById("btn").addEventListener("click", function () {
    loadDataFromAPI();
});

const loadDataFromAPI = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023")
        .then(response => response.json())
        .then((json) => {
            let html = [];

            json.forEach((footB) => {
                console.log(footB);
                
                html.push(
                    "<div><div><div>" + 
                    footB.teamName + 
                    "</div>xx" + 
                    footB.points + 
                    " <div>Points</div> </div> " +
                    "<br><img width='100px' src ='" + 
                    footB.teamIconUrl + 
                    "?id=" + 
                    Math.random() + 
                    "'/></div>");
            });
            document.getElementById("content").innerHTML = html.join("");
            console.log(html)
        });

}
loadDataFromAPI();