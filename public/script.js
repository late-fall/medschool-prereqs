const thead = document.querySelector('thead')
const tbody = document.querySelector('tbody')
const showBtn = document.querySelector('#show-btn')
const showallBtn = document.querySelector('#showall-btn')
const mcattotal = document.querySelector('#mcattotal')

let years, gpa, avg, bbfl, cpbs, psbb, cars, mcat, lang, res, stats

showBtn.addEventListener('click', () =>{
    thead.innerHTML = ''
    tbody.innerHTML = ''

    years = Number(document.querySelector('#years').value)
    gpa = Number(document.querySelector('#gpa').value)
    avg = Number(document.querySelector('#avg').value)
    bbfl = Number(document.querySelector('#bbfl').value)
    cpbs = Number(document.querySelector('#cpbs').value)
    psbb = Number(document.querySelector('#psbb').value)
    cars = Number(document.querySelector('#cars').value)
    mcat = bbfl + cpbs + psbb + cars
    mcattotal.innerHTML = `MCAT Total : ${mcat}` 
    lang = document.querySelector('input[name="lang"]:checked').value
    res = document.querySelector('#residence').value
    stats = document.querySelector('input[name="status"]:checked').value 

    showSchools()
})

showallBtn.addEventListener('click', () =>{
    thead.innerHTML = ''
    tbody.innerHTML = ''

    showTablehead()
    ubcinfo(), uainfo(), ucinfo(), usinfo(), uminfo(), nosminfo(), westerninfo(), mcmasterinfo(), utinfo(), queensinfo(), ottawainfo(), mcgillinfo(), udminfo(), udsinfo(), udlinfo(), dalinfo(), muninfo()
})

function showSchools() {    
    console.log(years,gpa,avg,stats,bbfl,cpbs,psbb,cars,lang,res)
    showTablehead()
    ubc(), ua(), uc(), us(), um(), nosm(), western(), mcmaster(), ut(), queens(), ottawa(), mcgill(), udm(), uds(), udl(), dalhousise(), mun()
}

function showTablehead(){
    thead.innerHTML = ''
    thead.innerHTML += '<tr><th>Medical School</th>'
    + '<th>Years Required</th>'
    + '<th>minimum GPA</th>'
    + '<th>minimum Average(%)</th>'
    + '<th>minimum MCAT score</th>'
    + '<th>Canadian Citizen or Permanent Resident Only</th></tr>'
}

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
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://mdprogram.med.ubc.ca/admissions/" target="_blank">University of British Columbia</a></td>'
    + '<td>3</td><td></td><td>75%(BC),85%(OOP)</td><td>124 all sections</td><td>Yes</td>'
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
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.ualberta.ca/medicine/programs/md/applying-to-medicine/before-you-apply/application-requirements.html" target="_blank">University of Alberta</a></td>'
    + '<td>4</td><td>3.3(AB), 3.5(OOP)</td><td></td><td>124 all sections, CARS 128 for OOP</td><td>Yes</td>'
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
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://cumming.ucalgary.ca/mdprogram/future-students/admissions" target="_blank">University of Calgary</a></td>'
    + '<td>4</td><td>3.2(AB), 3.8(OOP)</td><td></td><td>No mimum for Albertans, CARS 128 for OOP</td><td>Yes</td>'
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
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://admissions.usask.ca/medicine.php#About" target="_blank">University of Saskatchewan</a></td>' 
    +'<td>4</td><td></td><td>75%(SK), 85%(OOP)</td><td>Total 492, only 1 section can be 122, otherwise 123 each</td><td>Yes</td>'
}

function um(){
    if (years <4 || gpa < 2.94 || stats == "no" || lang == "french"){
        return
    }
    uminfo()
}

function uminfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://umanitoba.ca/explore/programs-of-study/medicine-md" target="_blank">University of Manitoba</a></td>'
    +'<td>4</td><td>3.3 out of 4.5</td><td></td><td>No stated minimum</td><td>Yes</td>'
}

function nosm(){
    if (years <4 || gpa < 3 || stats == "no" || lang == "french"){
        return
    }
    nosminfo()
}

function nosminfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.nosm.ca/education/md-program/" target="_blank">Northern Ontario School of Medicine</a></td>'
    + '<td>4</td><td>3</td><td></td><td>Not Required</td><td>Yes</td>'
}

