const str = `
010-1234-6867
zwoong6867@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The Quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?<=@).{1,}/g)
)