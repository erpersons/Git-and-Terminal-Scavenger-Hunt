var winningNumb = 0;

$(document).ready(onReady);

function onReady() {
    $('#startButton').on('click', getRandomNumb);
    $('#playButton').on('click', compareGuess);
}

function getRandomNumb(event) {
    event.preventDefault();

    var levelVal = $('#difficultySetting input[name=level]:checked').val();

    $.ajax({
        type: 'POST',
        url: '/maxNumber',
        data: {
            max: levelVal
        },
        success: function (res) {
            console.log(res);
            console.log('checked: ', levelVal);
            winningNumb = res.returnedNumb;
            console.log("winningNumb -->", winningNumb);
        }
    });
}

function compareGuess(event) {
    event.preventDefault();
    var guessArray = $('#playerData input[name=guess]');
    console.log('player guesses: ', guessArray);
    for (var i = 0; i < guessArray.length; i++){
        var guess = parseInt($(guessArray[i]).val());
        console.log('guess ' + [i] + ': ' + guess);
        if (guess === winningNumb) {
            console.log('You win!');
        } else if (guess < winningNumb) {
            console.log('Too low...');
        } else {
            console.log('Too high...');
        }
    }
} // end compareGuess