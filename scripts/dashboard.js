// localStorage.clear();

document.addEventListener("DOMContentLoaded", () => {
    const results = JSON.parse(localStorage.getItem("quizResults")) || [];
    const tableBody = document.getElementById("resultsBody");
  
    if (results.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5">No quiz results found.</td></tr>`;
      return;
    }
  
    results.forEach(result => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.email}</td>
        <td>${result.quizTitle}</td>
        <td>${result.score}</td>
        <td>${result.date}</td>
      `;
  
      tableBody.appendChild(row);
    });
  });
  