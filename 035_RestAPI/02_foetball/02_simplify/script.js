document.getElementById("table").addEventListener("click", function() {
    let selectedTeamId = event.target.getAttribute("data-teamId");
    console.log("Auswahl: " + selectedTeamId);
    
});

const loadDataFromAPI = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023")
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            let html = "<div id='content'>";
            for (let i = 0; i < json.length; i++) {
                html += `<div data-teamId="${json[i].teamInfoId}" >${json[i].teamName}</div>`;
                html += `<div>${json[i].points}</div>`;
                html += `<div><img src="${json[i].teamIconUrl}" width="100px"></div>`;
            }
            html += "</div>";
            document.getElementById("content").innerHTML = html;
        });
}
document.getElementById("table").addEventListener("click", (event) => {
    alert("isndie");
});
loadDataFromAPI();