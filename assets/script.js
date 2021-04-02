$('#currentDay').text(moment().format("LL"))
$('#currentDay').css("font-size", "25px")

var table = $('#table')
var time = 9
currentDay = false
for (x = 0; x < 9; x++){

    
    var row = $('<tr>').css("height","60px")
    
    col1 = $('<td>').text(time + ":00")
    col2 = $('<td>')
    col3 = $('<td>')

    textarea = $('<textarea class = "remover" id = "textarea'+x+'" rows = "4" >')
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
        time = 0
    }

    if ((moment().format('h') == time) ){
        col2.children().css("background-color","red")
        col2.attr("background-color","red")
        currentDay = true
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

rows = []
if (localStorage.getItem("data") == null){
    for (i = 0; i < 9; i++){
        rows[i] = {textContent: "", locked: false}
    }
}
else{
    reload()
}

function reload(){
    data = JSON.parse(localStorage.getItem("data"))
    for (i = 0; i < 9; i++){
        rows[i] = {textContent: data[i].textContent, locked: data[i].locked}

        if (rows[i].locked){
            $("#button"+i).css("color","red")
            $("#textarea"+i).append(rows[i].textContent)
        }
    }
}


$(document).on('click','.btn',function(){
    index = this.id[this.id.length-1]
    console.log(index)

    rows[index].textContent = $("#textarea"+index).val()

    if(rows[index].locked){
        rows[index].locked = false
        $('#button'+index).css("color","white")
    }
    else{
        rows[index].locked = true
        $('#button'+index).css("color","red")
    }


    localStorage.setItem("data", JSON.stringify(rows))
})

$(document).on('keydown','.remover',function(){
    index = this.id[this.id.length-1]
    $("#button"+index).css("color", "white")
    rows[index].locked = false
    localStorage.setItem("data", JSON.stringify(rows))
})




