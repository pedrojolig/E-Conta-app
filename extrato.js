const cabecalhoDoExtrato = `
<thead>
<tr>
<th>Data da Movimentação</th>
<th>Tipo da Movimentação</th>
<th>Valor</th>
</tr>
</thead>
`;

function carregarDados() {
    let dadosDoExtrato = "";
    for (let i = 0; i < cliente.movimentacoes.length; i++) {
        dadosDoExtrato += `
        <tr>
<td>${cliente.movimentacoes[i].data}</td>
<td>${cliente.movimentacoes[i].tipo}</td>
<td>${cliente.movimentacoes[i].valor}</td>
        </tr>
                `;
    }
    return dadosDoExtrato;
}

function carregarExtrato(cliente) {
    let extrato = `
    <header>
<h1>Últimos Lansamentos</h1>
    </header>
    <table>
${cabecalhoDoExtrato}
<tbody>
${carregarDados(cliente)}
</tbody>
</table>
        `;
    document.getElementById("conteudo").innerHTML = extrato;
}