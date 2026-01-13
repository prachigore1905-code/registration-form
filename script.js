function register(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let checkedLanguages = document.querySelectorAll(".lang:checked");
  let languages = [];

  checkedLanguages.forEach(lang => {
    languages.push(lang.value);
  });

  alert(
    "Registration Successful!\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Languages: " + languages.join(", ")
  );
}
