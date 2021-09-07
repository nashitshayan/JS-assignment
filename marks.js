function marksofSub(){
    let score=document.getElementById("verify").value;
    if(parseInt(score) < 0 || parseInt(score) > 100)
    {
        alert("Your score must lie between 0 and 100");
    }
    // else
    // {
    //     alert("Your score must lie between 0 and 100");
    // }
}