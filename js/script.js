var answers = ["D", "A", "C", "A", "C", "B", "D", "A", "D", "B"],
    tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (var y = 0; y < radios.length; y++) {
        if (radios[y].checked) return radios[y].value; // return the checked value
    }
}

function getScore() {
    var score = 0;
    debugger
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1; // increment only
    return score;
}

$(document).ready(function() {
    $('form').show()
    $('.result').hide()
    $('form').submit(function(event) {
        event.preventDefault();
        $('form').hide();
        $('.result').show()
        returnScore();
    })
})



function returnScore() {
    // alert("Your score is " + getScore() + "/" + tot);
    document.getElementById('marks').innerHTML = "Your score is :" + "<br>" + getScore() + "/" + tot;
}