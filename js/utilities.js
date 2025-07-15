function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const NewInputValue = parseFloat(inputValue)
    return NewInputValue;
}
// funtion of geting value from existing value.....
function getExistingValueFromText(text) {
    const ExistingTextValue = document.getElementById(text).innerText;
    const NewExsistingTextValue = parseFloat(ExistingTextValue);
    return NewExsistingTextValue;
}
//set money
function setTheMoney(id, money) {
    document.getElementById(id).innerText = money;
}
// history
function historyOfDonation(text, tk) {

    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear()
    let hours = d.getHours();
    let min = d.getMinutes();
    let minute = min < 10 ? '0' + min : min;
    let meridiem = hours >= 12 ? 'pm' : 'am'; // Determine AM/PM

    const time = `${hours}:${minute}${meridiem}`
    const date = `${day}/${month}/${year}`

    const div = document.createElement('div');
    div.innerHTML = `
          <div class=" xl:px-7 xl:py-5 py-3 px-5 bg-slate-100 rounded-lg mx-3 my-2">
                <div class=" lg:flex justify-between">
                <h1 class="lg:text-2xl font-bold">${text}</h1>
                <h3 class="text-xl" id="demo">
                 Time:<span class="font-semibold text-xl"> ${time} ${date}</span>
                  </h3> 
                 </div>  
                <h1 class="text-xl font-medium">The Amount is ${tk} Taka</h1>
                <h1 class="text-xl">Donated By <span class="text-xl font-medium">Syed Shawon</span></h1>
                          
            </div>
        `
    document.getElementById('history-section').appendChild(div)
}
// showing 
function showingBtn(id) {
    document.getElementById('cards-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}
function clickedBtn(id) {
    document.getElementById('btn-show-cards').classList.remove('bg-lime-300')
    document.getElementById('btn-showing-history').classList.remove('bg-lime-300')

    document.getElementById(id).classList.add('bg-lime-300')
}
