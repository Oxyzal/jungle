import menu from '../data/menu.json' assert {
    type:"json"
}

console.log(menu)


const showMenu = () =>{
    const divMenu = document.querySelector('#menu')
    menu.forEach(food => {
        divMenu.innerHTML +=`<p data-food='${food.title}' class='food'> ${food.name} </p>`
    })

}

const showPlat = (title) =>{
    const div = document.querySelector(`#${title}`)
    div.innerHTML = `<h2>${title}</h2>`
    menu.forEach(element => {
        if(element.title === title){
            div.innerHTML +=`<p data-food='${element.title}' class='food'> ${element.name} </p>`
        }
    })
}
showPlat('plats-du-jour')
showPlat('desserts-du-jour')
showPlat('a-partager')
showPlat('salades')
showPlat('plats')
showPlat('burgers')
showPlat('desserts')
showPlat('happy-hour')
showPlat('les-vins')
showPlat('cocktails')
showPlat('alcools')
showPlat('boissons-fraîches')
showPlat('boissons-chaudes')

document.querySelectorAll('.choix').forEach(choix => {
    choix.addEventListener("click", (e) =>{
        e.preventDefault();
        const searchTerme = choix.value.toLowerCase()
        if(searchTerme){
          document.querySelectorAll('.food').forEach((el) => {
            if(el.dataset.food.toLowerCase().includes(searchTerme) === false) {
                el.style.display = 'none'
            } else {
                el.style.display = 'block'
            }
          })
        } 
      });
})

document.querySelector('.cr').addEventListener("click", (e) =>{
    document.querySelectorAll('.food').forEach((el) => {
        el.style.display = 'block'

    })
})

const plat = document.querySelector('#plat')
