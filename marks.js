function marksofSub(){
    // let score=document.getElementById("verify").value;
    // if(parseInt(score) >= 0 && parseInt(score) <= 100)
    // {
    //     // alert("Your score must lie between 0 and 100");
    // }
    // else
    // {
    //     alert("Your score must lie between 0 and 100");
    // }


    let subOneMarks= document.getElementById("sub1").value;
    let subTwoMarks= document.getElementById("sub2").value;
    let subThreeMarks= document.getElementById("sub3").value;
    let subFourMarks= document.getElementById("sub4").value;
    let subFiveMarks= document.getElementById("sub5").value;


    if(subOneMarks<0 || subOneMarks>100)
    {
        alert("Subject one should be a number between 0 and 100!");
    }
    else if(subTwoMarks<0 || subTwoMarks>100)
    {
        alert("Subject two should be a number between 0 and 100!");    }
    else if(subThreeMarks<0 || subThreeMarks>100)
    {
        alert("Subject three should be a number between 0 and 100!");
    }
    else if(subFourMarks<0 || subFourMarks>100)
    {
        alert("Subject four should be a number between 0 and 100!");
    }
    else if(subFiveMarks<0 || subFiveMarks>100)
    {
        alert("Subject five should be a number between 0 and 100!");
    }
    else 
    {
        window.location="";
    }
    

}