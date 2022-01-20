import { useState } from 'react';
import ToDo from './ToDo';

function UseRefExample3() {
  const [showToDo, setShowToDo] = useState(false);

  return (
    <div>
      {showToDo && <ToDo />}
      <button
        className='btn btn-primary'
        onClick={() => {
          setShowToDo(!showToDo);
        }}
      >
        Toggle ToDo
      </button>
    </div>
  );
}

export default UseRefExample3;
