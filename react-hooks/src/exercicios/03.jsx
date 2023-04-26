import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

// 🐨 aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 delete this, it's now managed by the App
  //const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 descomente isso
function Display({animal}) {
  //return <div>{`Olá ${name}, seu animal favorito é: ${animal}!`}</div>
  return <div>{`Olá, seu animal favorito é: ${animal}!`}</div>
}


// 💣 exclua esse componente e use o novo
//function Display({name}) {
// return <div>{`Hey ${name}, you are great!`}</div>
//}

function Exercicio03() {
  // 🐨 adicione um useState para o animal
  //const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name />
      {/* 🐨 passe o animal e a prop onAnimalChange aqui (similar ao componente Name acima) */}
      <FavoriteAnimal animal={animal} 
      onAnimalChange={event => setAnimal(event.target.value)}/>
      {/* 🐨 passe a prop do animal aqui */}
      <Display animal={animal}/>
    </form>
  )
}

export default Exercicio03