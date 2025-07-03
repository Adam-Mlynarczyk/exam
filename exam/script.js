//let users=[];
function validate(){
    feedback=document.getElementById("feedback");
    feedback.removeAttribute("hidden");
    
    n=document.getElementById("name").value;
    e=document.getElementById("email").value;
    a=document.getElementById("age").value;
    if(n!=null && e!=null && a!=null && n!="" && e!="" && a>=18){
        //users.push(n
        feedback.removeAttribute("style");
        feedback.innerHTML="Added succesfully!";
        document.getElementById("people-list").innerHTML+=`<li>${n}, Email: ${e}, Age: ${a}</li>`;
    }
    else{
        feedback.style.color="brown";
        feedback.style.borderColor="brown";
        feedback.style.backgroundColor="rgb(206, 182, 182)";
        if(a<18) feedback.innerHTML="Age must be 18 or higher to submit!";
        else feedback.innerHTML="Something went wrong - check form inputs!";
    }
}