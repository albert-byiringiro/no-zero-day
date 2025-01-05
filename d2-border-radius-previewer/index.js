const borderInput = document.querySelectorAll('.border-radius-input')
const boxPreview = document.querySelector('.prev-box')

borderInput.forEach(el => {
    el.addEventListener('change', (e) => {
        const currentInput = e.target.name
        const currentValue = e.target.value
        if (currentInput === "border-radius-input-top-left") {
            boxPreview.style.borderTopLeftRadius = `${currentValue}px`
        } else if (currentInput === "border-radius-input-top-right") {
            boxPreview.style.borderTopRightRadius = `${currentValue}px`
        } else if (currentInput === "border-radius-input-bottom-right") {
            boxPreview.style.borderBottomRightRadius = `${currentValue}px`
        } else if (currentInput === "border-radius-input-bottom-left") {
            boxPreview.style.borderBottomLeftRadius = `${currentValue}px`
        }
    })
})