$(document).ready(function() {
    $("table").append("<tr><th>Broccoli</th><td>Bulgaria</td><td>12</td><td>70</td><td>Veg</td></tr>");
    $("table").append("<tr><th>Orange</th><td>Morrocco</td><td>15</td><td>50</td><td>Fruit</td></tr>");
    $("table").append("<tr><th>Tangerine</th><td>Cyprus</td><td>12</td><td>25</td><td>Fruit</td></tr>");
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");


    // When a table header is clicked, the corresponding row should highlight. 
    $("th").click(function() {
   $("tr").children().removeClass("highlight_row")
    $(this).siblings().addClass("highlight_row")
    })
//      $("th").click(function(){
//      	$("tr").children().removeClass("selection")
//     	$(this).siblings().addClass("selection");

//   })
});
