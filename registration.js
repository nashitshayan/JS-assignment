function checkfun(){

    const myform = document.getElementById("form");

    myform.addEventListener("submit" , (e) =>{
        e.preventDefault();


        // Name validation
        let N = document.getElementById("Name").value;

        if (N == "") {
            document.getElementById("Namespan").setAttribute("style", "color:Red;");
            document.getElementById("Namespan").textContent = "**Please Enter Name" ;
        }
        for(let i=0;i<N.length;i++)
        {
            if(N.charCodeAt(i)>=48 && N.charCodeAt(i)<=57){
                 document.getElementById("Namespan").setAttribute("style", "color:Red;");
                 document.getElementById("Namespan").textContent ="** Please Enter Correct Name";
            }
        }

    

        // final submition
        let stream = document.getElementById("list").value;

        if(stream=="1"){
            document.getElementById("streamspan").setAttribute("style", "color:Red;");
            document.getElementById("streamspan").textContent ="** Please Select A Stream";
        }
        else if (stream == "2") {
            window.location = "CSEmarks.html";
        }
        else if(stream == "3" ){
            window.location = "ECEmarks.html";
        }
        else if(stream=="4"){
            window.location = "MECHmarks.html";
        }

    });
 
}


function agefun(){

    let Dob = document.getElementById("DOB").value;

    let Byear = Number(Dob.substring(0, 4));

    let Age = 2021 - Byear;

    document.getElementById("Age").value = Age;

    console.log(Age);
}