function western(){
    if (years < 4 || gpa < 3.7 || stats == "no" || lang == "french"){
        return
    }
    westerninfo()
}

function westerninfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.schulich.uwo.ca/med_dent_admissions/" target="_blank">Western University</a></td>'
    + '<td>4</td><td>3.7</td><td></td><td>No stated minimum</td><td>Yes</td>'
}

function mcmaster(){
    if (years < 3 || gpa < 3 || cars < 123 || lang == "french"){
        return
    }
    mcmasterinfo()
}

function mcmasterinfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://ugme.healthsci.mcmaster.ca/admissions/" target="_blank">McMaster University</a></td>'
    + '<td>4</td><td>3</td><td></td><td>CARS minimum 123</td><td>No</td>'
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
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://applymd.utoronto.ca/" target="_blank">University of Toronto</a></td>'
    + '<td>3</td><td>3.6, (3.3 for graduates)</td><td></td><td>minimum 125 all section. One 124 allowed.</td><td>No</td>'
}

function queens(){
    if (years < 3 || lang == "french"){
        return
    }
    queensinfo()
}

function queensinfo(){
    tbody.innerHTML += '<tr>'
    + `<td><a href="https://meds.queensu.ca/academics/undergraduate/admissions" target="_blank">Queen's University</a><td>3</td>`
    + '<td>No stated minimum</td><td></td><td>No stated minimum</td><td>No</td>'
}

function ottawa(){
    if (years < 3 || stats == 'no'){
        return
    }
    ottawainfo()
}

function ottawainfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.uottawa.ca/faculty-medicine/" target="_blank">University of Ottawa</a></td>'
    + '<td>3</td><td>No stated minimum</td><td></td><td>Not Required</td><td>Yes</td>'
}

function mcgill(){
    if (years < 4 || gpa < 3.5 ){
        return
    }
    mcgillinfo()
}

function mcgillinfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.mcgill.ca/medadmissions/applying/requirements" target="_blank">McGill University</a></td>'
    + '<td>4</td><td>3.5</td><td></td><td>No stated minimum</td><td>No</td>'
}

function udm(){
    if (years < 4 || lang == "english" ){
        return
    }
    udminfo()
}

function udminfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://medecine.umontreal.ca/etudes/etudes-en-medecine/doctorat-en-medecine/admission/" target="_blank">Université de Montréal</a></td>'
    + '<td>4</td><td>No stated minimum</td><td></td><td>Not Required</td><td>No</td>'
}

function uds(){
    if (years < 3 || lang == "english"){
        return
    }
    udsinfo()
}

function udsinfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.usherbrooke.ca/etudes-medecine/programmes-detudes/doctorat-en-medecine/admission" target="_blank">Université de Sherbrooke</a></td>'
    + '<td>3</td><td>No stated minimum</td><td></td><td>Not Required</td><td>No</td>'
}

function udl(){
    if (years < 3 || lang == "english" || stats == "no"){
        return
    }
    udlinfo()
}

function udlinfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.fmed.ulaval.ca/etudes/etudes-en-medecine/doctorat-de-1er-cycle-en-medecine/admission/" target="_blank">Université de Laval</a></td>'
    + '<td>4</td><td>No stated minimum</td><td></td><td>Not Required</td><td>Yes</td>'
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
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://medicine.dal.ca/departments/core-units/admissions.html" target="_blank">Dalhousie University</a></td>'
    + '<td>3</td><td>3.3 for NS,NB, 3.7 for OOP</td><td></td><td>123 all sections + <a href="https://medicine.dal.ca/departments/core-units/admissions/admissions/mcat-requirement.html" target="_blank">sliding scale</a>.</td><td>Yes</td>'
}

function mun(){
    if (years < 4 || lang == "french" || stats == "no"){
        return
    }
    muninfo()
}

function muninfo(){
    tbody.innerHTML += '<tr>'
    + '<td><a href="https://www.mun.ca/medicine/administrative-departments/admissions/undergraduate-md-program/" target="_blank">Memorial University of Newfoundland</a></td>'
    + '<td>4</td><td>No stated minimum</td><td></td><td>No stated minimum</td><td>Yes</td>'
}

