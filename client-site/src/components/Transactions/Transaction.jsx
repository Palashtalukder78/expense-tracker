import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"
import { useDispatch } from "react-redux";
import { removeTransaction } from "../../features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  const {id, name,type, amount} = transaction || {};

  const dispatch = useDispatch();
  
  const handleDelete =()=>{
    dispatch(removeTransaction(id))
  }
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={editImg} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={deleteImg} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;