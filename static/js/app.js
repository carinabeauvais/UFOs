// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
// We declare the variable and use d3.select to tell JS to look for the tbody tags in the HTML
var tbody = d3.select("tbody");

// Start a new function, Stage 1
//function buildTable(data) {

//}
//Add function to clear existing filters
function buildTable(data) {
    tbody.html("");
  }
// Add forEach function
  data.forEach((dataRow) => {
    // create variable to append a row to the table body; find tbody tag and add a table row 'tr'.
    // each sighting is wrapped in a <tr> tag.
    let row = tbody.append("tr");
    // add loop through dataRow argument, will become table data wrapped in <td>tags when appended to HTML
    // basically setting another function for the forEach loop; reference one object from the array 
    // and put values in dataRow. the forEach((val) specifies we want one object per row
    // we are telling code to put each sighting into its own row. val argument represents each item in the object
    Object.values(dataRow).forEach((val) => {
        // append each value of the object to a cell in the table. this goes inside the function
        // first create variable to append data to table using data tag <td>
        // then add values; when chain .text(value) to variable we extract only text of the value
        let cell = row.append("td");
        cell.text(val);
        }
    );
});

//full function without hints
//data.forEach((dataRow) => {
    //let row = tbody.append("tr");
    //Object.values(dataRow).forEach((val) => {
      //let cell = row.append("td");
      //cell.text(val);
      //}
    //);
  //});

  //with the above function we loop through each object in the array, append a row to HTML table, add each value from the object into a cell