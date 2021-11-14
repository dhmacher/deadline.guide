window.onload = function startmeup() {

    // Every date input is set to max=today
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.max=(new Date).toISOString().substr(0, 10);
    });

    // Compute a random date in the future.
    document.querySelector('form input[type="button"]').onclick=function() {
    var days=Math.floor(100*Math.random());
    var hours=Math.floor(24*Math.random());
    var d=new Date(new Date().getTime()+((days*24+hours)*60*60*1000));
    
    document.querySelector('deadline span').innerText='Your deadline is on '+d.toDateString()+' at '+hours.toString()+':00.';
    document.querySelector('deadline').style.display='block';
    };

    // Close the dialog
    document.querySelector('deadline input[type="button"]').onclick=function() {
    document.querySelector('deadline').style.display='none';
    };

};
