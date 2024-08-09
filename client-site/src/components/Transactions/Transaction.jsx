import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"

const Transaction = ({ transaction }) => {
  const {id, name, amount} = transaction || {};
  return (
    <li className="transaction income">
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={editImg} />
        </button>
        <button className="link">
          <img className="icon" src={deleteImg} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;