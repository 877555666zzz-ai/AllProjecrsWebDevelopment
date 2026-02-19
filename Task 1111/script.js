function calculateBMI(){
      let height = document.getElementById("height").value;
      let weight = document.getElementById("weight").value;

      if(height > 0 && weight > 0){
        let bmi = weight / ((height/100) * (height/100));
        bmi = bmi.toFixed(1);
        document.getElementById("result").innerText = "Your BMI: " + bmi;
      } else {
        document.getElementById("result").innerText = "Please enter height and weight";
      }
    }