// NAV
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// End nav start cars

// object Data of cars
let cars = [
  {
    index: "0",
    name: "Toyota Corolla",
    year: 2022,
    model: "LE",
    Rent:1000000,
    typeRent:"weeks",
    color: "Silver",
    otherSpecs: {
      engine: "1.8L I4",
      transmission: "CVT",
      fuelEconomy: "30 city / 38 highway mpg",
    },
  },
  {
    index: "1",
    name: "Honda Civic",
    year: 2021,
    model: "EX",
    Rent: 1500000,
    typeRent:"days",
    color: "White",
    otherSpecs: {
      engine: "1.5L I4 Turbocharged",
      transmission: "CVT",
      fuelEconomy: "32 city / 42 highway mpg",
    },
  },
  {
    index: "2",
    name: "Nissan Altima",
    year: 2023,
    model: "SL",
    Rent: 150000,
    typeRent:"days",
    color: "Black",
    otherSpecs: {
      engine: "2.5L I4",
      transmission: "CVT",
      fuelEconomy: "28 city / 39 highway mpg",
    },
  },
  {
    index: "3",
    name: "Mazda CX-5",
    year: 2022,
    model: "Touring",
    Rent: 150000,
    typeRent:"days",
    color: "Red",
    otherSpecs: {
      engine: "2.5L I4",
      transmission: "6-speed automatic",
      fuelEconomy: "25 city / 31 highway mpg",
    },
  },
  {
    index: "4",
    name: "Chevrolet Camaro",
    year: 2022,
    model: "1LT",
    Rent: 150000,
    typeRent:"days",
    color: "Yellow",
    otherSpecs: {
      engine: "2.0L Turbocharged I4",
      transmission: "6-speed manual",
      fuelEconomy: "20 city / 30 highway mpg",
    },
  },
  {
    index: "5",
    name: "Ford Mustang",
    year: 2021,
    model: "GT Premium",
    Rent: 3750000,
    typeRent:"months",
    color: "Blue",
    otherSpecs: {
      engine: "5.0L V8",
      transmission: "10-speed automatic",
      fuelEconomy: "16 city / 25 highway mpg",
    },
  },

  {
    index: "6",
    name: "BMW X5",
    year: 2023,
    model: "xDrive40i",
    Rent:1000000,
    typeRent:"weeks",
    color: "Black",
    otherSpecs: {
      engine: "3.0L Turbocharged I6",
      transmission: "8-speed automatic",
      fuelEconomy: "21 city / 26 highway mpg",
    },
  },
  {
    index: "7",
    name: "Tesla Model S",
    year: 2022,
    model: "Plaid",
    Rent: 150000,
    typeRent:"days",
    color: "Black",
    otherSpecs: {
      engine: "Electric",
      transmission: "1-speed direct drive",
      fuelEconomy: "N/A",
    },
  },
  {
    index: "8",
    name: "Mercedes-Benz E-Class",
    year: 2022,
    model: "E 350",
    Rent: 3750000,
    typeRent:"months",
    color: "Gray",
    otherSpecs: {
      engine: "2.0L Turbocharged I4",
      transmission: "9-speed automatic",
      fuelEconomy: "22 city / 31 highway mpg",
    },
  },

  {
    index: "9",
    name: "Audi Q7",
    year: 2021,
    model: "Premium Plus",
    Rent:1000000,
    typeRent:"weeks",
    color: "White",
    otherSpecs: {
      engine: "2.0L Turbocharged I4",
      transmission: "8-speed automatic",
      fuelEconomy: "19 city / 23 highway mpg",
    },
  },
];

// fetch data and append it to html page

const boxes = document.getElementById("boxes");

// loop in cars object

let i = 0;

while (i < cars.length) {
  boxes.innerHTML += `<div class="box">
    <div class="main-cont">
      <img src="assets/images/${cars[i].name}.jpg" alt="" />
    </div>
    <div class="bottom-box">
      <h2>${cars[i].name}</h2>
      <p>year : <span>${cars[i].year}</span></p>
      <p>type : <span></span></p>
      <p>typeRent : <span>${cars[i].typeRent}</span></p>
      <button class="btn-detels" onclick="moreDatels(${cars[i].index})" >More Detals</button>
    </div>
    </div>`;

  i = i + 1;
}

// More Ditels
const popup = document.getElementById("popup"),
  continerInfo = document.getElementById("continer-box");
  var Rent=0,
  reconstructionFee =0,
  tax =0;

