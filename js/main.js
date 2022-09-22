import menu from '../data/menu.json' assert {
    type:"json"
}

console.log(menu)


const showMenu = () =>{
    const divMenu = document.querySelector('#menu')
    menu.forEach(food => {
        divMenu.innerHTML +=`<p> ${food.name} </p>`
    })

}

showMenu();