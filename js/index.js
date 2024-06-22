document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const startDate = document.getElementById("startDate").value;
    const startTime = document.getElementById("startTime").value;
    const endDate = document.getElementById("endDate").value;
    const endTime = document.getElementById("endTime").value;

    // Logic to fetch and filter logs based on date and time range
    // This is just a dummy example, replace with actual data fetching
    const logs = [
      {
        date: "2024-06-19",
        time: "10:00",
        event: "Motion Detected",
        details: "Front Door",
      },
      {
        date: "2024-06-19",
        time: "11:00",
        event: "Motion Detected",
        details: "Back Yard",
      },
      {
        date: "2024-06-19",
        time: "12:00",
        event: "Camera Offline",
        details: "Garage",
      },
    ];

    const filteredLogs = logs.filter((log) => {
      const logDateTime = new Date(`${log.date}T${log.time}`);
      const startDateTime = new Date(`${startDate}T${startTime}`);
      const endDateTime = new Date(`${endDate}T${endTime}`);
      return logDateTime >= startDateTime && logDateTime <= endDateTime;
    });

    const logTableBody = document.getElementById("logTableBody");
    logTableBody.innerHTML = "";
    filteredLogs.forEach((log) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${log.date}</td><td>${log.time}</td><td>${log.event}</td><td>${log.details}</td>`;
      logTableBody.appendChild(row);
    });
  });
