let data = [
    {firstname: "Hans", lastname: "Peter", points:30},
    {firstname: "Marcello", lastname: "Marcel", points:45},
    {firstname: "Hans-Peter", lastname: "Doshko", points:62},
];





function loadPeople(){
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>";
    });
    document.getElementById("content").innerHTML = html;
    
}

loadPeople();
