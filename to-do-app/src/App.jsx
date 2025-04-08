import  { useEffect, useState } from 'react';
import iconSun from '/images/icon-sun.svg';
import iconMoon from '/images/icon-moon.svg';
import iconCheck from '/images/icon-check.svg';
import iconCross from '/images/icon-cross.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [darkToggle, setDarkToggle] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if(darkToggle) {
      document.querySelector('html').classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else {
      document.querySelector('html').classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [darkToggle])

  const toggleDarkMode = () => setDarkToggle(!darkToggle);

  const filteredTodos = todoList.filter(todo => {
    if(filter === 'active') return !todo.completed;
    if(filter === 'completed') return todo.completed;
    return true;
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, {text: inputValue, id: Date.now(), completed: false}]);
      setInputValue('');
    }
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  const clearCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.completed));
  }

  return (
    <main className={`bg-light-mobile md:bg-light-desktop dark:bg-dark-mobile dark:md:bg-dark-desktop min-h-screen bg-no-repeat bg-contain w-full dark:bg-VeryDarkBlue bg-white `}>
      <div className="flex items-center bg-none w-5/6 md:w-1/3 justify-between px-4 py-4 mb-5 mx-auto pt-16">
        <h1 className="text-4xl text-white font-bold tracking-[0.25em]">TODO</h1>
        <img src={`${darkToggle ? iconSun : iconMoon}`} alt="Toggle Theme" className='w-8 h-8 cursor-pointer' onClick={toggleDarkMode}/>
      </div>

      <form onSubmit={addItem} className='w-5/6 md:w-1/3 mx-auto px-4 md:px-0 dark:bg-VeryDarkDesaturatedBlue bg-white rounded-md'>
        <div className="enter-todo mb-10 mt-2 p-4 flex items-center gap-x-4">
          <div className="w-5 h-5 border border-DarkGrayishBlue2 rounded-full" aria-label="Add todo"></div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full outline-none bg-transparent text-LightGrayishBlue2 caret-BrightBlue border-none"
            placeholder="Create a new todo..."
          />
        </div>
      </form>

      <div className="todo-list py-2 mt-4 w-5/6 md:w-1/3 mx-auto dark:bg-VeryDarkDesaturatedBlue bg-white rounded-md shadow-lg overflow-hidden px-0">
        {filteredTodos.length === 0 ? (
          <p className="text-DarkGrayishBlue2 m-4 text-center">
            {filter === 'all'
            ? "No todos yet." : `No ${filter} todos`}
          </p>
        ) : (
          <ul>
            {filteredTodos.map(todo => (
              <li key={todo.id} className="text-LightGrayishBlue2 border-b-2 dark:border-gray-700 px-4 py-4 flex items-center justify-between w-full">
                  <div className='flex items-center'>
                    <button 
                      className={`check-button w-5 h-5 rounded-full flex items-center hover:border-CheckBackground justify-center ${
                        todo.completed 
                          ? "bg-gradient-to-b from-blue-400 to-purple-500" 
                          : "border border-DarkGrayishBlue2"
                      }`}
                      aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                      onClick={() => toggleCompleted(todo.id)}>
                      {todo.completed && <img src={iconCheck} alt="Completed" className='w-3 h-3 bg-transparent'/>}
                    </button>
                    <p className={`${
                      todo.completed 
                        ? 'line-through text-gray-500' 
                        : 'dark:text-LightGrayishBlue2 text-VeryDarkGrayishBlue'
                    } px-4`}>{todo.text}</p>
                  </div>
                  <button
                    className='cross-button'
                    onClick={() => deleteItem(todo.id)}>
                    <img src={iconCross} alt="Delete" className='w-3 cursor-pointer'/>
                  </button>
              </li>
            ))}
          </ul>
        )}
        <div className='flex justify-between p-4 text-DarkGrayishBlue2 text-sm'>
          <div className="num-of-items">
            <span>{todoList.filter(todo => !todo.completed).length} items left</span>
          </div>
          <div className="desktop-categories md:flex gap-x-4 hidden">
            <p
              className={`${filter === 'all' ? 'text-BrightBlue font-bold' : ''} hover:text-white transition-all ease-in cursor-pointer`}
              onClick={() => setFilter('all')}
            >
              All
            </p>
            <p
              className={`${filter === 'active' ? 'text-BrightBlue font-bold' : ''} hover:text-white transition-all ease-in cursor-pointer`}
              onClick={() => setFilter('active')}
            >
              Active
            </p>
            <p
              className={`${filter === 'completed' ? 'text-BrightBlue font-bold' : ''} hover:text-white transition-all ease-in cursor-pointer`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </p>
          </div>
          
          <div className="cursor-pointer hover:text-LightGrayishBlue2" onClick={clearCompleted}>
            <span>Clear Completed</span>
          </div>
        </div>
      </div>
      <div className="mobile-categories w-5/6 mx-auto mt-4 rounded-md shadow-lg flex md:hidden justify-center gap-x-4 p-4 dark:bg-VeryDarkDesaturatedBlue bg-white">
        <p
          className={`${filter === 'all' ? 'text-BrightBlue font-bold' : ''} hover:text-white transition-all ease-in cursor-pointer`}
          onClick={() => setFilter('all')}
        >
          All
        </p>
        <p
          className={`${filter === 'active' ? 'text-BrightBlue font-bold' : ''} hover:text-white transition-all ease-in cursor-pointer`}
          onClick={() => setFilter('active')}
        >
          Active
        </p>
        <p
          className={`${filter === 'completed' ? 'text-BrightBlue font-bold' : ''} hover:text-white transition-all ease-in cursor-pointer`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </p>
      </div>
    </main>
  );
};

export default App;
