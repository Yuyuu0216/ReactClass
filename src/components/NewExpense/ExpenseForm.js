import "./ExpenseForm.css";
import react,{ useState } from "react";

function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setenteredAmount] = useState('');
    const [enteredDate,setenteredDate] = useState('');
    // const [userInput,setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const typeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) =>{
        //   return{ ...prevState,enteredTitle: event.target.value}
        // })
    };
    const typeAmountHandler = (event) => {
        setenteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) =>{
        //   return{ ...prevState,enteredAmount: event.target.value}
        // })
    };
    const typeDateHandler = (event) => {
        setenteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
        // setUserInput((prevState) =>{
        //   return{ ...prevState,enteredDate: event.target.value}
        // })
    };

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        Amount: enteredAmount,
        Date: new Date(enteredDate)
      }

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setenteredAmount('');
      setenteredDate('')
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={typeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={typeAmountHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-12"  value={enteredDate} onChange={typeDateHandler}/>
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button> 
      </div>
    </form>
  );
}

export default ExpenseForm;
