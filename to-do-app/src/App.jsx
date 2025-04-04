import  { useState } from 'react';
import iconSun from '/images/icon-sun.svg';
import iconCheck from '/images/icon-check.svg';
import iconCross from '/images/icon-cross.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [checked, setChecked] = useState(false);

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

  const deleteItem = (index) => {
    setTodoList(todoList.filter(( todo) => todo.index !== index))
  }

  return (
    <main className="relative bg-bgDesktop h-screen bg-no-repeat bg-contain w-full">
      <div className="w-1/3 absolute left-1/2 top-20 -translate-x-1/2 bg-VeryDarkGrayishBlue">
        <div className="flex items-center justify-between px-2 bg-transparent">
          <h1 className="text-4xl text-white font-bold tracking-[0.25em]">TODO</h1>
          <img src={iconSun} alt="Toggle Theme" className='w-8 h-8'/>
        </div>
        <form action="" onSubmit={addItem}>
          <div className="enter-todo mt-10 shadow-md rounded-sm p-4  flex items-center gap-x-4">
            <div className="w-5 h-5 border rounded-full" aria-label="Add todo"></div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full outline-none text-VeryLightGrayishBlue"
              placeholder="Create a new todo..."
            />
          </div>
        </form>
        <div className="todo-list py-2 mt-4">
          {todoList.length === 0 ? (
            <p className="text-VeryLightGrayishBlue m-4 text-center">No todos yet. Start by adding one!</p>
          ) : (
            <ul className=''>
              {todoList.map((item, index) => (
                <li key={index} className="text-VeryLightGrayishBlue border-b border-gray-500 px-4 py-4 flex items-center justify-between w-full">
                  <div className='flex'>
                    <button className={`check-button w-5 h-5 rounded-full border ${checked ? "" : ""}`}>
                      <img src={iconCheck} className=''/>
                    </button>
                    <p className='px-4'>{item}</p>
                  </div>
                  <button
                   className='cross-button'
                   onClick={() => deleteItem(index)}>
                    <img src={iconCross} className='w-3 cursor-pointer'/>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className='flex justify-between p-4'>
            <div className="num-of-items">
              <span>{todoList.length} items left</span>
            </div>
            <div className="categories flex gap-x-2">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <div>
              <span>Clear Completed</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
