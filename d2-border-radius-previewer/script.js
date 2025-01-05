const state = {
    topLeft: { x: 0, y: 0 },
    topRight: { x: 0, y: 0 },
    bottomLeft: { x: 0, y: 0 },
    bottomRight: { x: 0, y: 0 }
}

const previewBox = document.querySelector('.preview-box')
const codeDisplay = document.querySelector('.css-code')
const inputs = document.querySelectorAll('.radius-input')
const copyBtn = document.getElementById('copyBtn')
const resetBtn = document.getElementById('resetBtn')

function getBorderRadiusValue() {
    return `${state.topLeft.x}px ${state.topRight.x}px ${state.bottomRight.x}px ${state.bottomLeft.x}px  / ${state.topLeft.y}px ${state.topRight.y}px ${state.bottomRight.y}px ${state.bottomLeft.y}px`
}

function updateDisplay {
    const borderRadiusValue = getBorderRadiusValue()
    previewBox.style.borderRadius = borderRadiusValue
    codeDisplay.textContent = `border-radius: ${borderRadiusValue}`
}

function handleInputChange(e) {
    const { corner, axis } = e.target.dataset
    const value = parseInt(e.target.value) || 0

    state[corner][axis] = value
    updateDisplay()
}