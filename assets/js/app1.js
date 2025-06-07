console.log("Hello");

let txtCompanyName = document.getElementById("exampleInputname");
let txtCompanyLoaction = document.getElementById("exampleInputLocation");
let txtCompanyIndustry = document.getElementById("exampleInputIndustry1");
console.log(txtCompanyName.value);

let btnSubmit =  document.getElementById("submit-btn").addEventListener("click" , btnSubmitOnclick);

function btnSubmitOnclick(){

    const isChecked = document.getElementById('exampleCheck1').checked;

    if(isChecked){
      let requestBody = {
        "name" : txtCompanyName.value,
        "location" : txtCompanyLoaction.value,
        "industry" : txtCompanyIndustry.value
    };
    
    fetch("http://localhost:8080/add/company",{

        method:"POST",
        body:JSON.stringify(requestBody),
        headers:{
            "Content-Type":"application/json",
        }
    })
    .then(data=>data.json())
    .then(data=>{
        console.log("Response Received");
    })
    alert("Company Add Successful.");
    console.log(txtCompanyIndustry.value);
    }
    else{
        alert("Please put the tip !")
    }
    
    
}

