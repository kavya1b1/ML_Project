document.getElementById("predictForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const data = {
      Pclass: parseInt(document.getElementById("pclass").value),
      Age: parseFloat(document.getElementById("age").value),
      SibSp: parseInt(document.getElementById("sibsp").value),
      Parch: parseInt(document.getElementById("parch").value),
      Fare: parseFloat(document.getElementById("fare").value),
      Sex: document.getElementById("sex").value,
      Embarked: document.getElementById("embarked").value
    };
  
    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      const resultDiv = document.getElementById("result");
  
      resultDiv.innerHTML = `
        ${result.survived === 1
          ? "✅ <strong>Prediction:</strong> Passenger would survive"
          : "❌ <strong>Prediction:</strong> Passenger would not survive"
        }<br>
        🔢 <strong>Survival Probability:</strong> ${result.probability}%`;
  
      // Show chart container if hidden
      const chartContainer = document.getElementById("chartContainer");
      chartContainer.style.display = "block";
  
      // Create or update chart
      const ctx = document.getElementById("chart").getContext("2d");
      if (window.myChart) window.myChart.destroy(); //this will destroy if any pre defined char exist to prevent overlapping 
  
      window.myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Survive", "Not Survive"],
          datasets: [{
            data: [result.probability, 100 - result.probability],
            backgroundColor: ["#4CAF50", "#F44336"],
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
  // if any error occurs this will fetch and display the error to user 
    } catch (err) {
      document.getElementById("result").textContent = "⚠️ Error occurred during prediction.";
      console.error(err);
    }
  });
  