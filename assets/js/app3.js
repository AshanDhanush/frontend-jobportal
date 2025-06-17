document.addEventListener("DOMContentLoaded", function () {
    let txtuserName = document.getElementById("exampleInputname");
    let txtpassword = document.getElementById("exampleInputPassword");
    let btnsubmit1 = document.getElementById("btn-submit-signin-companny");

    if (!txtuserName || !txtpassword || !btnsubmit1) {
        console.error("One or more elements not found. Check your HTML IDs.");
        return;
    }

    btnsubmit1.addEventListener("click", function () {
        if (
            txtuserName.value.trim() === "" ||
            txtpassword.value.trim() === ""
        ) {
            alert("Enter all required data!");
        } else {
            let body = {
                companyName: txtuserName.value,
                password: txtpassword.value,
            };

            fetch("http://localhost:8080/get/company/password-name", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    if (data === true) {
                        alert("Login successful!");
                        window.location.href = "addJob.html";
                    } else {
                        alert("Invalid company name or password");
                    }
                })
                .catch((err) => {
                    console.error("Login error:", err);
                    alert("Login failed. Server error.");
                });
        }
    });
});