// show popup and append data to more ditels
function moreDatels(index) {
   Rent = cars[index].Rent;
   reconstructionFee = (cars[index].Rent * 1) / 100,
    tax = (cars[index].Rent * 5) / 100;

  popup.style.display = "block";

  continerInfo.innerHTML = `<div class="display-info">
  <h2>${cars[index].name}</h2>
  <p>year : <span>${cars[index].year}</span></p>
  <p>model : <span>${cars[index].model}</span></p>
  <p>color : <span>${cars[index].color}</span></p>
  <p>engine : <span>${cars[index].otherSpecs.engine}</span></p>
  <p>
    transmission : <span>${cars[index].otherSpecs.transmission}</span>
  </p>
  <p>
    fuelEconomy : <span>${cars[index].otherSpecs.fuelEconomy}</span>
  </p>
  <p>
  typeRent : <span>${cars[index].typeRent}</span>
</p>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rent</td>
          <td>${Rent}</td>
        </tr>

        <tr>
          <td>reconstruction fee</td>
          <td>${reconstructionFee}</td>
        </tr>
        <tr>
          <td>tax</td>
          <td>${tax}</td>
        </tr>
        <tr class='total'>
          <td>total</td>
          <td>${Rent + reconstructionFee + tax}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="button-box">
    <button class="cansle" onclick="closepopup()">cansel</button>

    <div class="chickbox-item">
      <input type="checkbox" name="contenew" id="contenew" onchange='showForm()' />
      <label for="contenew">contenew</label>
    </div>
  </div>
</div>

<div class="display-imges">
  <img src="./assets/images/${cars[index].name}.jpg" alt="" />
  <img
    class="active"
    src="./assets/images/${cars[index].name}-2.jpg"
    alt=""
  />
  <img src="./assets/images/${cars[index].name}-3.jpg" alt="" />
</div>

<div class="form-continer" >
<form action="#" id='formData'>
  <div class="input-item">
  <label for="fullName">Name</label>
    <input type="text" id="fullName" oninput='validArabicData() ' placeholder="ادخل اسمك الكامل بالغة العربية" required>
    <div class="masseges-worning"  id='warning'>لايمكنك ادخال الا الاحرف العربية فقط</div>

  </div>
  <div class="input-item">
  <label for="Id">ID</label>
  <input type="text" id="Id" oninput='chickID() ' maxlength='16' placeholder="الرقم الوطني " required>

</div>
<div class="input-item">
<label for="Date">Date</label>
<input type="date" id="Date" oninput=''  required>
</div>
<div class="input-item">
<label for="Number">Number</label>
<div class="input-number">
<span>+963</span>
<input type="text" id="Number"   oninput='chickNumber()' maxlength='9'  placeholder=" ادخل رقم الموبايل " required>
</div> 
<div class="masseges-worning"  id='warning-Number'>غير صحيح</div>
</div>
<div class="input-item">
<label for="email">Email</label>
<input type="email" id="email" required pattern="[a-z0-9._%+-]+gmail\.com$" placeholder="example@gmail.com ادخل الايميل ">
</div>
<div class="input-item">
<label for="numRent">number of  ${cars[index].typeRent}</label>
<input type="number" id="numRent" oninput=''  required>
</div>
<div class="input-item">
<span id="captcha"></span>
<label for="captchaInput">CAPTCHA</label>
<input type="text" id="captchaInput"  placeholder=" ادخل الرمز للتحقق " oninput=''  required>
</div>
<div class="input-item">
<input type="submit" id="submit" value='submit' onclick="checkCaptcha()">
</div>
  
</form>
</div>

`

;

  // get all img in more datels

  var displayImg = document.querySelectorAll(".display-imges img");
  // loop in img to add and remove class active
  for (let i = 0; i < displayImg.length; i++) {
    displayImg[i].addEventListener("click", () => {
      for (let j = 0; j < displayImg.length; j++) {
        displayImg[j].classList.remove("active");
      }

      displayImg[i].classList.add("active");
    });
  }
}

// chick box and show form
function showForm() {
  const contenew = document.getElementById("contenew"),
    formData = document.getElementById("formData");
  if (contenew.checked) {
    formData.style.display = "block";
    generateCaptcha();
  } else {
    formData.style.display = "none";
  }
}

// chick data from input

// chick if data is arabic in name


function validArabicData() {
  // get element
  const fullName=document.getElementById('fullName'),
      warning=document.getElementById('warning');

      if (!fullName.value.match(/^[\u0600-\u06FF\s]*$/)) {
        warning.style.display="block";
        fullName.style.borderColor="#ff1f1f";
      }
      else{
        warning.style.display="none";
        fullName.style.borderColor="#c4c4c4";

      }
}
// chick if data in ID
function chickID() {
  const IDNumber = document.getElementById('Id'),
        value = IDNumber.value;

  const formattedValue = value.replace(/[^\d-]/g, '');

  const groups = formattedValue.match(/\d{1,2}/g);

  if (groups !== null && groups.length === 6 && groups.every(group => parseInt(group) >= 0 && parseInt(group) <= 99)) {
 
    const formattedNumber = groups.join('-');
    IDNumber.value = formattedNumber;
    IDNumber.style.borderColor="#243bd6";
  }
   else {
    IDNumber.style.borderColor="#ff1f1f";
  }
}


// chick if number eqoul to mtn or syriatel numbers


function chickNumber() {
  // get element
  const numberValue=document.getElementById('Number').value,
      warningNumber=document.getElementById('warning-Number');
      let allPrefix=['99','98','93','94','95','96'];
    // numberValue.match(/[^\d]/g, ''

    if (!allPrefix.includes(numberValue.toString().substring(0,2)) ) {
      if ( ! /^\d{9}$/.test(numberValue) ) {
        warningNumber.style.display="block";
      }
    }else{
        warningNumber.style.display="none";
      }
 


      
}

// Generate captcha

function generateCaptcha() {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  for (let i = 0; i < 5; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  const canvas = document.getElementById('captcha');
  captchaText = canvas.innerHTML=str;
}


function checkCaptcha() {
  const userInput = document.getElementById("captchaInput").value;
  var inputs=document.querySelectorAll('form input'),
      valueConten=false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      valueConten=false;
    }else{
      valueConten=true;
    }
    
  }
  if (userInput === captchaText && valueConten == true) {
    alert((Rent *(document.getElementById('numRent').value) )+(reconstructionFee+tax));
  } else {
    alert("حدث خطأ ما!!... يرجى اعادة المحاولة ");
  }
}

// close popup ic click close btn

function closepopup() {
  popup.style.display = "none";
}



