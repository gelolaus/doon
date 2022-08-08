window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('whereFrom');
    const surname = params.get('whereTo'); */

    // Via local Storage
    /* const name = localStorage.getItem('WHEREFROM');
    const surname = localStorage.getItem('WHERETO'); */
    
    const plateNumber = sessionStorage.getItem('PLATENUMBER');
    const driverName = sessionStorage.getItem('DRIVERNAME');
    const serviceProvider = sessionStorage.getItem('SERVICEPROVIDER');
    
    document.getElementById('result-plateNumber').innerHTML = plateNumber;
    document.getElementById('result-driverName').innerHTML = driverName;
    document.getElementById('result-serviceProvider').innerHTML = serviceProvider;

})

