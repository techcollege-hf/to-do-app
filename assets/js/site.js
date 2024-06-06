// write cool JS hwere!!

let todoLists = []

let activeTodoList = {
    name: "børn der skal hentes",
    items: ['hent tobias', 'hent tomas']
}

// statics
let todoListItems = document.getElementById('mainList')
let listNameElement = document.getElementById('activeListName')

// buttons
let newListButton = document.getElementById('newListButton')
newListButton.addEventListener('click', newList)

let deleteListButton = document.getElementById('deleteListButton')
deleteListButton.addEventListener('click', deleteList)

let showListButton = document.getElementById('showListButton')
showListButton.addEventListener('click', showListMenu)


initApp()

function initApp() {
    // skift ud med load fra local storage
    todoLists.push(activeTodoList)

    renderTodoLists()
}




function listCallback(event) {

    console.log(event);
    let menu = document.getElementById('menuContent')
    menu.style.display = null

    //console.log(event.currentTarget.dataset.index);
    /*   let index = event.currentTarget.dataset.index
      let item = activeTodoList.items[index]
      activeTodoList.items.splice(index, 1)
      renderTodoLists() */
}

function newItem() {
    let item = prompt("ny opgave")
    if (item != null && item != '') {
        activeTodoList.items.push(item)
        renderTodoLists()
    }

}

function newList() {
    let newList = prompt("ny liste")

    if (newList != null && newList != '') {

        activeTodoList = {
            name: newList,
            items: []
        }
        renderTodoLists()
    }

}

function deleteList(event) {
    let index = event.currentTarget.dataset.index
    todoLists.splice(index, 1)
    renderTodoLists()
}


function showListMenu(event) {

    let menu = document.getElementById('menuContent')
    menu.innerHTML = ''

    todoLists.forEach((list, index) => {


        // let myItem = `<div class="listMenuElement" onclick="listCallback()" data-index="${index}">${list.name}</div>`
        menu.innerHTML += myItem


    })
    menu.style.display = 'block'
}


// view code ---------------------------------------------------------------------------------

function renderTodoLists() {


    todoListItems.innerHTML = ''

    activeTodoList.items.forEach((item, index) => {
        let myItem = ` <span class="listElement" > <svg data-index="${index}" onclick="listCallback(event)" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M12 13.3333L16.5914 16.7769C17.0099 17.0908 17.5996 17.0291 17.944 16.6354L26.6667 6.66666" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M28 16C28 18.5073 27.2146 20.9517 25.7542 22.9897C24.2937 25.0278 22.2315 26.5572 19.8573 27.3632C17.483 28.1691 14.9159 28.2111 12.5166 27.4833C10.1172 26.7554 8.00612 25.2943 6.47976 23.3051C4.9534 21.3159 4.08846 18.8986 4.00642 16.3926C3.92439 13.8867 4.62937 11.4179 6.02236 9.33316C7.41536 7.2484 9.42638 5.65233 11.773 4.76913C14.1196 3.88592 16.6839 3.75995 19.1058 4.40889" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg><h2>${item}</h2></span>`
        todoListItems.innerHTML += myItem
    })

    listNameElement.innerHTML = activeTodoList.name

    todoListItems.innerHTML += '<h2 onclick="newItem()" >+</h2>'

}