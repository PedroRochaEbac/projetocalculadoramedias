    const form = document.getElementById('form-atividade');
    const imgAprovado = '<img src="./images/aprovado.png" alt="Emojisim" />';
    const imgReprovado= '<img src="./images/reprovado.png" alt="Emojinao" />';
    const atividades = [];
    const notas = [];
    const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
    const spanreprovado = '<span class="resultado reprovado">Reprovado</span>';
    const notaminima = parseFloat(prompt("Digite a nota minima:"));

    let linhas = '';

    form.addEventListener('submit', function (e) {
    e.preventDefault();


    
      
    adicionaLinha();
    atualizaTabela();
    atualizamedia();
    
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);

    } else{    

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaminima  ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
}
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas ;
}

function atualizamedia() {
    const mediafinal = calculamediafinal();

    document.getElementById('mediafinalvalor').innerHTML = mediafinal;
    document.getElementById('mediafinalresultado').innerHTML = mediafinal >= notaminima ? spanAprovado : spanreprovado;

   
}

function calculamediafinal(){
    let somadasnotas = 0;
    
    for (let i = 0; i < notas.length; i++){
        somadasnotas += notas[i];
    }

    return somadasnotas / notas.length;
    
    
}



