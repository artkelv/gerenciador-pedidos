const MenuLateral = () => {
    return`
    <nav class="menu-nav">
        <ul class="list">
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="home" class="icon"></ion-icon>
                    <span>Inicio</span>
                </a>
            </li>
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="call" class="icon"></ion-icon>
                    <span>Atendimento</span>
                </a>
            </li>
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="list-box" class="icon"></ion-icon>
                    <span>Chamados</span>
                </a>
            </li>
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="contacts" class="icon"></ion-icon>
                    <span>Clientes</span>
                </a>
                
            </li>
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="tv" class="icon"></ion-icon>
                    <span>Softwares</span>
                </a>
            </li>
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="contact" class="icon"></ion-icon>
                    <span>Usúarios</span>
                </a>
            </li>
            <li class="item">
                <a href="" class="ancor">
                    <ion-icon name="bookmarks" class="icon"></ion-icon>
                    <span>Relatórios</span>
                </a>
            </li>
        </ul>
        <ul>
            <li class="bottom">
                <a href="" class="over">
                    <ion-icon name="power" class="icon"></ion-icon>
                    <span>Sair</span>
                </a>
            </li>
        </ul>
    </nav>
    `
}
export default MenuLateral;

const $menu = document.querySelector("#menu");

$menu.insertAdjacentHTML("beforeend", MenuLateral()) 