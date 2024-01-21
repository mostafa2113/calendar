const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
const currentDate = new Date()
let currentYear = currentDate.getFullYear()
let  currentMonth = currentDate.getMonth()
const todayDateEl = document.querySelector("#today-date")
todayDateEl.innerText = currentDate.toDateString()

const date = document.querySelector("#date")

const dropdownBox = document.querySelector("#dropdown-box")

const dropdownBtn = document.querySelector("#dropdown-btn")
dropdownBtn.addEventListener("click",()=>{
    if (dropdownBox.style.display === "none"){
        dropdownBox.style.display="block";
    }else{
        dropdownBox.style.display="none";
    }
})

const weekDays = document.querySelector("#week-days")
const days = document.querySelector("#days")

const firstDayOfMonth = new Date(currentYear, currentMonth,1)
const lastDayOfMonth = new Date(currentYear, currentMonth+1,0)
function renderCalendar(firstDayOfMonth,lastDayOfMonth) {
    date.innerText = `${month[currentMonth]} ${currentYear}`
    let weekEl =""
    for (let i = firstDayOfMonth,j= 1; j <= 7;
         i=new Date(firstDayOfMonth.getFullYear(),firstDayOfMonth.getMonth(),firstDayOfMonth.getDay()+j++)) {
    weekEl +=`<li>${i.toDateString().slice(0,3)}</li>`
    }
    weekDays.innerHTML =weekEl
    let dayEl = ""
    for (let i = firstDayOfMonth,j=0; i < lastDayOfMonth;
         i=new Date(firstDayOfMonth.getFullYear(),firstDayOfMonth.getMonth(),firstDayOfMonth.getDay()+j++)) {
        if (i.toDateString()===currentDate.toDateString()){
            dayEl += (`<li class="active">${i.getDate()}</li>`)
        }
        else{
            dayEl+=(`<li>${i.getDate()}</li>`)

        }
    }
    days.innerHTML=dayEl
}
renderCalendar(firstDayOfMonth,lastDayOfMonth)


function  prev(){
    currentMonth--; // Decrement the currentMonth
    if (currentMonth < 0) {
        currentMonth = 11; // Set to December if currentMonth goes below 0
        currentYear--; // Decrement the currentYear
    }

    const newFirstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const newLastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    renderCalendar(newFirstDayOfMonth, newLastDayOfMonth);
}
function next(){
    currentMonth++; // Increment the currentMonth
    if (currentMonth > 11) {
        currentMonth = 0; // Set to January if currentMonth goes above 11
        currentYear++; // Increment the currentYear
    }

    const newFirstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const newLastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    renderCalendar(newFirstDayOfMonth, newLastDayOfMonth);
}