const borderInput = document.querySelectorAll('.border-radius-input')
const boxPreview = document.querySelector('.prev-box')

borderInput.forEach(el => {
    el.addEventListener('change', (e) => {
        const currentInput = e.target.name
        console.log(currentInput)
    })
})