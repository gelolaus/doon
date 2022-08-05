function handleSubmit () {
    const whereFrom = document.getElementById('whereFrom').value;
    const whereTo = document.getElementById('whereTo').value;

    // to set into local storage
    /* localStorage.setItem("WHEREFROM", name);
    localStorage.setItem("WHERETO", surname); */
    
    sessionStorage.setItem("WHEREFROM", whereFrom);
    sessionStorage.setItem("WHERETO", whereTo);

    return;
}