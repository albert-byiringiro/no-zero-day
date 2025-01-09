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

    const tbody = document.createElement('tbody')

    const sortedOcurrencies = Object.entries(occurences).sort((a, b) => b[1] - a[1])

    for (const [word, frequency] of sortedOcurrencies) {
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
})
// [TODO] display the words and their count occurences
// [TODO] display the words in the graph
// [TODO] load word samples from an api