let txtJobTittle = document.getElementById("exampleInputTittle");
let txtJobDescription = document.getElementById("exampleInputdescription");
let txtJobsalary = document.getElementById("exampleInputsalary");
let txtJobsalarydate = document.getElementById("exampleInputsalaryDate");

let btnSubmit =  document.getElementById("btn-submit").addEventListener("click" , btnSubmitOnclick);

function btnSubmitOnclick(){
    if(
        txtJobTittle.value.trim() === "" ||
        txtJobDescription.value.trim() === "" ||
        txtJobsalary.value.trim() === "" ||
        txtJobsalarydate.value.trim() === ""
    ){
         alert("Enter the all data!");
    }
    else{
        let requestBody = {
        "job_id" : " ",
        "title" : txtJobTittle.value,
        "description" : txtJobDescription.value,
        "salary" : txtJobsalary.value,
        "salary_date" : txtJobsalarydate.value
    };

    fetch("http://localhost:8080/add/job",{
        method : "POST",
        body:JSON.stringify(requestBody),
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then(data=>data.json())
    .then(data=>{
        console.log("Response Received");
    })
     alert("Job Add Successful.");
   
    }
    
    
    
}




