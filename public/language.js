//script for switching languages between English and Korean

const english = document.querySelector('#lang-eng')
const korean = document.querySelector('#lang-kor')

const title = document.querySelector('h1')
const yearsCompleted = document.querySelector('label[for="years"]')
const infoYears = document.querySelector('#info-years')
const infogpa = document.querySelector('#infogpa')
const average = document.querySelector('label[for="average"]')
const infoavg = document.querySelector('#infoavg')
const spokenlang = document.querySelector('#spokenlang')
const resSelect = document.querySelector('option[selected="selected"]')
const cdnStatus = document.querySelector('#cdnStatus')
const ansYes = document.querySelector('label[for="yes"]')
const ansNo = document.querySelector('label[for="no"]')
const noteTitle = document.querySelector('#note-title')
const noteP1 = document.querySelector('#notes-contents p:nth-child(1)')
const noteP2 = document.querySelector('#notes-contents p:nth-child(2)')
const noteP3 = document.querySelector('#notes-contents p:nth-child(3)')
const noteP4 = document.querySelector('#notes-contents p:nth-child(4)')
const noteP5 = document.querySelector('#notes-contents p:nth-child(5)')
const noteP6 = document.querySelector('#notes-contents p:nth-child(6)')
const showBtn = document.querySelector('#show-btn')
const showallBtn = document.querySelector('#showall-btn')
const noschool = document.querySelector('#noschool >p')
const body = document.querySelector('body')

korean.addEventListener('change', langKor)
english.addEventListener('change', langEng)

function langKor() {
    title.innerHTML = '캐나다 의대 지원자격 알아보기'
    yearsCompleted.innerHTML = '최종 학년'
    infoYears.setAttribute("title", "의대 입학하기전에 대학교 몇학년까지 마칠 예정입니까?")
    infogpa.setAttribute("title", "본인 GPA를 모른다면 아래 참조 섹션에 링크된 다른 포스트에 계산법이 있습니다.")
    average.innerHTML = "평균 %"
    infoavg.setAttribute("title", "유비씨의대와 사스카치완 의대는 GPA 대신 % 평균으로 계산합니다.")
    mcattotal.setAttribute("title", "MCAT 스코어를 적어주시면 자동으로 계산됩니다.")
    spokenlang.innerHTML = "언어 :"
    resSelect.innerHTML = "의대 지원 당시 거주지"
    cdnStatus.innerHTML = "캐나다 시민권자 또는 영주권자입니까?"
    ansYes.innerHTML = "네"
    ansNo.innerHTML = "아니오"
    noteTitle.innerHTML = "참조"
    noteP1.innerHTML = "◽ 필요 학년이 4년인 경우에는 의대 입학전 학부과정 졸업장이 필요합니다. 보통 학부과정이 4년이므로 4년 학부과정을 다녔으면 졸업장은 필수입니다."
    noteP2.innerHTML = "◽ 여기에 나온 것은 최소 요구사항이며 실제 입학자들의 평균은 더 높습니다."
    noteP3.innerHTML = "◽ 수치로 환산할 수 없어 포함되지 않은 각종 봉사활동, 연구경험, 동아리 활동, 그리고 파트타임 직업등도 중요합니다."
    noteP4.innerHTML = "◽ 의대 요구사항은 달라질 수도 있으므로 링크된 공식 웹사이트를 참조하시기 바랍니다."
    noteP5.innerHTML = '◽ GPA 계산은 <a class="underline hover:text-navy1" href="https://torontomd.tistory.com/104" target="_blank">이 포스트</a>를 참조해주세요.'
    noteP6.innerHTML = "최종 업데이트 날짜 : 2023년 5월"
    showBtn.innerHTML = "내가 지원 할 수 있는 의대는?"
    showallBtn.innerHTML = "모든의대 보기"
    noschool.innerHTML = "지원 가능한 의대가 없습니다."
}

function langEng() {
    title.innerHTML = 'Which Canadian medical schools can I apply?'
    yearsCompleted.innerHTML = 'Undergraduate Years'
    infoYears.setAttribute("title", "Number of undergraduate years to be completed before admission to medical schools.")
    infogpa.setAttribute("title", "Refer to GPA calculator link in Notes if not sure.")
    average.innerHTML = "Average"
    infoavg.setAttribute("title", "University of British Columbia and University of Saskatchewan uses % grade.")
    mcattotal.setAttribute("title", "Please fill above MCAT scores and submit")
    spokenlang.innerHTML = "Languages Spoken:"
    resSelect.innerHTML = "Select your place of residence"
    cdnStatus.innerHTML = "Canadian citizen or permanent resident?"
    ansYes.innerHTML = "Yes"
    ansNo.innerHTML = "No"
    noteTitle.innerHTML = "Notes"
    noteP1.innerHTML = "◽ When years required are 4 years, you need a bachelor's degree before admission to medical schools."
    noteP2.innerHTML = "◽ This tool is based on officially stated minimum requirements from each medical schools website. Average of matriculants are higher."
    noteP3.innerHTML = "◽ Non-academic qualities and experiences are also very important but not included here as unable to quantify."
    noteP4.innerHTML = "◽ Requirements may change. Please check the official website by clicking each school name."
    noteP5.innerHTML = '◽ Please refer to <a class="underline hover:text-navy1 href="https://www.ouac.on.ca/guide/omsas-conversion-table/" target="_blank">this post</a> if you are unsure how to calculate GPA.'
    noteP6.innerHTML = "Last updated May 2023"
    showBtn.innerHTML = "Show schools I can apply to"
    showallBtn.innerHTML = "All schools"
    noschool.innerHTML = "There are no eligible medical schools to which you can apply."
}