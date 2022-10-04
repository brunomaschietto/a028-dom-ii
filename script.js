function adicionaItem(event) {
    const itemContainer = document.getElementById('container')
    const criandoItem = document.createElement('article')
    itemContainer.appendChild(criandoItem)
    criandoItem.classList.add('item')
    criandoItem.addEventListener('click', (event) => removeItem(event))
}

function removeItem(event) {
    event.target.classList.remove('item')
}

