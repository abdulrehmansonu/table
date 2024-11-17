function generateTable() {
    // Get the table number from the input field
    let table = document.getElementById("tableNumber").value;
    table = parseInt(table);  // Convert the input to a number
    
    // Get the div where the table will be displayed
    let outputDiv = document.getElementById("tableOutput");

    // Clear any previous table if it exists
    

    // Generate and display the multiplication table
    if (!isNaN(table)) {
        for (let i = 1; i <= 3000; i++) {
            let result = `${table} x ${i} = ${table * i}`;
            outputDiv.innerHTML += `<p>${result}</p>`;
        }
    } else {
        outputDiv.innerHTML = "<p>Please enter a valid number.</p>";
    }
}
