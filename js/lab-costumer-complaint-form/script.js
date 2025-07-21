const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const orderNo = document.querySelector("#order-no");
const productCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");

const complaintCheckboxes = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const complaintsGroup = document.querySelector("#complaints-group");
const complaintsDescription = document.querySelector("#complaint-description");
const otherComplaint = document.querySelector("#other-complaint");

const solutionRadios = document.querySelectorAll('#solutions-group input[type="radio"]');
const solutionsGroup = document.querySelector("#solutions-group");
const solutionsDescription = document.querySelector("#solution-description");
const otherSolution = document.querySelector("#other-solution");

function validateForm () {
  const complaintSelected = Array.from(complaintCheckboxes).some(cb => cb.checked);
  const isOtherComplaint = otherComplaint.checked;

  const solutionSelected = Array.from(solutionRadios).some(r => r.checked);
  const isOtherSolution = otherSolution.checked;

  const bComplaintDescription = !isOtherComplaint || (complaintsDescription.value.trim().length >= 20);
  const bSolutionDescription = !isOtherSolution || (solutionsDescription.value.trim().length >= 20);

  // Para validateForm: apenas verificar se não está vazio
  const fullNameValue = fullName.value.trim();
  const isFullNameNotEmpty = fullNameValue.length > 0;

  return {
    "full-name": isFullNameNotEmpty,
    "email": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim()),
    "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
    "product-code": /^[a-z]{2}\d{2}-[a-z]\d{3}-[a-z]{2}\d$/i.test(productCode.value.trim()),
    "quantity": /^[1-9]\d*$/.test(quantity.value.trim()),
    "complaints-group": complaintSelected,
    "complaint-description": bComplaintDescription,
    "solutions-group": solutionSelected,
    "solution-description": bSolutionDescription,
  };
}

// Correção: função isValid agora recebe validationObj como parâmetro
function isValid(validationObj) {
  return Object.values(validationObj).every(value => value === true);
}

function setFieldBorder(element, isValid) {
  element.style.borderColor = isValid ? "green" : "red";
}

function setGroupBorder(fieldset, isValid) {
  fieldset.style.border = isValid ? "2px solid green" : "2px solid red";
}

// Event listeners
fullName.addEventListener("change", () => {
  // Para o event listener: validar usando regex (valor válido)
  let valid = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(fullName.value.trim())
  if (fullName.value !== "") {
    valid = true;
  };
  setFieldBorder(fullName, valid);
});

email.addEventListener("change", () => {
  const valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim());
  setFieldBorder(email, valid);
});

orderNo.addEventListener("change", () => {
  const valid = /^2024\d{6}$/.test(orderNo.value.trim());
  setFieldBorder(orderNo, valid);
});

productCode.addEventListener("change", () => {
  const valid = /^[a-z]{2}\d{2}-[a-z]\d{3}-[a-z]{2}\d$/i.test(productCode.value.trim());
  setFieldBorder(productCode, valid);
});

quantity.addEventListener("change", () => {
  const valid = /^[1-9]\d*$/.test(quantity.value.trim());
  setFieldBorder(quantity, valid);
});

complaintsGroup.addEventListener("change", () => {
  const valid = Array.from(complaintCheckboxes).some(cb => cb.checked);
  setGroupBorder(complaintsGroup, valid);
});

complaintsDescription.addEventListener("input", () => {
  const valid = !otherComplaint.checked || complaintsDescription.value.trim().length >= 20;
  setFieldBorder(complaintsDescription, valid);
});

solutionsGroup.addEventListener("change", () => {
  const valid = Array.from(solutionRadios).some(r => r.checked);
  setGroupBorder(solutionsGroup, valid);
});

solutionsDescription.addEventListener("input", () => {
  const valid = !otherSolution.checked || solutionsDescription.value.trim().length >= 20;
  setFieldBorder(solutionsDescription, valid);
});

document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();

  const validation = validateForm();

  // Aplicar bordas baseadas na validação
  setFieldBorder(fullName, validation["full-name"]);
  setFieldBorder(email, validation["email"]);
  setFieldBorder(orderNo, validation["order-no"]);
  setFieldBorder(productCode, validation["product-code"]);
  setFieldBorder(quantity, validation["quantity"]);
  setGroupBorder(complaintsGroup, validation["complaints-group"]);
  setFieldBorder(complaintsDescription, validation["complaint-description"]);
  setGroupBorder(solutionsGroup, validation["solutions-group"]);
  setFieldBorder(solutionsDescription, validation["solution-description"]);

  // Verificar se o formulário é válido
  if (isValid(validation)) {
    alert("Formulário válido! Pode ser enviado!");
    // document.querySelector("#form").submit(); // ou lógica AJAX etc.
  } else {
    alert("Por favor, corrija os campos destacados em vermelho.");
  }
});