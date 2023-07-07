const button = document.getElementById("lobutton");
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const errorId = document.getElementById("errorId");
const errorPw = document.getElementById("errorPw");
const idpw = document.getElementById("IDPW");

const LogIn = () => {
  if (!id.value) {
    errorId.style.visibility = "visible";
  }
  if (!pw.value) {
    errorPw.style.visibility = "visible";
  }
};
