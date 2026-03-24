function enviarWhats(event) {
  event.preventDefault(); // Evita o envio tradicional do formulário

  const nome = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem");
  const telefone = "5581998697417"; // Substitua pelo seu número de telefone com código do país
  const texto = `Olá, meu nome é ${nome.value} e minha mensagem é: ${mensagem.value}`;
  const msfFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msfFormatada}`;
  window.open(url, "_blank");
}
