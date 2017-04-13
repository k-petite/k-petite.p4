function myFunction() {
    // Declare variables
  console.log('1');
    var input, filter, searchFrom, searchArea, i;
    var searchFrom = document.getElementsByTagName('a');

    input = document.getElementById('search');
    filter = input.value.toUpperCase();
  console.log('2');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < 12; i++) {
        searchArea = searchFrom[i].getAttribute("data-sub-html");
      
        searchArea.toUpperCase().indexOf(filter);
     console.log('3');  
        if (searchArea.toUpperCase().indexOf(filter) > -1) {
            searchFrom[i].style.display = "";
            
        } else {
            searchFrom[i].style.display = "none";
        }
    }
   console.log('4');
}

