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

//Menu expandir

var expand_button = document.querySelector('#expand_button')
var menu_Side = document.querySelector('.sidebarMain')
var principal = document.querySelector('.principal')

expand_button.addEventListener('click', function(){
    menu_Side.classList.toggle('expandir')
    principal.classList.toggle('recolhe')
})

//trocar light mode para dark mode e vice versa
function trocaSwitch() {
    let html = document.documentElement
    texto = document.getElementById('botaozim').value
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
    }
    else {
        html.classList.add('dark');
    }
    if (texto == 'Darkmode'){
        document.getElementById('botaozim').innerHTML = 'Lightmode'
    }
    else{
        document.getElementById('botaozim').innerHTML = 'Darkmode'
    }
}