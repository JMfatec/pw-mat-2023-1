import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom'

export default function CarsList() {

  const [state, setState] = React.useState({
    cars: {}
  })

  // Desestruturando as variáveis de estado
  const {
    cars
  } = state
/*
   Acima neste trecho, o componente CarsList é definido como uma função. 
   Ele utiliza o hook useState para criar uma variável de estado chamada state, 
   que contém um objeto vazio inicialmente. 
   A desestruturação é usada para obter a variável cars do estado.
*/

  // Este useEffect() será executado apenas uma vez, durante o
  // carregamento da página
  React.useEffect(() => {
    loadData()    // Carrega dos dados do back-end
  }, [])
/*
  Acima temos um hook useEffect que será executado apenas uma vez, 
  quando o componente for montado, ele chama a função loadData, 
  responsável por carregar os dados do backend.
*/

  async function loadData() {
    try {
      const result = await fetch('https://api.faustocintra.com.br/cars')

      // Requisição OK
      if(result.ok) setState({...state, cars: await result.json()})
      
      // Requisição com erro
      else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)

    }
    catch(error) {
      // Exibimos o erro no console
      console.error(error)
    }
  }
/*
   A função loadData é assíncrona e realiza uma requisição HTTP 
   para a API 'https:api.faustocintra.com.br/cars'
   se a resposta for bem-sucedida, 
   os dados são atualizados no estado utilizando setState. 
   Caso contrário, é lançado um erro.
*/

  // Definição das colunas da tabela de carros
  const columns = [
    { field: 'id', 
    headerName: 'ID', 
    width: 90 
    },
    // Restante das colunas
    {
      field: 'brand',
      headerName: 'Marca',
      width: 150,
    },
    {
      field: 'model',
      headerName: 'Modelo',
      align: 'center',
      headerAlign: 'center',
      width: 150,
    },
    {
      field: 'color',
      headerName: 'cor',
      align: 'center',
      headerAlign: 'center',
      width: 150,
    },
    {
      field: 'year_manufacture',
      headerName: 'Ano de Fabricação',
      align: 'center',
      headerAlign: 'center',
      width: 250,
      valueFormatter: params => { 
        if(params.value) return format(new Date(params?.value), 'yyyy')
           else return ''
       }
    },
    {
      field: 'imported',
      headerName: 'Importado',
      width: 150,
      // Função para verificar se o carro é importado ou não
      valueFormatter: params => {
        if(params.value == 1 ) return 'Sim'
           else if(params.value == 0) return 'Não'
    },
    },
    {
      field: 'plates',
      headerName: 'Placa',
      align: 'center',
      headerAlign: 'center',
      width: 150,
    },
    {
      field: 'selling_price',
      headerName: 'Preço de venda',
      width: 150,
    },
    {
      field: 'edit',
      headerName: 'Editar',
      align: 'center',
      headerAlign: 'center',
      width: 90,
      renderCell: params => 
      <Link to={'./' + params.id}>
      <IconButton aria-label='Editar'>
        <EditIcon />
      </IconButton>
      </Link>
    },
    {
      field: 'delete',
      headerName: 'Excluir',
      align: 'center',
      headerAlign: 'center',
      width: 90,
      renderCell: params =>
      <IconButton 
      aria-label='Excluir'
      onClick={() => handleDeleteButtonClick(params.id)}
      >
      <DeleteForeverIcon color='error' />
      </IconButton>

    },
  ];
/*
  Acima é definido um array de objetos chamado columns, 
  que representa as colunas da tabela. 
  Cada objeto no array representa uma coluna e possui propriedades como field (campo), 
  headerName (nome do cabeçalho), width (largura).
*/

  // Função para lidar com o clique no botão de excluir
  async function handleDeleteButtonClick(id) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // Faz a chamada ao back-end para excluir o carro
        const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {
          method: 'DELETE'
        })
        // Se a exclusão tiver sido feita com sucesso, atualiza a listagem
        if(result.ok) loadData()
        alert('Exclusão efetuada com sucesso!')
      }
      catch(error) {
        console.error(error)
      }
    }
  }
 /*
   A função handleDeleteButtonClick é chamada quando o botão de exclusão é clicado. 
   Ela exibe uma caixa de diálogo de confirmação e, 
   se confirmada, faz uma chamada ao backend para excluir o item correspondente ao id fornecido. 
   Se a exclusão for bem-sucedida,a lista é atualizada e exibe um alerta de sucesso.
 */

  return (
    <>
      <Typography variant="h1" sx={{ mb: '50px' }}>
        Listagem de carros
      </Typography>

      {/* Botão para cadastrar novo carro */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        mb: '25px'  // margin-bottom
      }}>
        <Link to="new">
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            startIcon={<AddBoxIcon />}
          >
            Cadastrar novo carro
          </Button>
        </Link>
      </Box>
      
      {/* Tabela de dados */}
      <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={cars}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </>
  )
}
/*
No final, o componente retorna uma estrutura JSX 
que representa a UI(user interface) essa estrutura contém elementos como:

<Typography> que permite exibir texto com estilos e variantes predefinidos. 
No código, ele é usado para exibir um título na página de listagem de carros.

<Box> que permite agrupar elementos e definir propriedades de espaçamento, alinhamento e estilo. 
No código, é usado para envolver o botão de cadastrar novo carro e aplicar estilos de margem.

<Button> representa um botão, ele pode ser personalizado com diferentes cores e ícones. 
No código, é usado para criar o botão de cadastrar novo carro na página.

<Link> é um componente do React Router que permite criar links para outras páginas da aplicação. 
No código, é usado para criar um link para a página 
de cadastro de novo carro quando o botão correspondente é clicado.
*/