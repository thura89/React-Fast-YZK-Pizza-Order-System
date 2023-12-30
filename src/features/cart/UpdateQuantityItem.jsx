import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increateItemQuantity,
} from "./cartSlice";

const UpdateQuantityItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const getCurrentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{getCurrentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increateItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateQuantityItem;
