/*===== SISTEMA DE CADASTRO DE ABRIGOS =====*/
function menu() {
  let opcao = Number(
    prompt(`
      ===== SISTEMA DE CADASTRO DE ABRIGOS =====
      1. Cadastrar abrigo
      2. Listar abrigos
      3. Procurar abrigo
      4. Sair
      Escolha uma opção:`)
  );

  switch (opcao) {
    case 1:
      cadastrarAbrigo();
      break;
    case 2:
      listarAbrigos();
      break;
    case 3:
      procurarAbrigo();
      break;
    case 4:
      // Sair
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      menu();
  }
}

const arrayAbrigos = [];

function cadastrarAbrigo() {
  nome = prompt("Qual é o nome do abrigo?");
  endereco = prompt("Qual é o endereço?");
  telefone = prompt("Qual é o telefone?");
  capacidade = prompt("Qual é a capacidade?");
  cidade = prompt("Qual é a cidade?");

  const abrigo = {
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    capacidade: capacidade,
    cidade: cidade,
  };

  arrayAbrigos.push(abrigo);
  menu();
}

function listarAbrigos() {
  if (arrayAbrigos.length === 0) {
    alert("Nenhum abrigo cadastrado.");
    menu();
  } else {
    const listarAbrigos = [];
    for (const abrigo of arrayAbrigos) {
      const { nome, endereco, telefone, capacidade, cidade } = abrigo;
      const codigo = arrayAbrigos.indexOf(abrigo) + 1;
      listarAbrigos.push(
        `${codigo.toString().padStart(3, "0").padEnd(7)}| ${nome.padEnd(
          18
        )}| ${endereco.toString().padEnd(9)}| ${telefone.padEnd(
          8
        )}| ${capacidade.padEnd(8)}| ${cidade}`
      );
    }

    let lista = `
----------------------
LISTAGEM DE ABRIGOS:
----------------------
CÓDIGO | NOME             | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE`;

    for (let abrigo of listarAbrigos) {
      lista += `\n${abrigo}`;
    }
    const retornarAbrigos = prompt(
      `
          ${lista}
  
      Digite qualquer tecla para continuar:`
    );
    if (retornarAbrigos !== null) {
      menu();
    }
  }
}

function procurarAbrigo() {
  const cidade = prompt("Qual cidade você está?");

  const abrigosDisponiveis = [];
  for (i = 0; i < arrayAbrigos.length; i++) {
    if (arrayAbrigos[i].cidade === cidade) {
      const codigo = i + 1;
      abrigosDisponiveis.push(
        `${codigo.toString().padStart(3, "0").padEnd(8)}| ${arrayAbrigos[
          i
        ].nome.padEnd(18)}| ${arrayAbrigos[i].endereco.padEnd(
          9
        )}| ${arrayAbrigos[i].telefone.padEnd(8)}| ${
          arrayAbrigos[i].capacidade
        }`
      );
    }
  }
  if (abrigosDisponiveis.length > 0) {
    let lista = `
----------------------
LISTAGEM DE ABRIGOS
----------------------
CÓDIGO | NOME             | ENDEREÇO | TELEFONE | CAPACIDADE
`;

    for (let abrigo of abrigosDisponiveis) {
      lista += `\n${abrigo}`;
    }
    const retornarAbrigos = prompt(`
      ${lista}
  
      Digite qualquer tecla para continuar:`);
    if (retornarAbrigos !== null) {
      menu();
    }
  } else {
    alert("Nenhum abrigo cadastrado.");
    menu();
  }
}

menu();
