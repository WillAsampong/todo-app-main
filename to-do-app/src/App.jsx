import  { useState } from 'react';
import iconSun from '/images/icon-sun.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <main className="relative bg-bgDesktop h-screen bg-no-repeat bg-contain w-full bg-VeryDarkBlue">
      <div className="w-1/4 absolute left-1/2 top-20 -translate-x-1/2">
        <div className="flex justify-between">
          <h1 className="text-4xl text-white font-bold tracking-[0.25em]">TODO</h1>
          <img src={iconSun} alt="Toggle Theme" />
        </div>
        <form action="" onSubmit={addItem}>
          <div className="enter-todo mt-10 shadow-md p-4 bg-VeryDarkDesaturatedBlue flex items-center gap-x-4">
            <button className="w-5 h-5 border rounded-full" aria-label="Add todo"></button>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none text-white"
              placeholder="Create a new todo..."
            />
          </div>
        </form>
        <div className="todo-list bg-VeryDarkDesaturatedBlue py-4 mt-4">
          {todoList.length === 0 ? (
            <p className="text-white mt-4">No todos yet. Start by adding one!</p>
          ) : (
            <ul className=''>
              {todoList.map((item, index) => (
                <li key={index} className="text-white border-b border-gray-500">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
