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

if(items.length){
    items.forEach((item)=>{
        item.addEventListener('click', togMenu)
    })
}
    
    
    // index highlight
    let cur
    
    const highlight = (key) => {
        const item = items.find((i)=>{
            let val = String(i.lastElementChild.href).split("pic")[1]
            return String(key) === val
        })
        cur = item
        item.classList.add('highlight')
    }
    
    const unhighlight = (key) => {
        cur.classList.remove('highlight')
    }

// set CSS variables

// get relevant elements
const header = document.querySelector('header');
const root = document.documentElement;
const date = document.querySelector('.date')

function updateLayoutDimensions() {
    // log element sizes
    const headerHeight = header ? header.offsetHeight : 0;
    const indexWidth = index ? index.offsetWidth : 0;
    const dateWidth = date ? Math.ceil(date.offsetWidth) : null;

    // update sizes on style sheet
    root.style.setProperty('--header-height', `${headerHeight}px`);
    root.style.setProperty('--index-width', `${indexWidth}px`);
    if (dateWidth !== null) {
        root.style.setProperty('--date-width', `${dateWidth}px`);
    }
}

// Run on load and window resize
window.addEventListener('resize', updateLayoutDimensions);
updateLayoutDimensions();