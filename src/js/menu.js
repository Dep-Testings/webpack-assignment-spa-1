$("#main-menu a").click(function(event){
    event.preventDefault;
    $("#main-menu a").removeClass("active");
    $(this).addClass("active");
    $(".content-wrapper").addClass("d-none");
    switch ($(this).text().trim()){
        case "Dashboard":
            $("#dashboard").removeClass("d-none");
            break;
        case "Manage Customers":
            $("#manage-customers").removeClass("d-none");
            break;
        case "Manage Items":
            $("#manage-items").removeClass("d-none");
            break;
        case "Place Orders":
            $("#place-orders").removeClass("d-none");
            break;
        case "Search Orders":
            $("#search-orders").removeClass("d-none");
            break;
        default:
            break;
    
    }
});
