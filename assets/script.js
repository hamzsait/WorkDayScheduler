$('#currentDay').text(moment().format("LL"))
$('#currentDay').css("font-size", "25px")

var table = $('#table')
var time = 9
currentDay = false
for (x = 0; x < 8; x++){

    
    var row = $('<tr>').css("height","60px")
    
    col1 = $('<td>').text(time + ":00")
    col2 = $('<td>')
    col3 = $('<td>')

    textarea = $('<textarea rows = "4" >')
    col2.append(textarea)

    button = $('<button id = "button'+x+'" type="button" class="btn btn-info btn-block saveBtn">')
    icon = $('<i class="fa fa-lock">')
    button.append(icon)
    col3.append(button)

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
    else if (currentDay){
        col2.children().css("background-color","green")
        col2.css("background-color","green")
    }
    else{
        col2.children().css("background-color","gray")
        col2.css("background-color","gray")
    }

    time++
}


$(document).on('click','button',function(){
    console.log(this.id[this.id.length-1])

    rows = [
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
        {
            textContent: "hello",
            locked: false
        },
    ]

    localStorage.setItem("data", JSON.stringify(rows))

    console.log(JSON.parse(localStorage.getItem("data")))


})





