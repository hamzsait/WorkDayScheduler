$('#currentDay').text(moment().format("LL"))
$('#currentDay').css("font-size", "25px")

var table = $('#table')
var time = 9
currentFound = false
for (x = 0; x < 8; x++){

    
    var row = $('<tr>').css("height","60px")
    
    col1 = $('<td>').text(time + ":00")
    col2 = $('<td>')
    col3 = $('<td>')

    col2.append($('<input>').text("lol no way"))
    col3.append($('<button>').text("LOCK"))

    col1.attr("id","col1")
    col2.attr("id","col2")
    col3.attr("id","col3")

    row.append(col1)
    row.append(col2)
    row.append(col3)

    table.append(row)

    if (time >= 12){
        time = 1
    }

    if (moment().format('h') == time){
        col2.children().css("background-color","red")
        col2.css("background-color","red")
        currentFound = true
    }
    else if (currentFound){
        col2.children().css("background-color","green")
        col2.css("background-color","green")
    }
    else{
        col2.children().css("background-color","gray")
        col2.css("background-color","gray")
    }

    console.log(moment().format('h'))

    time++

    
    
}



