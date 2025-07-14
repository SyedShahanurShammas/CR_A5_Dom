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

function historyOfDonation(text, tk) {
    const d = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
          <div class="py-5 px-12 bg-slate-100 rounded-lg sm:mx-3 my-4">
                <h1 class="text-2xl font-bold">${text}</h1>
                <h1 class="text-xl">The Amount is ${tk} Taka</h1>
                <h1 class="text-xl">Donation By <span class="text-xl font-medium">Syed Shawon</span></h1>
                 <h3 class="text-xl" id="demo">Time:${d} </h3>           
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