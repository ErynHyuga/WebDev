localStorage.setItem('name', 'Andromache');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name', 'Aeneas');
console.log(sessionStorage.getItem('name'));

sessionStorage.removeItem('name');

document.cookie = 'name=Hector; expires=' + new Date(2030, 0, 1).toUTCString();
document.cookie = 'fiend=Paris Alexander; moniker=Prince of the City; expires=' + new Date(2030, 0, 1).toUTCString();
console.log(document.cookie);
