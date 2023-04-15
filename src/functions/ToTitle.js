export default function ToTitle(string) {
    let stringList = string.split(" ")
    let newString = ""

    stringList.forEach(word => {
        newString += `${ word.charAt(0).toUpperCase() }${ word.slice(1, word.lenght) } `
    })

    return newString
}