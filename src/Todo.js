import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  const updateTodo = () => {
    handleClose();
  };

  return (
    <div className="todo__list">
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>I am a modal!!</h1>
          <input
          placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline.."
          />
        </ListItem>
        <button onClick={handleOpen}>Edit Me</button>
        <DeleteForeverIcon
          onClick={(event) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
        />
      </List>
    </div>
  );
}

export default Todo;
