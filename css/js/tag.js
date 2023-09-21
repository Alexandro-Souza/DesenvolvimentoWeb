document.querySelector('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()
    
    box.style.borderColor = '#616161'

    
    
    
    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})