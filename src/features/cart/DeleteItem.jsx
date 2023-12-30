import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "../cart/cartSlice";

const DeleteItem = ({ pizzaId, children }) => {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      {children}
    </Button>
  );
};

export default DeleteItem;
