import { useState, useEffect, useRef } from 'react';

function ToDo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  const isMounted = useRef(true);

  useEffect(() => {
    console.log(isMounted);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    return () => {
      isMounted.current = false;
      console.log(isMounted);
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
}

export default ToDo;
