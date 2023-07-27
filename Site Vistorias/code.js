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
var tabela = document.querySelector('.all_tables')
var db = openDatabase('MeuBanco', '2.0', 'MyBase', '4048');

expand_button.addEventListener('click', function(){
    menu_Side.classList.toggle('expandir');
    principal.classList.toggle('recolhe');
    tabela.classList.toggle('diminui');
})

//trocar light mode para dark mode e vice versa
function trocaSwitch() {
    let html = document.documentElement
    let botao = document.getElementById('botaozim')

    texto = document.getElementById('botaozim').textContent
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
    botao.classList.remove('vislumbre')
    setTimeout(mantemFundo, 2000)
}

function mantemFundo(){
    let botao = document.getElementById('botaozim')
    botao.classList.add('vislumbre')
}