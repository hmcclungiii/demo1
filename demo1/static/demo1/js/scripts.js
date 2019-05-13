// search button tricks
// doesn't work
$("#searchButton").click(function(){
    $("input").each(function(){
        if($(this).val() == '') {
            $(this).remove();
        }
    });
    $("#searchForm").submit();
});

// search form action for front page
// forwards to user to the search page with GET parameter
function do_search(form) {
    window.location.href = "/search";
}
