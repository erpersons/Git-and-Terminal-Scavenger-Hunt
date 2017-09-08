$(document).ready(onReady);

function onReady(){
    $('#startButton').on('click', getRandomNumb);
}

function getRandomNumb() {
    var levelVal = $('#difficultySetting input[name=level]:checked').val();
    
    $.ajax({
        type: 'GET',
        url: '/game',
        success: function (res) {
            console.log(res);
            console.log('checked: ', levelVal);
        }
    });
}
