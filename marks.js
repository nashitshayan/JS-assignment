function marksofSub(){
    let score=document.getElementById("verify").value;
    if(parseInt(score) >= 0 && parseInt(score) <= 100)
    {
        alert("Score saved");
    }
    else
    {
        alert("Your score must lie between 0 and 100");
    }
}