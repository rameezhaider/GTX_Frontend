import React, {useState,useEffect} from 'react';
import Axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-responsive-list'
import 'react-responsive-list/assets/index.css'
import {
    IconButton,
  } from "@mui/material";
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete'
  import VisibilityIcon from '@mui/icons-material/Visibility';
import EditInfo from './EditInfo';
import ViewInfo from './ViewData';
export default function Home() {
    const [openMonth , setOpenMonth] = useState(false);
    const [openView , setOpenView] = useState(false);
    const [std, setStd] = useState({});
    const [std1, setStd1] = useState({});
    const [data,setData]=useState([]);
    const [open, setOpen] = React.useState(false);
    const userList = async () => {
        const user = await Axios.get("http://localhost:5000/all-data");
        setData(user.data);
        console.log(data);
      };
    const DeleteUser = async (id) => {
        await Axios.delete(`http://localhost:5000/delete-data/${id}`);
        userList();
      };

      useEffect(() => {
        userList();
      }, []);

    const handleOpenMonth = (item) => {
        setOpenMonth(true)
        setStd(item)
      };
      const handleOpenView = (item) => {
        setOpenView(true)
        setStd1(item)
      };
        return (
            <>
           <Table>
            <Thead>
            <Tr>
                <Th>Contact Name</Th>
                <Th>Contact Number</Th>
                <Th>Contact Address</Th>
                <Th>Action</Th>
            </Tr>
            </Thead>
            {data.map((item) => (
              <Tbody>
                
              <Tr>
                <Td>{item.userName}</Td>
                <Td>{item.number}</Td>
                <Td>{item.address}</Td>
                <Td><IconButton variant="contained"
              >
              <EditIcon onClick={() => handleOpenMonth(item)} style={{ color: "blue" }}/>
              </IconButton>
              <IconButton variant="contained"
              >
              <DeleteIcon style={{ color: "red" }} onClick={()=>DeleteUser(item._id)}/>
              </IconButton>
              <IconButton variant="contained"
              >
              <VisibilityIcon onClick={() => handleOpenView(item)} style={{ color: "orange" }}/>
              </IconButton></Td>

              </Tr>
            </Tbody>
            ))

                }
           </Table> 
           <EditInfo  open={openMonth}  setOpen={setOpenMonth} USR={std} />
           <ViewInfo  open={openView}  setOpen={setOpenView} USR={std1} />
          
           </>
        );
}