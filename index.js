
const btnSeach = document.querySelector('#search-btn')
const input = document.querySelector('#search')

const content = document.querySelector('.text__content')



btnSeach.onclick = () =>{
    let value = input.value.trim()

    const lengthValue = value.length
    const keyStart = content.innerText.indexOf(value)

    if(keyStart === - 1)
        return
        
    const content1 = content.innerText.slice(0,keyStart)
    const content2 = content.innerText.slice(keyStart + lengthValue)
    
    const newContent = `${content1} <span>${content.innerText.slice(keyStart, keyStart + value.length)}</span>${content2}`
    content.innerHTML = newContent
}