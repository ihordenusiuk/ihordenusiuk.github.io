const player1 = {
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    name: "Scorpion",
    hp: 100,
    weapon: ["spear"],
    attack: function(){
        console.log(this.name +" Fight..");
    },
   
   
}


const player2 = {
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    name: "Sonya Blade",
    hp: 100,
    weapon: ["gun"],
    attack: function(){
        console.log(this.name + " Fight..");
    },
    
}

function createPlayer(player, object){
    let $player = document.createElement('div')
    $player.classList.add(player)
    document.querySelector('.arenas').append($player)
    let $progressBar = document.createElement('div')
    $progressBar.classList.add('progressbar')

    let $character = document.createElement('div')
    $character.classList.add('character')

    $player.appendChild($progressBar)
    $player.appendChild($character)

    let $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = object.hp +"%"
    let $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = object.name

    $progressBar.appendChild($life)
    $progressBar.appendChild($name)


    let $img = document.createElement('img')
    $img.src = object.img
    $character.append($img)
    
}
    
   createPlayer('player1', player1)
   createPlayer('player2', player2)
    