document.getElementById('btn-nowakhali-donate').addEventListener('click', (event) => {
    console.log('clicked')
    event.preventDefault();
    const taka = getInputValueByid('input-nowakhali-donation');
    console.log(taka)


})