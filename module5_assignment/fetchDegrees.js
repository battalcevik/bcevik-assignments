document.addEventListener('DOMContentLoaded', function() {
    const educationTableBody = document.getElementById('educationTableBody');
  
    fetch('./degrees.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Process the returned JSON data and populate the table
        data.degrees.forEach(degree => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${degree.school}</td>
            <td>${degree.program}</td>
            <td>${degree.type}</td>
            <td>${degree.yearConferred}</td>
          `;
          educationTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });
  