function printTable(num, max) {
    let tableHTML = "<table><tr><th>" + num + " Times Table</th></tr>";
    for (let i = 1; i <= max; i++) {
        tableHTML += "<tr><td>" + num + "</td> <td>* " + i + "<td>=</td><td>" + (num * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("table-container").innerHTML = tableHTML;
}
function generateTable() {
    const tableNumber = document.getElementById("tableNumber").valueAsNumber;
    const maxMultiplier = 10;

    printTable(tableNumber, maxMultiplier);
}
generateTable();