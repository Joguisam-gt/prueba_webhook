document.getElementById("formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;

  await fetch("https://flashbulb-encrypt-hyphen.ngrok-free.dev/webhook-test/3dbd521c-548a-42c6-ae8f-68ca1118243c", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre
    })
  });

  alert("Datos enviados correctamente");
});