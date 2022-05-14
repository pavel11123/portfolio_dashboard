const Popupform = document.forms["Popupform"];
const form_Arr = Array.from(Popupform);
const validForm_Arr = [];
const Popupbutton = Popupform.elements["Popupbutton"];

form_Arr.forEach((el) => {
   if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validForm_Arr.push(el);
   }
});

Popupform.addEventListener("input", inputHandlerPopup);
Popupform.addEventListener("submit", formCheckPopup);

function inputHandlerPopup({ target }) {
   if (target.hasAttribute("data-reg")) {
      inputCheckPopup(target);
   }
}

function inputCheckPopup(el) {
   const inputValue = el.value;
   const inputReg = el.getAttribute("data-reg");
   const reg = new RegExp(inputReg);
   if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "2px solid rgb(0, 196, 0)";
   } else {
      el.setAttribute("is-valid", "0");
      el.style.border = "2px solid rgb(255, 0, 0)";
   }
}

function formCheckPopup(e) {
   e.preventDefault();
   const allValid = [];
   validForm_Arr.forEach((el) => {
      allValid.push(el.getAttribute("is-valid"));
   });
   const isAllValid = allValid.reduce((acc, current) => {
      return acc && current;
   });
   if (!Boolean(Number(isAllValid))) {
      alert("Заполните поля правильно!");
      return;
   }
   formSubmitPopup();
}

async function formSubmitPopup() {
   const data = serializeFormPopup(Popupform);
   const response = await sendData(data);
   if (response.ok) {
      let result = await response.json();
      alert(result.message);
      formResetPopup();
   } else {
      alert("Код ошибки: " + response.status);
   }
}

function serializeFormPopup(formNode) {
   return new FormData(Popupform);
}

async function sendData(data) {
   return await fetch("send_mail.php", {
      method: "POST",
      body: data,
   });
}

function formResetPopup() {
   Popupform.reset();
   validForm_Arr.forEach((el) => {
      el.setAttribute("is-valid", 0);
      el.style.border = "none";
   });
}
