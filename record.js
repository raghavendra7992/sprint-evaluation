// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction);
function myfunction(event){
    event.preventDefault()
    let names=document.querySelector("#name").value
    let eid=document.querySelector("#employeeID").value
    let dep=document.querySelector("#department").value
    let exp=document.querySelector("#exp").value
    let mail=document.querySelector("#email").value
    let mob=document.querySelector("#mbl").value
    var tr=document.createElement("tr");
    
    var td1=document.createElement("td");
    td1.innerText=names
    var td2=document.createElement("td")
    td2.innerText=eid
    var td3=document.createElement("td");
    td3.innerText=dep;
    var td4=document.createElement("td");
    td4.innerText=exp;
    var td5=document.createElement("td")
    td5.innerText=mail;
    var td6=document.createElement("td");
    td6.innerText=mob;

    var td7=document.createElement("td")
    var a=Number(exp);
    if(a>5){
        td7.innerText="Senior"
    }else if(a>2&&a<5){
        td7.innerText="Junior"
    }else{
        td7.innerText="Fresher"
    }
    var td8=document.createElement("td")
    td8.innerText="Delete"
    td8.style.cursor="pointer"
    td8.style.backgroundColor="red"
    td8.style.color="black"
    td8.addEventListener("click",function(event){
        event.target.parentNode.remove();
    })


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}