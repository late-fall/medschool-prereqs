const showBtn = document.querySelector('#show-btn')
const showallBtn = document.querySelector('#showall-btn')
const mcattotal = document.querySelector('#mcattotal')
const cards = document.querySelectorAll('.card')
const notesTitle = document.querySelector('#notes-title')
const notesContents = document.querySelector('#notes-contents')
const toggle = document.querySelector('#toggle')
const cardSection = document.querySelector('#cards')
const noschool = document.querySelector('#noschool')

let years, gpa, avg, mcat, lang, res, stats, bbfl ,cpbs, psbb, cars

bbfl = document.querySelector('#bbfl')
cpbs = document.querySelector('#cpbs')
psbb = document.querySelector('#psbb')
cars = document.querySelector('#cars')

bbfl.addEventListener("change", calcTotal)
cpbs.addEventListener("change", calcTotal)
psbb.addEventListener("change", calcTotal)
cars.addEventListener("change", calcTotal)

//calculate total MCAT score
function calcTotal() {
    mcattotal.classList.remove('hidden')
    mcat = Number(bbfl.value) + Number(cpbs.value) + Number(psbb.value) + Number(cars.value)
    mcattotal.innerHTML = `MCAT Total : ${mcat}` 
}

//collapsible note section
notesTitle.addEventListener("click", () => {
    notesContents.classList.toggle('hidden')
    notesTitle.classList.toggle('bg-navy3')
    notesTitle.classList.toggle('bg-navy4')
    if (notesContents.classList.contains('hidden')){
        toggle.innerHTML = "+"
    }
    else{
        toggle.innerHTML = "-"
    }
})

//show button for showing medical schools eligible to apply.
showBtn.addEventListener('click', () =>{
    cards.forEach(card => {
        card.classList.add('hidden')
    })
    if (noschool.classList.contains('hidden') == false){
        noschool.classList.add('hidden')
    }

    years = Number(document.querySelector('#years').value)
    gpa = Number(document.querySelector('#gpa').value)
    avg = Number(document.querySelector('#avg').value)
    bbfl = document.querySelector('#bbfl')
    cpbs = document.querySelector('#cpbs')
    psbb = document.querySelector('#psbb')
    cars = document.querySelector('#cars')
    calcTotal()
    lang = document.querySelector('input[name="lang"]:checked').value
    res = document.querySelector('#residence').value
    stats = document.querySelector('input[name="status"]:checked').value 

    showSchools()

    let count = 0
    cards.forEach(card => {
        if(card.classList.contains('hidden')){
            count++
        }
    })
    if (count == 17){
        noschool.classList.remove('hidden')
    }
    count = 0
})

//show all button, which shows all medical schools
showallBtn.addEventListener('click', () =>{
    if (noschool.classList.contains('hidden') == false){
        noschool.classList.add('hidden')
    }
    ubcinfo(), uainfo(), ucinfo(), usinfo(), uminfo(), nosminfo(), westerninfo(), mcmasterinfo(), utinfo(), queensinfo(), ottawainfo(), mcgillinfo(), udminfo(), udsinfo(), udlinfo(), dalinfo(), muninfo()
})

function showSchools() {    
    ubc(), ua(), uc(), us(), um(), nosm(), western(), mcmaster(), ut(), queens(), ottawa(), mcgill(), udm(), uds(), udl(), dalhousise(), mun()
}

// Individual Medical School's admission condition + information

function ubc(){
    if (res=='bc'){
        if (years < 3 || avg < 75 || stats == "no" || bbfl < 124 || cpbs < 124 || psbb < 124 || cars < 124 || lang == 'french'){
            return
        }
    }
    else {
        if (years < 3 || avg < 85 || stats == "no" || bbfl < 124 || cpbs < 124 || psbb < 124 || cars < 124 || lang == 'french'){
            return
        }
    }
    return ubcinfo()
}

function ubcinfo(){
    let ubc = document.querySelector('#ubc')
    ubc.classList.add('hidden')
    ubc.classList.remove('hidden')
}

function ua(){
    if (years < 4 || gpa < 3.3 || stats == "no" || bbfl <124 || cpbs <124 || psbb <124 || cars < 124 || lang == "french"){
        return
    }
    if (res != 'ab'){
        if (cars < 128 || gpa < 3.5){
            return
        }
    }
    return uainfo()
}

function uainfo(){
    let ua = document.querySelector('#ua')
    ua.classList.add('hidden')
    ua.classList.remove('hidden')
}

function uc(){
    if (years < 2 || gpa < 3.2 || stats == "no" || lang == "french"){
        return
    }
    if (res != 'ab'){
        if (cars < 128 || gpa < 3.8){
            return
        }
    }
    return ucinfo()
}

