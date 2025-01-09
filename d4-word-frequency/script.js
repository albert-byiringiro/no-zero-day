const wordspace = document.getElementById('wordspace')
const countBtn = document.querySelector('.btn-primary')
const statsTable = document.querySelector('.word-stats-table')

// helper functions

const generateTable = (occurences) => {
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

    const tbody = document.createElement('tbody')

    for (const [word, frequency] of occurences) {
        const row = document.createElement('tr')

        const tdWord = document.createElement('th')
        tdWord.scope = "row"
        tdWord.textContent = word

        const tdFrequency = document.createElement('td')
        tdFrequency.textContent = frequency

        row.appendChild(tdWord)
        row.appendChild(tdFrequency)

        tbody.appendChild(row)
    }

    fragment.appendChild(thead)
    fragment.appendChild(tbody)

    statsTable.appendChild(fragment)
}

const countWords = () => {
    const words = wordspace.value
    const wordsArr = words.toLowerCase().split(/[\s]/g).filter(word => word !== "")
    wordspace.value = ""

    let occurences = {};
    for (let i = 0; i < wordsArr.length; i++) {
        if (occurences[wordsArr[i]]) {
            occurences[wordsArr[i]]++;
        } else {
            occurences[wordsArr[i]] = 1;
        }
    }

    const sortedOcurrencies = Object.entries(occurences).sort((a, b) => b[1] - a[1])

    generateTable(sortedOcurrencies)
}

countBtn.addEventListener('click', countWords)

// [TODO] display the words in the graph
// [TODO] load word samples from an api