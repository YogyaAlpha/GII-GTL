function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

function verifyCode() {
  const reportNumber = document.getElementById("reportNumber").value;
  processVerification(reportNumber);
}

function verifyHeaderCode() {
  const reportNumber =
    document.getElementById("headerReportNumber").value;
  processVerification(reportNumber);
}

function processVerification(reportNumber) {
  const modal = document.getElementById("modal");

  // Define the range of codes and associated data
  // const seriesStart = 6501008000;
  // const seriesEnd = 6501008099;

  if (reportNumber == 5456) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "3.10ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  }else if (reportNumber == 5457) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "6.05ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5458) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "8.45ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5459) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.35ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5460) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "6.75ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5461) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "5.25ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5462) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "5.85ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5463) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "6.20ct";
    document.getElementById("Shape").textContent = "Octagonal Step Cut";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5464) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.30ct";
    document.getElementById("Shape").textContent = "Round Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5465) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.60ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5466) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "9.85ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5467) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.95ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5468) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.80ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5469) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "6.30ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5470) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.41ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5471) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "7.91ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5472) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "5.80ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  else if (reportNumber == 5473) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "N/A";
    document.getElementById("weight").textContent = "5.10ct";
    document.getElementById("Shape").textContent = "Oval Modified";
    modal.style.display = "flex";
  } 
  
   else if (reportNumber >= 1101008000 && reportNumber <= 1101008999) {
    document.getElementById("reportNo").textContent = reportNumber;
    document.getElementById("measurements").textContent = "11.00mm";
    document.getElementById("weight").textContent = "4.50ct";
    modal.style.display = "flex";
  } 
  else {
    alert("Invalid report number. Please try again.");
    modal.style.display = "none";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("More details coming soon!");
  });
});

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
