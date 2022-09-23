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

showMenu();


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
        
