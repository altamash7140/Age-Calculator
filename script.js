const ageInput = document.querySelector(".age-input");
const ageBtn = document.querySelector(".calc-age-btn");
const ageResult = document.querySelector(".result");

// console.log(ageInput, ageBtn, ageResult);

ageBtn.addEventListener("click", () => {
  if(ageInput.value === ""){
    alert("Please input your date of birth")
  }else{
    // for date of birth

    console.log("input", ageInput.value)
    const dob = new Date(ageInput.value);
    console.log("dob", dob);;
    const dob_year = dob.getFullYear();
    console.log("dob_year", dob_year)

    // for current date

    const now = new Date();
    console.log("now", now);
    const now_year = now.getFullYear()
    console.log("now_year", now_year)

    // calculating age

    const age = now_year - dob_year;
    console.log("age", age);

    // displaying Age

    ageResult.innerHTML = `your Age is: ${age} `;
  }
})