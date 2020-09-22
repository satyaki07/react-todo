import {List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import React from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(props) {
  return (
    <div className="todo__list">
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline.."
          />
        </ListItem>
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
