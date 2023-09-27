//Adding new Work Experience Field
function addnewWeField(){
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",2);
  newNode.setAttribute("placeholder","Enter here");

  let workExp=document.getElementById("we");
//   console.log(workExp);
  let workExpAddButton=document.getElementById("weAddButton");

  workExp.insertBefore(newNode,workExpAddButton);
}

//Adding new Academic Qualification Filed
function addnewAqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
  
    let aqOb=document.getElementById("aq");
    // console.log(aqOb);
    let weAddButtonOb=document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode,weAddButtonOb);
}


function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("linkT").href=document.getElementById("linkField").value;
    document.getElementById("gitT").href=document.getElementById("gitField").value;
    document.getElementById("leetT").href=document.getElementById("leetField").value;
    document.getElementById("ccT").href=document.getElementById("ccField").value;
    document.getElementById("cfT").href=document.getElementById("cfField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementsByClassName("weField");
    let s="";
    for(x of wes){
        s+=`<li>${x.value}</li>`;
    }
    document.getElementById("weT").innerHTML=s;

    let aqs=document.getElementsByClassName("aqField");
    s="";
    for(x of aqs){
        s+=`<li>${x.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=s;

    // Processing and Adding Image
    let file=document.getElementById("imgField").files[0];
    // console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    // console.log(reader.result);
    
    reader.onloadend=function(){
        document.getElementById("imgT").src=reader.result;   
        console.log(reader);
    }

    //Switching from Form to Resume Page
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
function printCV(){
    window.print();
}