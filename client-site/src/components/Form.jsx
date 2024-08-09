import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTransaction,
  createTransaction,
} from "../features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const disPatch = useDispatch();

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };
  //CREATE DATA
  const handleSubmit = (e) => {
    e.preventDefault();
    disPatch(
      createTransaction({
        name,
        type,
        amount: Number(amount),
      })
    );
    reset();
  };

  // listen for editing mode
  const { editing } = useSelector((state) => state.transactions);
  useEffect(() => {
    const { name, id, type, amount } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);
  const handleCancelEdit = () => {
    reset();
    setEditMode(false);
  };

  //UPDATE DATA
  const handleUpdate = (e) => {
    e.preventDefault();
    disPatch(
      changeTransaction({
        id: editing.id,
        data: {
          name: name,
          type: type,
          amount: amount,
        },
      })
    );
    reset();
    setEditMode(false)
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={editMode ? handleUpdate : handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="ex: Mini Job"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              checked={type === "expense"}
              placeholder="Expense"
              onChange={() => setType("expense")}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="300"
            name="transaction_amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>

      {editMode && (
        <button className="btn cancel_edit" onClick={handleCancelEdit}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
