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
  const modal1 = document.getElementById("modal1");
  const modal2 = document.getElementById("modal2");
  const modal3 = document.getElementById("modal3");

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
  else if (reportNumber == 7034) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "7.07ct";
    document.getElementById("Shape1").textContent = "Octagonal Step Cut";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7034) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "7.07ct";
    document.getElementById("Shape1").textContent = "Octagonal Step Cut";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7035) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "8.50ct";
    document.getElementById("Shape1").textContent = "Octagonal Step Cut";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7036) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "5.26ct";
    document.getElementById("Shape1").textContent = "Octagonal Step Cut";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7037) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "5.05ct";
    document.getElementById("Shape1").textContent = "Octagonal Step Cut";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7038) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "11.20";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7039) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "10.95ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7040) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "7.60ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7041) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "10.50";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7042) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "7.71ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7043) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "8.25ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7044) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "7.55ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7045) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "5.85ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 7046) {
    document.getElementById("reportNo1").textContent = reportNumber;
    document.getElementById("measurements1").textContent = "N/A";
    document.getElementById("weight1").textContent = "5.40ct";
    document.getElementById("Shape1").textContent = "Oval Modified";
    modal1.style.display = "flex";
  } 
  else if (reportNumber == 9042) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "7.57ct";
    document.getElementById("Shape2").textContent = "Octagonal Step Cut";
    modal2.style.display = "flex";
  } 
  
  else if (reportNumber == 9043) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "7.80ct";
    document.getElementById("Shape2").textContent = "Octagonal Step Cut";
    modal2.style.display = "flex";
  } 
  
  else if (reportNumber == 9044) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "8.25ct";
    document.getElementById("Shape2").textContent = "Octagonal Step Cut";
    modal2.style.display = "flex";
  } 
  else if (reportNumber == 9045) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "10.55ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  } 
  else if (reportNumber == 9046) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "10.30ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  } 
  else if (reportNumber == 9047) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "10.40ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9048) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "11.310ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9049) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "8.16ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9050) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "6.85ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9051) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "9.26ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9052) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "10.01ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9053) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "7.80ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9054) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "10.61ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9055) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "11.62ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9056) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "5.55ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9057) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "4.18ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9058) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "7.50ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9059) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "7.01ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9060) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "5.64ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9061) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "8.50ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9062) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "6.70ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9063) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "4.40ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9064) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "7.90ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9065) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "8.25ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }
  else if (reportNumber == 9066) {
    document.getElementById("reportNo2").textContent = reportNumber;
    document.getElementById("measurements2").textContent = "N/A";
    document.getElementById("weight2").textContent = "8.40ct";
    document.getElementById("Shape2").textContent = "Oval Modified";
    modal2.style.display = "flex";
  }

  else if (reportNumber == 8210) {
    document.getElementById("reportNo3").textContent = reportNumber;
    document.getElementById("measurements3").textContent = "N/A";
    document.getElementById("weight3").textContent = "5.50ct";
    document.getElementById("Shape3").textContent = "Oval Modified";
    modal3.style.display = "flex";
  }



  else {
    alert("Invalid report number. Please try again.");
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modal1 = document.getElementById("modal1");
  const modal2 = document.getElementById("modal2");
  const modal3 = document.getElementById("modal3");
  modal3.style.display = "none";
  modal2.style.display = "none";
  modal1.style.display = "none";
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

window.onclick = function (event) {
  const modal1 = document.getElementById("modal1");
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
};

window.onclick = function (event) {
  const modal2 = document.getElementById("modal2");
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
};
window.onclick = function (event) {
  const modal3 = document.getElementById("modal3");
  if (event.target === modal3) {
    modal2.style.display = "none";
  }
};
