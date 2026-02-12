function validateForm() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email === "" || senha === "") {
    alert("Preencha todos os campos.");
    return false;
  }

  // redireciona manualmente
  window.location.href = "index.html";
  return false;
}
