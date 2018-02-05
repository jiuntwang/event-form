function formChange() {
    
    const array = [...document.querySelectorAll('input[type="checkbox"]')]
    
    array.forEach(function (checkBox) {
        const text = document.querySelector(`#${checkBox.value}`)
        const subList = document.querySelector(`.${checkBox.value}`)
        
        if (text) {
            if (checkBox.checked == true){
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }  

        }

        if (subList) {
            if (checkBox.checked == true){
                subList.style.display = "block";
            } else {
                subList.style.display = "none";
            }  
        }
 
    })
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
})

document.querySelector('form').addEventListener('change', function (event)  {
    event.preventDefault()
    formChange()
})