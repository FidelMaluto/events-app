const form = document.getElementById('eventoForm');
const lista = document.getElementById('listaEventos');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);

    await fetch('http://localhost:3001/api/evento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    form.reset();
    carregarEventos(); // ATUALIZANDO A LISTA
});

async function carregarEventos() {
    const res = await fetch('http://localhost:3001/api/eventos');
    const eventos = await res.json();

    lista.innerHTML = '';
    eventos.forEach(e => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${e.titulo}</strong> -${e.local} aos ${e.data_evento}
        <br><em> ${e.descricao}</em>
        `;

        lista.appendChild(li);
    });
}
