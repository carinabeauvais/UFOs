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


 // now will add second function to filter the table. select function is common in D3 
 // and selects first element that matches our selector string #datetime
 // so we are telling it to look for the #datetime id in the html tags
 // by chaining .property('value') to d3.select we are saying look where date values are stored on the page
 // but grab the information and hold it in the date variable
 // next we set default filter and save to new variable.
 // our default filter is the original table data so users can refine their searches
    function handleClick() {
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;
        if (date) {
            filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using filtered data
    //@NOTE: If no date was entered, then filteredData will be original tableData.
    buildTable(filteredData);
};
// link code to filter-btn; .on(click, handleclick) is telling D3 to execute the handleclick function when the button is clicked
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// call original function so readers see original table to know how to filter
//Build table when page loads
buildTable(tableData);