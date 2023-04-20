import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    window.localStorage.getItem('name') ?? initialName
    )

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  //Lazy initializer ("atualização preguiçoza")
  // FAz com que o valor inicial de um useState só seja executado
  // durante a fase de carregamento do componemte (fase "mount")
  // para ativar um lazy initializer, basta informar uma função
  // como valor inicial do useState

  React.useEffect(() => {
   window.localStorage.setItem('name', name)
}, [name])// --> vetro de dependencias o useEffect somente será executado quando a(s) variavel(is)
// especificadas no vetor de dependências tiverem seus valores alterados

  console.count('Atualizou')

  function handleChange(event) {
    setName(event.target.value)
    
  }

  function handleClick(event){
    setCount(count + 1)
  }

  return (
    <div>
      <form>
        <label htmlFor="name"onClick={handleClick}>Name ({count}): </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName='Orkutilson' />
}

export default Exercicio02