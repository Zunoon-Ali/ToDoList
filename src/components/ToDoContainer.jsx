import React, { useState } from 'react';

function ToDoContainer() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [todoText, setTodoText] = useState('');

    const todos = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius?...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius?...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius?...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius?...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius?...',
        },
        {
            id: 2,
            text: 'Facilis, nostrum nobis! Tenetur dolorem id corporis corrupti...',
        },
        {
            id: 3,
            text: 'Natus dolor inventore corrupti! Sapiente sequi fugit repellat...',
        },
        {
            id: 4,
            text: 'Another long task description to test the layout and spacing...',
        },
        {
            id: 5,
            text: 'Short note for the list to check overall display balance...',
        },
        {
            id: 6,
            text: 'Short note for the list to check overall display balance...',
        },
        {
            id: 7,
            text: 'Short note for the list to check overall display balance...',
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <section
            id="todoContainer"
            className="flex flex-col md:flex-row items-start justify-between w-[95%] mx-auto bg-violet-400 text-white rounded-lg shadow-lg p-6 my-2 max-h-[90vh] overflow-hidden gap-6"
        >
            {/* LEFT SIDE */}
            <div className="left w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">ToDo App</h1>
                <p className="text-lg mb-2">Manage your daily tasks efficiently with this simple app.</p>
                <p className="text-md text-white/70 mb-4">Add new tasks, view details, and stay organized!</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3198/3198594.png"
                    alt="Todo Illustration"
                    className="w-full max-w-xs mt-8"
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="right w-full md:w-1/2 flex flex-col h-full overflow-hidden min-h-screen">
                <div className="addTodo w-full mb-3">
                    <h1 className="text-2xl font-bold mb-2">Add Todo</h1>
                    <textarea
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        placeholder="Enter your todo..."
                        className="w-full h-32 p-3 rounded-xl text-black focus:outline-none resize-none bg-violet-100 text-sm"
                    />
                </div>

                <div className="todoList w-full  pr-1">
                    <h1 className="text-2xl font-bold mb-2 sticky top-0 bg-violet-400 z-10 py-2">Todo List</h1>
                    <ul className="flex flex-col gap-4 max-h-[45vh] pr-1 overflow-y-auto">
                        {todos.map((todo, index) => (
                            <li
                                key={todo.id}
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-white rounded-xl p-4 gap-4 bg-violet-500"
                            >
                                <div className="flex flex-col flex-1 w-full">
                                    <p
                                        className={`break-words ${expandedIndex === index ? '' : 'line-clamp-2'}`}
                                    >
                                        {todo.text}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => toggleExpand(index)}
                                        className="text-sm underline text-white mt-2 self-start"
                                    >
                                        {expandedIndex === index ? 'Show Less' : 'Read More'}
                                    </button>
                                </div>
                                <div className="todoOperations flex gap-2 self-end sm:self-auto">
                                    <button className="bg-white text-violet-600 hover:bg-violet-600 hover:text-white rounded-xl py-2 px-4">
                                        Edit
                                    </button>
                                    <button className="bg-white text-violet-600 hover:bg-violet-600 hover:text-white rounded-xl py-2 px-4">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ToDoContainer;
