window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('whereFrom');
    const surname = params.get('whereTo'); */

    // Via local Storage
    /* const name = localStorage.getItem('WHEREFROM');
    const surname = localStorage.getItem('WHERETO'); */
    
    const serviceProvider = sessionStorage.getItem('SERVICEPROVIDER');
    
    document.getElementById('result-serviceProvider').innerHTML = serviceProvider;

})

function handleSubmit () {
    const plateNumber = document.getElementById('plateNumber').value;
    const driverName = document.getElementById('driverName').value;
    const serviceProvider = document.getElementById('serviceProvider').value;
    
    // sessionStorage.setItem("PLATENUMBER", plateNumber);
    // sessionStorage.setItem("DRIVERNAME", driverName);
    // sessionStorage.setItem("SERVICEPROVIDER", serviceProvider);


    return;
}