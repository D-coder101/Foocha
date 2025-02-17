// import { useDispatch } from "react-redux"
// import Button from "../../ui/Button"
// import { deleteItem } from "./cartSlice"
import { BiSolidTrash } from "react-icons/bi";

function DeleteItem() {
  // const dispatch = useDispatch()

  return (
    // <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>DELETE</Button>
    <button>
      <BiSolidTrash className="text-lg text-gray-500" />
    </button>
  );
}

export default DeleteItem;
