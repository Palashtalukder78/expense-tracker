import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransaction } from "../features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const disPatch = useDispatch()
  const reset = ()=>{
    setName('')
    setType('')
    setAmount('')
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    disPatch(createTransaction({
      name,
      type,
      amount: Number(amount)
    }))
    reset()
  }
  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Mini Job"
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
          Add Transaction
        </button>
      </form>

      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
};

export default Form;
