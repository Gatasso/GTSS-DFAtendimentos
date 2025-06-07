# GTSS-DFAtendimentos

# Sistema de Atendimento Médico

Sistema web simples para gerenciamento de pacientes em atendimento, desenvolvido com HTML, CSS, JavaScript e Bootstrap.

---

## Descrição

Este projeto é uma aplicação frontend para controle de uma fila de atendimento médico, onde pacientes podem ser adicionados com nome e foto. Permite adicionar pacientes normalmente ou com prioridade (emergência), listar pacientes na fila, atender pacientes e excluir pacientes da fila.

---

## Funcionalidades

- Adicionar paciente com nome e imagem.
- Adicionar paciente com prioridade (emergência).
- Listar pacientes na fila com suas posições.
- Atender paciente (mover para área de atendimento).
- Finalizar atendimento do paciente atual.
- Excluir paciente da fila.
- Visualização da imagem do paciente em atendimento e na lista.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5

---

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/sistema-atendimento-medico.git
   ```
2. Abra o arquivo `index.html` no seu navegador.

3. Utilize o formulário para adicionar pacientes, com nome e foto.

4. Use o botão **"Adicionar"** para inserir paciente na fila normalmente.

5. Use o botão **"Emergência"** para inserir paciente com prioridade na fila.

6. Clique em **"Atender"** para iniciar o atendimento do paciente no topo da fila.

7. Clique em **"Finalizar"** para liberar o atendimento atual.

8. Use **"Excluir"** para remover um paciente da fila.

---

## Estrutura do projeto

```
/css
  └── style.css        # Arquivos de estilo
/js
  └── js.js            # Script JavaScript com lógica da aplicação
index.html             # Página principal do sistema
README.md              # Este arquivo de documentação
```

---

## Próximas melhorias

- Salvar os dados da fila e atendimento no armazenamento local (localStorage).
- Implementar backend para persistência dos dados.
- Adicionar autenticação de usuários.
- Tornar o sistema responsivo para dispositivos móveis.
- Melhorar acessibilidade.

---

