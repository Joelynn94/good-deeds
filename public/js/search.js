
$(document).ready(function () {
    $("#search_products").click(function () {
        var category = $("#category option:selected").val();
        var searchTerm = $("#search").val();
        
        let newPath = "/?";
        if(category !== ""){
            newPath += "cat=" + category;
        }
        if(searchTerm !== ""){
            newPath += "&search=" + searchTerm;
        }
        window.location= newPath;
        

   });
});