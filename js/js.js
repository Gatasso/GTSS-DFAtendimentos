const frm = document.querySelector("form");
const listaPacientes = document.querySelector(".list-group");
const btnAdicionar = document.querySelector(".btn-adicionar");
const btnEmergencia = document.querySelector(".btn-emergencia");

const nomeInput = document.querySelector("#nome_paciente");
const imagemInput = document.querySelector("#imagem_paciente");
const nomeAtendimento = document.querySelector(".paciente-label");
const imagemAtendimento = document.querySelector(".paciente-image");

function getFila() {
    return JSON.parse(localStorage.getItem("filaPacientes")) || [];
}


function setFila(fila) {
    localStorage.setItem("filaPacientes", JSON.stringify(fila));
}


function atualizarListaPacientes() {
    const fila = getFila();
    listaPacientes.innerHTML = "";
    const temAtendimento = !!localStorage.getItem("pacienteEmAtendimento");

    fila.forEach((paciente, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center flex-wrap";

        li.innerHTML = `
            <div class="d-flex align-items-center gap-3">
                <img src="${paciente.imagem}" width="50" height="50" class="rounded-circle border ${index === 0 ? 'border-danger' : 'border-secondary'}">
                <div>
                    <strong>${paciente.nome}</strong> <br>
                    <small>Posição: ${index + 1}º</small>
                </div>
            </div>
            <div class="btn-group mt-2" style="margin: 0px 10px">
                <button class="btn btn-success btn-sm btn-atender" ${temAtendimento ? 'disabled' : ''}>Atender</button>                
                <button class="btn btn-danger btn-sm btn-excluir">Excluir</button>
            </div>
        `;


        li.querySelector(".btn-atender").addEventListener("click", () => {
            const pacienteAtendido = fila.splice(index, 1)[0];
            localStorage.setItem("pacienteEmAtendimento", JSON.stringify(pacienteAtendido));
            setFila(fila);
            localStorage.removeItem(pacienteAtendido.nome);
            atualizarAtendimento();
            atualizarListaPacientes();
        });


        li.querySelector(".btn-excluir").addEventListener("click", () => {
            fila.splice(index, 1);
            localStorage.removeItem(paciente.nome);
            setFila(fila);
            atualizarListaPacientes();
        });

        listaPacientes.appendChild(li);
    });
}

function atualizarAtendimento() {
    const paciente = JSON.parse(localStorage.getItem("pacienteEmAtendimento"));
    const container = document.querySelector(".paciente-info");

    if (paciente) {
        nomeAtendimento.innerHTML = `<strong>Nome:</strong> ${paciente.nome}`;
        imagemAtendimento.src = paciente.imagem;
        imagemAtendimento.style.display = "block";

        if (!document.querySelector(".btn-finalizar")) {
            const btn = document.createElement("button");
            btn.textContent = "Finalizar Atendimento";
            btn.className = "btn btn-warning mt-3 btn-finalizar";
            btn.addEventListener("click", () => {
                localStorage.removeItem("pacienteEmAtendimento");
                atualizarAtendimento();
                atualizarListaPacientes(); 
            });
            container.appendChild(btn);
        }
    } else {
        nomeAtendimento.innerHTML = "<strong>Nome:</strong> Nenhum paciente em atendimento";
        imagemAtendimento.src = "";
        imagemAtendimento.style.display = "none";

        const btnExistente = document.querySelector(".btn-finalizar");
        if (btnExistente) btnExistente.remove();
    }
}

function lerImagem(arquivo, callback) {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(arquivo);
}

btnAdicionar.addEventListener("click", () => {
    const nome = nomeInput.value.trim();
    const arquivo = imagemInput.files[0];
    if (!nome || !arquivo) return alert("Preencha nome e imagem!");

    lerImagem(arquivo, (imgBase64) => {
        const fila = getFila();
        fila.push({ nome, imagem: imgBase64 });
        setFila(fila);
        localStorage.setItem(nome, JSON.stringify({ imagem: imgBase64 }));
        atualizarListaPacientes();
        frm.reset();
    });
});

btnEmergencia.addEventListener("click", () => {
    const nome = nomeInput.value.trim();
    const arquivo = imagemInput.files[0];
    if (!nome || !arquivo) return alert("Preencha nome e imagem!");

    lerImagem(arquivo, (imgBase64) => {
        const fila = getFila();
        fila.unshift({ nome, imagem: imgBase64 }); // sempre no topo
        setFila(fila);
        localStorage.setItem(nome, JSON.stringify({ imagem: imgBase64 }));
        atualizarListaPacientes();
        frm.reset();
    });
});


window.addEventListener("load", () => {
    localStorage.clear();
    atualizarAtendimento();
    atualizarListaPacientes();
});
