$('#currentDay').text(moment().format("LL"))
$('#currentDay').css("font-size", "25px")

for (x = 0; x < 10; x++){

    var time = 9

    var table = $('#table')

    var row = $('<tr>')
    
    col1 = $('<td>').text("Hello")
    col2 = $('<td>').text("Hello")
    col3 = $('<td>').text("Hello")

    col1.attr("id","col1")
    col2.attr("id","col2")
    col3.attr("id","col3")

    row.append(col1)
    row.append(col2)
    row.append(col3)

    table.append(row)
}


