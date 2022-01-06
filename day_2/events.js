window.onload = function(){
    const p      = document.querySelector('p')
    const button = document.querySelector('button')

    const changeText = () => {
        p.textContent = 'Will I change?'
    }
    
    const alertText = () => {
        console.log('Will I log?')
    }
    button.onclick = changeText
    button.onclick = alertText

    button.addEventListener('click', changeText);
    button.addEventListener('click', alertText);

   
}
