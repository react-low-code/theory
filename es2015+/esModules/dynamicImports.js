import('./exportDefault.js').then((result) => {
    console.log(result, result['changeCount'])
})

const url = 'https://cdn.skypack.dev/react'
import(url).then((react) => {
    console.log(react)
})