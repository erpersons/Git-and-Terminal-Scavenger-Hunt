var winningNumb = 0;

$(document).ready(onReady);

function onReady(){
    $('#startButton').on('click', getRandomNumb);
}

function getRandomNumb() {
    var levelVal = $('#difficultySetting input[name=level]:checked').val();
    
    $.ajax({
        type: 'POST',
        url: '/maxNumber',
        data: {max: levelVal},
        success: function (res) {
            console.log(res);
            console.log('checked: ', levelVal);
            winningNumb = res.returnedNumb;
            console.log("winningNumb -->", winningNumb);
        }
    });
}
