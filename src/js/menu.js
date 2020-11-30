$("#main-menu a").click(function(){
    $("#main-menu a").removeClass("active");
    $(this).addClass("active");
    $(".content-wrapper").addClass("d-none");

    // ----method 01
    // switch ($(this).text().trim()){
    //     case "Dashboard":
    //         $("#dashboard").removeClass("d-none");
    //         break;
    //     case "Manage Customers":
    //         $("#manage-customers").removeClass("d-none");
    //         break;
    //     case "Manage Items":
    //         $("#manage-items").removeClass("d-none");
    //         break;
    //     case "Place Orders":
    //         $("#place-orders").removeClass("d-none");
    //         break;
    //     case "Search Orders":
    //         $("#search-orders").removeClass("d-none");
    //         break;
    //     default:
    //         break;
    
    // }

    //----method 02 --> using data attributes
    switch ($(this).attr("data-menu")){
        case "DASHBOARD":
            $("#dashboard").removeClass("d-none");
            break;
        case "MANAGE_CUSTOMERS":
            $("#manage-customers").removeClass("d-none");
            break;
        case "MANAGE_ITEMS":
            $("#manage-items").removeClass("d-none");
            break;
        case "PLACE_ORDERS":
            $("#place-orders").removeClass("d-none");
            break;
        case "SEARCH_ORDERS":
            $("#search-orders").removeClass("d-none");
            break;
        default:
            break;
    
    }
});
