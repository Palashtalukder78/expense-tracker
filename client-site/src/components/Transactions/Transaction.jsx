/* eslint-disable react/prop-types */
import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";
import { numberWithCommas } from "../../utils/numberWithCommas";

const Transaction = ({ transaction }) => {
  const {id, name,type, amount} = transaction || {};

  const dispatch = useDispatch();
  
  const handleDelete =()=>{
    dispatch(removeTransaction(id))
  }
  
  const handleEdit =()=>{
    dispatch(editActive(transaction))
  }
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button className="link" onClick={handleEdit}>
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