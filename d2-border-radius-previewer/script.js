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