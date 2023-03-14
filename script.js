const cs1= document.querySelector('.cs')
fetch('css.html').then(res=>res.text()).then(data=>{
    cs1.innerHTML=data;
})


const JavaScript= document.querySelector('.js')
fetch('JavaScript.html').then(res=>res.text()).then(data=>{
    JavaScript.innerHTML=data;
})

const jQuery= document.querySelector('.jq')
fetch('jQuery.html').then(res=>res.text()).then(data=>{
    jQuery.innerHTML=data;
})


const React= document.querySelector('.rt')
fetch('React.html').then(res=>res.text()).then(data=>{
    React.innerHTML=data;
})

const Nav= document.querySelector('.navBar')
fetch('nav.html').then(res=>res.text()).then(data=>{
    Nav.innerHTML=data;
})