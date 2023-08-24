function findLongestWordLength(str) {
    let counter = 0
    let maxWord = 0
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] != " ")
            counter++
        else {
            if (counter >= maxWord) 
                maxWord = counter
            counter = 0
        }
        console.log(counter, maxWord)
    }
    if (counter > maxWord)
        return counter
    return maxWord
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");