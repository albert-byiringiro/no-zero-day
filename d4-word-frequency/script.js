const wordspace = document.getElementById('wordspace')
const countBtn = document.querySelector('.btn-primary')

// [TODO] get the words inserted in the text area
countBtn.addEventListener('click', () => {
    const words = wordspace.value
    const wordsArr = words.toLowerCase().split(/[\s]/g).filter(word => word !== "")

    console.log(wordsArr)

    let occurences = {};
    for (let i = 0; i < wordsArr.length; i++) {
        if (occurences[wordsArr[i]]) {
            occurences[wordsArr[i]]++;
        } else {
            occurences[wordsArr[i]] = 1;
        }
    }

    console.log(occurences)
})
// [TODO] get the occurences of each word
// [TODO] display the words and their count occurences
// [TODO] display the words in the graph
// [TODO] load word samples from an api