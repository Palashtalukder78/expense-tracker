import editImg from "../../assets/images/edit.svg"
import deleteImg from "../../assets/images/delete.svg"

const Transaction = () => {
    return (
      <li className="transaction income">
        <p>Earned this month</p>
        <div className="right">
          <p>৳ 100</p>
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