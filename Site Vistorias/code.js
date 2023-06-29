//Configura menu usuário
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.opacity === '1' && openDropdown.style.visibility === 'visible') {
            openDropdown.style.opacity = '0';
            openDropdown.style.visibility = 'hidden';
            }
        }
    }
}

//Alterar aba ativa
var menuItem = document.querySelectorAll('.item-menu')

function selector(){
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selector)
)

//Menu expandir

var expand_button = document.querySelector('#expand_button')
var menu_Side = document.querySelector('.sidebarMain')
var principal = document.querySelector('.principal')

expand_button.addEventListener('click', function(){
    menu_Side.classList.toggle('expandir')
    principal.classList.toggle('recolhe')
})
