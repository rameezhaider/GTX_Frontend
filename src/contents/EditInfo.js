import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Form, Row } from "react-bootstrap";
import { useState,useEffect } from "react";
import Axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 60,
  p: 4,
};

export default function EditInfo(props) {
  const [userName, setuserName] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  
  const item=props.USR;
  console.log(item);
  // setuserName(props.USR.userName);
  // setnumber(props.USR.number);
  // setaddress(props.USR.address);

  const handleClose = () => props.setOpen(false);
  const editUser = async (id) => {
    await Axios.post(`http://localhost:5000/edit-data`, {
      _id: id,
      userName,
      number,
      address,
    });
  };
  return (
    <>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className="modal-width">
          <Typography className="text-center" variant="h6" component="h2">
            Edit User
          </Typography>

          <Row>
            <Form >
              <Form.Group className="mt-3">
                <Form.Label>Contact Name</Form.Label>
                <Form.Control
                  type="text"
                  value={item.userName}
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicDay">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  value={item.number}
                  onChange={(e) => setnumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Contact Address</Form.Label>
                <Form.Control
                  type="text"
                  value={item.address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
              <Button
                className="btn btn-primary"
                color="secondary"
                variant="contained"
                type="submit"
                onClick={() => {editUser(item._id)}}
              >
                Submit
              </Button>
            </Form>
          </Row>
        </Box>
      </Modal>
    </>
  );
}
