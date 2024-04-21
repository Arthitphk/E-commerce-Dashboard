
import { useEffect, useState } from "react";
import axios from "axios";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
}



const Salecontent = () => {
    const [input, setInput] = useState("");
    const [data , setData] = useState([]);
    const [search , setSearch] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
            console.error('There was an error!', error);
            });
        }, []);

       
    useEffect (() => {
        setSearch(data.filter((x: Product) => x.title.toLowerCase().includes(input)));},
    [input, data]);    
        


  return (
    <div>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBottom:'50px' }}
            >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => setInput(e.target.value.toLowerCase())}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
            
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price($)</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {search.map((product: Product) =>    
                <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>   

        

    </div>
  )
}

export default Salecontent



