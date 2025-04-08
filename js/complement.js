function includeHTML(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error('Archivo no encontrado: ' + file);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}

window.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});