function ucinfo(){
    let uc = document.querySelector('#uc')
    uc.classList.add('hidden')
    uc.classList.remove('hidden')
}

function us(){
    if (years <4 || avg < 75 || mcat < 492 || stats == "no" || lang == "french"){
        return
    }
    if (bbfl < 122 || cpbs < 122 || psbb < 122 || cars < 122){
        return
    }
    if ([bbfl,cpbs,psbb,cars].filter( x => x == 122).length > 1) {
        return
    };
    if (res != 'sk'){
        if (avg < 85){
            return
        }
    }
    usinfo()
}

function usinfo(){
    let us = document.querySelector('#us')
    us.classList.add('hidden')
    us.classList.remove('hidden')
}

function um(){
    if (years <4 || gpa < 2.94 || stats == "no" || lang == "french"){
        return
    }
    uminfo()
}

function uminfo(){
    let um = document.querySelector('#um')
    um.classList.add('hidden')
    um.classList.remove('hidden')
}

function nosm(){
    if (years <4 || gpa < 3 || stats == "no" || lang == "french"){
        return
    }
    nosminfo()
}

function nosminfo(){
    let nosm = document.querySelector('#nosm')
    nosm.classList.add('hidden')
    nosm.classList.remove('hidden')
}

function western(){
    if (years < 4 || gpa < 3.7 || stats == "no" || lang == "french"){
        return
    }
    westerninfo()
}

function westerninfo(){
    let western = document.querySelector('#western')
    western.classList.add('hidden')
    western.classList.remove('hidden')
}

function mcmaster(){
    if (years < 3 || gpa < 3 || cars < 123 || lang == "french"){
        return
    }
    mcmasterinfo()
}

function mcmasterinfo(){
    let mcmaster = document.querySelector('#mcmaster')
    mcmaster.classList.add('hidden')
    mcmaster.classList.remove('hidden')
}

function ut(){
    if (years < 3 || gpa < 3.6 || lang == "french"){
        return
    }
    if ([bbfl,cpbs,psbb,cars].filter( x => x <= 124).length > 1) {
        return
    }
    utinfo()
}

function utinfo(){
    let ut = document.querySelector('#ut')
    ut.classList.add('hidden')
    ut.classList.remove('hidden')
}

function queens(){
    if (years < 3 || lang == "french"){
        return
    }
    queensinfo()
}

function queensinfo(){
    let queens = document.querySelector('#queens')
    queens.classList.add('hidden')
    queens.classList.remove('hidden')
}

function ottawa(){
    if (years < 3 || stats == 'no'){
        return
    }
    ottawainfo()
}

function ottawainfo(){
    let ottawa = document.querySelector('#ottawa')
    ottawa.classList.add('hidden')
    ottawa.classList.remove('hidden')
}

function mcgill(){
    if (years < 4 || gpa < 3.5 ){
        return
    }
    mcgillinfo()
}

function mcgillinfo(){
    let mcgill = document.querySelector('#mcgill')
    mcgill.classList.add('hidden')
    mcgill.classList.remove('hidden')
}

function udm(){
    if (years < 4 || lang == "english" ){
        return
    }
    udminfo()
}

function udminfo(){
    let udm = document.querySelector('#udm')
    udm.classList.add('hidden')
    udm.classList.remove('hidden')
}

function uds(){
    if (years < 3 || lang == "english"){
        return
    }
    udsinfo()
}

function udsinfo(){
    let uds = document.querySelector('#uds')
    uds.classList.add('hidden')
    uds.classList.remove('hidden')
}

function udl(){
    if (years < 3 || lang == "english" || stats == "no"){
        return
    }
    udlinfo()
}

function udlinfo(){
    let udl = document.querySelector('#udl')
    udl.classList.add('hidden')
    udl.classList.remove('hidden')
}

function dalhousise(){
    if (years < 3 || gpa < 3.3 || lang == "french" || stats == "no" || bbfl < 123 || psbb < 123 || cpbs < 123 || cars < 123){
        return
    }
    if (res == 'ns' || res == 'nb'){
        if (gpa * 10 + mcat < 532){
            return
        }    
    }
    else {
        if (gpa < 3.7 || (gpa * 10 + mcat) < 540){
            return
        }
    }
    dalinfo()
}

function dalinfo(){
    let dalhousise = document.querySelector('#dal')
    dalhousise.classList.add('hidden')
    dalhousise.classList.remove('hidden')
}

function mun(){
    if (years < 4 || lang == "french" || stats == "no"){
        return
    }
    muninfo()
}

function muninfo(){
    let mun = document.querySelector('#mun')
    mun.classList.add('hidden')
    mun.classList.remove('hidden')
}

//disable right click
window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
  }, false);