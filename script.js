console.log ('test 654')

$(document).ready(onReadySetGo);

function onReadySetGo (){
console.log('test 01234')
// Listener/Handler
$("#gButton").on('click', makeDivs);
$(".divBb").on('click', '#deleteButton', removeDivs);
$(".divBb").on('click', '#yButton', addYellow);


}
//function that add yellow background
function addYellow (){
    console.log('so many tests')
    $(this).parent().addClass('yellow')
}

// function that removes Divs
function removeDivs (){
    console.log('click boom 2')
$(this).parent().remove();
}
let count = 1;
// function that makes Divs
function makeDivs (){
    // console.log('click boom')
   
    // formats Divs & displays count
    $('.divBb').append(`
    <div>
    <p>${count}</p>
    <button id="yButton">Yellow</button>
    <button id="deleteButton">Delete</button>
    </div>
    `)

    count ++;
    $("#p").text(count)
}