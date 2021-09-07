let myLibrary = []
let bookCounter = 0
const tbody = document.querySelector('tbody')

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title,author,pages,read){
    let book = new Book(title,author,pages,read)
    myLibrary.push(book)
    bookCounter += 1
    createDOMElements(title,author,pages,read)
}


function createDOMElements(title,author,pages,read){
    let td1 = document.createElement('td')  
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')  
    let td4 = document.createElement('td')
    let remove = document.createElement('button')
    remove.classList.add(`data-id=${bookCounter}`)
    let status = document.createElement('button')
    td1.textContent = title
    td2.textContent = author
    td3.textContent = pages
    td4.textContent = read
    remove.textContent = "Remove"
    status.textContent = "Read"
    let tr = document.createElement('tr')
    tr.classList.add(`data-id=${bookCounter}`)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(status)
    tr.appendChild(remove)
    tbody.appendChild(tr)
}


function update(){
    let children = Array.from(tbody.childNodes)
    return children
}

const form = document.querySelector('#form')
const bTitle = document.querySelector('.title')
const bAuthor = document.querySelector('.author')
const bPages = document.querySelector('.pages')
const bRead = document.querySelector('.read')
const submit = document.querySelector('.submit')
submit.addEventListener('click', (e) => {
    addBookToLibrary(bTitle.value,bAuthor.value,bPages.value,bRead.checked)
    update()
        for (let i = 1; i < update().length; i++){
        update()[i].childNodes[5].addEventListener('click', (e) => {
        if (update()[i].className == e.target.className){
                tbody.removeChild(update()[i])
                myLibrary.splice(i-1,1)
                bookCounter -= 1
            }
        })
    }
    
    
    for (let i = 1; i < update().length; i++){
        update()[i].childNodes[4].addEventListener('click', (e) => {
            if (update()[i].childNodes[3].textContent == "true"){
                update()[i].childNodes[3].textContent = false
            } else {
                update()[i].childNodes[3].textContent = true
            }
            
        })
    }
    form.classList.remove('form')
    form.classList.add('hidden')
})

const addRow = document.querySelector('.new')

addRow.addEventListener('click', () => {
    form.classList.remove('hidden')
    form.classList.add('form')
})