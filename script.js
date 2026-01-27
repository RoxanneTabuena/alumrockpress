// text connect
console.log("yo mama codes");

// contact toggle
const email = document.getElementById('email');
const contact = document.getElementById('contact');
if(email){
    email.style.display = 'none'
}
const togEmail = () => {

    const emailVisible = email.style.display !== 'none';

    email.style.display = emailVisible ? 'none' : 'block';
    contact.style.display = emailVisible ? 'block' : 'none';
};

// mobile menu toggle

const index = document.getElementById('index')
const gal = document.getElementById('gal')
const arrow = document.getElementById('menuTog')

let open = false

const togMenu = () => {
    if(!open){
        open = true
        arrow.classList.add('rotDown')
        gal.classList.add('dim')
        index.classList.add('slide')
    }else{
        open = false
        arrow.classList.remove('rotDown')
        gal. classList.remove('dim')
        index.classList.remove('slide')

    }
}
// mobile item jumping

const items = Array.from(document.querySelectorAll('.item'))

items.forEach((item)=>{
    item.addEventListener('click', togMenu)
})

// info wrapping

const li = Array.from(document.querySelectorAll('li'))
const smalls = li.filter((i)=>i.innerText.length < 15)
smalls.forEach((s)=>{
    s.classList.add('small')
})

// index highlight
let cur

const highlight = (key) => {
    const item = items.find((i)=>{
        let val = String(i.lastElementChild.href)
        val = val.substring(val.length-String(key).length)
        return String(key) === val
    })
    cur = item
    item.classList.add('highlight')
}

const unhighlight = () => {
    cur.classList.remove('highlight')
}
