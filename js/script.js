const todayDate = document.querySelector("#today-date")
todayDate.innerText = new Date().toDateString()

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded")
})

