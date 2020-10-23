import React, { useReducer, useState } from 'react';
import { reducer } from './reducer';
import './style/App.css';
import Modal from './modal';

// default status
const defaultStatus = {
  items: [],
  isActiveModal: false,
  modalMsg: ''
}

function App() {

  const [todo, setTodo] = useState('');
  // in reducer we need to use a status, a dispatch function and then add the reducer js with de dispatch options and the deafult status
  const [status, dispatch] = useReducer(reducer, defaultStatus);

  // we handle the submit
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      // we create a new item with the useState todo data that we get from the input
      const newItem = { id: new Date().getTime(), todo };
      // we dispatch the action with a name 'ADD_ITEM' it can be whatever, and a payload with the new item
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setTodo('');
    } else {
      // this dispatch is for alert the user that had submit no data
      dispatch({ type: 'NO_VALUE' })
    }
  }

  // close modal we turn isActiveModal to false an this function we pass into modal js
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  // remove todo we use a payload wit the id of the item
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  // render of the app
  return (
    <section className="app">
      <div className="container">
        {status.isActiveModal && <Modal modalMsg={status.modalMsg} close={closeModal} />}
        <div className="todo-section">
          <div className="todo">
            <h1 className="todo__title">What do you need to do?</h1>
            <div className="todo__form">
              <form onSubmit={handlerSubmit}>
                <div className="form-control">
                  <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                </div>
                <div className="btn-wrap">
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="items">
          <h1 className="items__title">You have {status.items.length} Todos</h1>
          <div className="items__list">
            {/* status.items iteration */}
            {
              status.items.map((item) => {
                return <div className="item" key={item.id}>
                  <p>{item.todo}</p>
                  <div className="btn-item-del" onClick={() => removeItem(item.id)}>
                    <p>&times;</p>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
