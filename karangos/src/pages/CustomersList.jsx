import React from "react"
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function customersList(){

    const [state, setState] = React.useState({
        customers: {}
    })

    //Destravando variaveis de estado
    const {
        customers
    } = state

// este useEffect() será executado apenas uma verz , durante o carregamento da pagina
React.useEffect(() => {
    LoadData()  //Carrega os dados do back-end
}, [])

async function LoadData(){
    try {
         const result = await fetch('https://api.faustocintra.com.br/customers')

         //Requisição ok
         if(result.ok) setState({...state, customers: await result.json()})

         //Requsição com erro
         else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)

    }
    catch(error){
      // Exibimos o erro no console
      console.error(error) 
    }
}

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
    return (

        <>
        <Typography variant="h1">
            Listagem de clientes
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
    </Box>
        <div>
            { JSON.stringify(customers) }
        </div>
        </>
    )
}