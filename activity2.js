function getScore()
{
    score = localStorage.getItem("score")
    document.getElementById("output").innerHTML = "<h1>score:" + score +"</h1>";
}
function back()
{
    window.location = "activity1.html"
}