document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/get/Job")
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch jobs");
      return response.json();
    })
    .then(jobs => {
      const container = document.getElementById("joblist-container");
      container.innerHTML = ""; 

      jobs.forEach(job => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 d-flex justify-content-center";

        const card = document.createElement("div");
        card.className = "card shadow-sm";
        card.style.width = "18rem";

        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${job.title ?? "No Title"}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Job ID: ${job.job_id ?? "N/A"}</h6>
            <p class="card-text">${job.description ?? "No Description"}</p>
            <a href="#" class="card-link">Salary: $${job.salary?.toLocaleString() ?? "N/A"}</a><br>
            <small class="text-muted">Salary Date: ${job.salary_date ?? "N/A"}</small>
          </div>
        `;

        col.appendChild(card);
        container.appendChild(col);
      });
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to load job data.");
    });
});
