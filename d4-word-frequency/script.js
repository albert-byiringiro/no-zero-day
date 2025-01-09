const wordspace = document.getElementById('wordspace')
const countBtn = document.querySelector('.btn-primary')
const statsTable = document.querySelector('.word-stats-table')

// [TODO] get the words inserted in the text area
countBtn.addEventListener('click', () => {
    const words = wordspace.value
    const wordsArr = words.toLowerCase().split(/[\s]/g).filter(word => word !== "")

    // [TODO] get the occurences of each word
    let occurences = {};
    for (let i = 0; i < wordsArr.length; i++) {
        if (occurences[wordsArr[i]]) {
            occurences[wordsArr[i]]++;
        } else {
            occurences[wordsArr[i]] = 1;
        }
    }

    console.log(occurences)

    const fragment = document.createDocumentFragment()

    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')

    const headers = ["Words", "Frequency"]
    headers.forEach(headerText => {
        const th = document.createElement('th')
        th.scope = "col"
        th.textContent = headerText
        headerRow.appendChild(th)
    })

    thead.appendChild(headerRow)

    // for (const [key, value] of Object.entries(occurences)) {
    //     const li = document.createElement('li')
    //     li.textContent = `${key} - ${value}`
    //     fragment.appendChild(li)
    // }

    statsTable.appendChild(thead)
})
// [TODO] display the words and their count occurences
// [TODO] display the words in the graph
// [TODO] load word samples from an api