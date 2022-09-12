const RetornaUsuario = () => {
    return`
        <div class="secao-usuario">
            <h3 class="titulo-usuarios"><span class="subtitulo-usuarios">Usuários</span></h3>
            <button class="btn-novo-usuario">New</button>

            <section class="achar-usuario">
                <p class="nome-usuario">Nome</p>
                <input class="entrada-nome" type="text" placeholder="Informe o nome do usuário"></input>
                <button class="btn-pesquisar">Pesquisar</button>
            </section>
            <section>
                <table class="tbl-usuarios">
                    <tr class="dados-usuarios"-usuario">
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ações</th>
                    </tr>
                </table>
            </section>
        </div>
    `
};
export default RetornaUsuario;

const $teste1 = document.querySelector("#pesquisar-usuario");

$teste1.insertAdjacentHTML("beforeend", RetornaUsuario())


