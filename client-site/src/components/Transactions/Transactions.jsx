import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  let content = null;
  if (isLoading && !isError) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p className="error">{error}</p>;
  if (!isLoading && !isError && transactions.length === 0)
    content = <p className="error">No data available</p>;
  if (!isLoading && !isError && transactions.length > 0)
    content = transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>);
  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          {content}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
