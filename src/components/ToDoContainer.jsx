import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdSave, MdDateRange, MdEdit, MdDelete, MdOutlineFindInPage, MdReadMore } from "react-icons/md";
import { FaSearch, FaCheck } from 'react-icons/fa';



function ToDoContainer() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [todoText, setTodoText] = useState('');
    const [todoes, setTodoes] = useState([]);
    const [showFinished, setShowFinished] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [todoDate, setTodoDate] = useState('');



    const saveLocalStorage = (items) => {
        localStorage.setItem('todoes', JSON.stringify(items));
    };

    useEffect(() => {
        const todoString = localStorage.getItem('todoes');
        if (todoString) {
            const todos = JSON.parse(todoString);
            setTodoes(todos);
        }
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const handleAdd = () => {
        if (!todoText.trim()) return;

        const newTodo = {
            text: todoText.trim(),
            id: uuidv4(),
            isComplete: false,
            date: todoDate || new Date().toISOString().split("T")[0], // fallback to today
        };


        const updatedTodos = [...todoes, newTodo];
        setTodoes(updatedTodos);
        setTodoText('');
        setTodoDate('');

        saveLocalStorage(updatedTodos);
    };

    const handleEdit = (e, id) => {
        const todo = todoes.find((i) => i.id === id);
        setTodoText(todo.text);
        const newTodoes = todoes.filter((todo) => todo.id !== id);
        setTodoes(newTodoes);
        saveLocalStorage(newTodoes);
    };

    const handleDelete = (e, id) => {
        const newTodoes = todoes.filter((todo) => todo.id !== id);
        setTodoes(newTodoes);
        saveLocalStorage(newTodoes);
    };

    const handleCheckBox = (e) => {
        const id = e.target.name;
        const updateTodoes = todoes.map((todo) =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        );
        setTodoes(updateTodoes);
        saveLocalStorage(updateTodoes);
    };

    const handleShowFinished = () => {
        setShowFinished(!showFinished);
    };

    return (
        <section
            id="todoContainer"
            className="flex flex-col md:flex-row items-start justify-between w-[95%] mx-auto text-white rounded-lg shadow-lg p-4 overflow-hidden gap-6 min-h-screen"
        >

            {/* LEFT SIDE */}
            <div className="left w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0 break-words overflow-hidden ">
                <h1 className="text-7xl md:text-6xl  font-bold my-8" data-aos="fade-up">FocusList - Your Smart <span className='text-[#2f32f5]'>Task Management</span> App</h1>
                <p className="text-base sm:text-lg mb-2 leading-7" data-aos="fade-up">
                    <span className='text-violet-600 text-4xl font-medium' data-aos="fade-right">Stay</span> sharp and productive with FocusList. Organize your tasks, track deadlines, and complete your goals with ease— whether you're at home, work, or on the go.
                </p>
                <p className="text-sm md:text-md text-white/70 my-4" data-aos="fade-up">
                    Add new tasks, view details, edit details , set dates ,
                    <br /> search tasks , delete tasks and stay organized!
                </p>

            </div>

            {/* RIGHT SIDE */}


            <div
                id="todo"
                className="right w-full md:w-3/4 flex flex-col overflow-hidden flex-wrap"
                data-aos="fade-up"
            >
                <div className="addTodo w-full mb-2" data-aos="zoom-in">
                    <h1 className="text-4xl font-bold m-4">Add FocusList</h1>

                    <textarea
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        placeholder="Enter your todo..."
                        className="w-full min-h-[6rem] p-3 rounded-xl focus:outline-none resize-none bg-blue-300 text-sm text-white"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    />

                    <input
                        type="date"
                        value={todoDate}
                        onChange={(e) => setTodoDate(e.target.value)}
                        className="w-full mt-2 p-2 rounded-xl text-black bg-blue-100 text-sm"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    />

                    <button
                        className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl py-2 px-6 tracking-wide mt-2 flex items-center gap-2"
                        onClick={handleAdd}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <MdSave className="text-lg" /> Save
                    </button>
                </div>

                <div
                    className="flex flex-col flex-1 w-full break-words overflow-hidden"
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <h1 className="text-xl sm:text-2xl font-bold mb-1 sticky top-0 z-10 py-2">
                        Todo List
                    </h1>

                    <div className="relative w-3/4" data-aos="fade-up" data-aos-delay="500">
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search todos..."
                            className="w-full p-2 pl-10 rounded-lg mb-2 text-white border border-white bg-blue-300 focus:outline-none my-2"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/80" />
                    </div>
                    <p className="text-white text-sm">Searching for: {searchText}</p>


                    <label
                        className="flex items-center gap-2 text-white my-2"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <input type="checkbox" onClick={handleShowFinished} />
                        Show Completed
                    </label>

                    <ul className="flex flex-col gap-4 overflow-y-auto pr-1 pb-4 max-h-auto sm:max-h-[60vh] w-full">
                        {todoes.length === 0 && (
                            <li
                                className="text-center text-3xl text-red-600 font-bold flex items-center justify-center gap-2"
                                data-aos="fade-in"
                            >
                                <MdOutlineFindInPage className="text-4xl" />
                                No Todos Found!
                            </li>
                        )}

                        {todoes
                            .filter(
                                (todo) =>
                                    todo.text.toLowerCase().includes(searchText.toLowerCase()) &&
                                    (showFinished || !todo.isComplete)
                            )
                            .map((todo, index) => (

                                <li
                                    key={todo.id}
                                    className="border border-white rounded-xl p-4 bg-blue-500 w-full"
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 w-full flex-wrap items-start">

                                        {/* Text and checkbox section */}
                                        <div className="flex-1 min-w-[200px]">
                                            <label className="flex items-start gap-2 mb-2">
                                                <FaCheck className="text-white mt-1" />
                                                <input
                                                    type="checkbox"
                                                    name={todo.id}
                                                    onChange={handleCheckBox}
                                                    className="w-4 h-4 mt-1 text-white"
                                                    checked={todo.isComplete}
                                                />
                                            </label>

                                            <p
                                                className={`w-full break-words break-all overflow-hidden border border-white rounded-lg p-2 text-white bg-blue-400
    ${todo.isComplete ? 'line-through opacity-70' : ''}
    ${expandedIndex === index ? '' : 'line-clamp-2'}
  `}
                                            >
                                                {todo.text}
                                            </p>


                                            <button
                                                type="button"
                                                onClick={() => toggleExpand(index)}
                                                className="text-sm underline text-white mt-2 self-start flex items-center gap-1"
                                            >
                                                <MdReadMore className="text-lg" />
                                                {expandedIndex === index ? 'Show Less' : 'Read More'}
                                            </button>
                                        </div>

                                        {/* Date and actions section */}
                                        <div className="flex flex-col gap-2 w-full sm:w-[220px]">
                                            <p className="text-sm text-white/80 flex items-center gap-1">
                                                <MdDateRange /> Due: {todo.date || 'No date set'}
                                            </p>

                                            <div className="flex flex-wrap gap-2 sm:flex-col md:flex-row justify-start">
                                                <button
                                                    className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl py-2 px-6 flex items-center justify-center gap-1"
                                                    onClick={(e) => handleEdit(e, todo.id)}
                                                >
                                                    <MdEdit /> Edit
                                                </button>

                                                <button
                                                    className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl py-2 px-6 flex items-center justify-center gap-1"
                                                    onClick={(e) => handleDelete(e, todo.id)}
                                                >
                                                    <MdDelete /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            )
                            )}
                    </ul>
                </div>
            </div>


        </section>
    );
}

export default ToDoContainer;
