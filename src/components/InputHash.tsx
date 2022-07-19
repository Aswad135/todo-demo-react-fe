import { useState } from "react";
import axios from "axios";
import { TodoListType } from "../types/TodoList.type";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// type InputHashProps = {
//     // value: string
//     // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     // handleClickEvent: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
// }

export function InputHash() {
    let [inputVAl, setInputVal] = useState('');
    let [resVal, setResVal] = useState({} as TodoListType);
    function handleChange (e:any){
        setInputVal(e.target.value);
    }

    async function searchData() {
        try{
            let response = await axios.get('http://localhost:8083/list?listHash=' + inputVAl);
            if(response && response.data){
                setResVal(response.data);
            }
        } catch (e:any) {
            alert(e?.message)
        }
    }

    return (
        <div>
            <div style={{marginTop: "1cm"}}>
                <label>Input Hash Code</label>
                <input id={"listHash"} type={"text"} value={inputVAl} onChange={(e)=> handleChange(e)}/>
                <button onClick={searchData} type="submit">Search Todo List</button>
            </div>
            <div style={{marginTop:"5%",marginLeft:"200px",marginRight:"200px"}}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">Contents</TableCell>
                                <TableCell align="center">Created On</TableCell>
                                <TableCell align="center">Modified On</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {resVal?.listOfTodos?.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell align="center" component="th" scope="row">{row.contents}</TableCell>
                                    <TableCell align="center">{row.createdOn}</TableCell>
                                    <TableCell align="center">{row.modifiedOn}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}