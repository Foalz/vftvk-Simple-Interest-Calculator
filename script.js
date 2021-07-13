function compute() //This function validates every data that was input by user.
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; //Gets all the values from html (Amount, rate and number of years).

    if (principal<=0){ //Returns an error message if amount is less or equal than zero.
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }

    else{ //If amount has a correct input, then the program can compute and show the data correctly.
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML = "If you deposit: <a style='background-color:yellow'>" + principal + "</a><br>" + `
        at an interest rate of: <a style='background-color:yellow'>` + rate + "</a><br>" + `You will receive an amount of: 
        <a style='background-color:yellow'>` + interest + "</a><br>" + "In the year: <a style='background-color:yellow'>" + year + "</a><br>";

        //The last variable on this condition, writes in the html document the results with a yellow highlight.

       

    }

    
    
}

function updateRate() //This function updates dinamically the rate amount indicator.
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        

