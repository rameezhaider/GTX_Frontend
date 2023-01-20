import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Form, Row } from "react-bootstrap";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 60,
  p: 4,
};

export default function ViewInfo(props) {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const item = props.USR;
  console.log(item);


  const handleClose = () => props.setOpen(false);
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
            View User
          </Typography>

          <Row>
            <Form>
              <Form.Group className="mt-3">
                <Form.Label>Contact Name</Form.Label>
                <Form.Control
                  type="text"
                  value={props.USR.userName}
                  onChange={(e) => {
                    setContactName(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicDay">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  value={props.USR.number}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Contact Address</Form.Label>
                <Form.Control
                  type="text"
                  value={props.USR.address}
                  onChange={(e) => {
                    setContactAddress(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Row>
        </Box>
      </Modal>
    </>
  );
}
