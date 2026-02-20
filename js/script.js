// Alternância de tema claro/escuro
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Validação do formulário de contato
const form = document.getElementById("contact-form");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome && email.includes("@") && mensagem){
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  });
}
