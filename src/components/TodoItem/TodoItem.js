import React, { useState } from 'react';
import './TodoItem.css';

function Todo(props) {
  const { content, id, deleteItem } = props;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div onClick={() => setIsClicked(!isClicked)} className='todo'>
      <span className={isClicked && 'completed'}>{content}</span>
      <button onClick={() => deleteItem(id)} className='btn btn-danger'>
        Sil
      </button>
    </div>
  );
}

export default Todo;
