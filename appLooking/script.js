window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('whereFrom');
    const surname = params.get('whereTo'); */

    // Via local Storage
    /* const name = localStorage.getItem('WHEREFROM');
    const surname = localStorage.getItem('WHERETO'); */
    
    const whereFrom = sessionStorage.getItem('SERVICEPROVIDER');
    
    document.getElementById('result-serviceProvider').innerHTML = whereFrom;

})

