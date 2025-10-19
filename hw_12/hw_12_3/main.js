// let element = document.querySelector("#add__task__btb");
// let taskList = document.querySelector("#app__tasks");
//
// element.addEventListener("click", (e) => {
//
//     console.log("clicked add");
//     let taskInfo = document.querySelector("#app__task__input").value.trim();
//     let elementList = document.createElement("li");
//     elementList.classList.add("app__task");
//
//
//     elementList.innerHTML =
//         `<div class="app__task__container">
//                 <input type="checkbox" class="app__task__checkbox">
//                 <span class="app__task__text" data-id="1">${taskInfo}</span>
//             </div>
//             <button id="app__task__remove" class="app__task__remove">
//                 <img src="delete-button.svg" class="remove-btn-img" alt="delete">
//             </button>`;
//
//     taskInfo.value = "";
//     taskList.appendChild(elementList);
// });
//
//
// taskList.addEventListener("click", (e) => {
//     if (e.target.classList.contains("app__task__remove") ||
//         e.target.classList.contains("remove-btn-img")
//     ) {
//         console.log("clicked remove");
//         console.log("clicked:" + e.target.tagName);
//         let taskItem = e.target.closest(".app__task");
//         if (taskItem) {
//             taskItem.remove();
//         }
//     }
// })


// function Car(model, engineVolume) {
//     this.model = model;
//     this.engineVolume = engineVolume;
// }
// console.log(Car.prototype)
//
// Car.prototype.start = function () {
//     console.log(`Starting Car mark BMW: and model: ${this.model} and engineVolume: ${this.engineVolume}`);
// }
//
// function Bmw(model, engineVolume) {
//
//     Car.call(this, model, engineVolume);
// }
//
// Bmw.prototype = Object.create(Car.prototype);
//
// function Mercedes(model, engineVolume) {
//
//     Car.call(this, model, engineVolume);
//
//     this.openRoof = function () {
//         console.log(`Opening Roof model: ${model}`);
//     }
// }
// Mercedes.prototype = Object.create(Car.prototype);
//
// let bmw = new Bmw("M5", 3.5);
// bmw.start();
//
// let mercedes = new Mercedes("S-class", 4.7);
// mercedes.start();
// mercedes.openRoof();


// fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         title: "My first post",
//         body: "My first body in post",
//         userId: 2
//     })
// })
//     .then(res => {
//         console.log(res);
//         return res.json();
//     })
//     .then(data => console.log(data))
// ;
//


// const API_KEY = "https://jsonplaceholder.typicode.com/todos";
//
// const todoList = document.querySelector("#app__tasks")
// const todoFormBtn = document.querySelector("#add__task__btb")
// const todoInput = document.querySelector("#app__task__input")
//
// function loadTodos() {
//
//     todoList.innerHTML = "<div></div>";
//     fetch(`${API_KEY}?_limit=10`)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`Failed to load todos: ${res.statusText}`)
//             }
//             return res.json();
//         }).then(todos => {
//
//         todos.forEach(todo => {
//             let li = createTodElement(todo);
//             todoList.appendChild(li);
//         });
//     })
//         .catch(err => console.error(err.message));
//
// }
//
// function addNewTodo(title) {
//     return fetch(`${API_KEY}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({
//                 title: title,
//                 completed: false,
//                 userId: 1
//             })
//         }
//     ).then(res => {return res.json();});
// }
//
// function toggleTodo(id, completed) {
//     return fetch(`${API_KEY}/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({completed})
//         }
//     ).then(res => {
//             if (!res.ok) {
//                 throw new Error(`Failed to toggle todos: ${res.statusText}`)
//             }
//             return res.json();
//         }).catch(err => console.error(err.message));
// }
//
//
// function deleteTodo(id) {
//     return fetch(`${API_KEY}/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//     ).then(res => {
//         if (!res.ok) {
//             throw new Error(`Failed to delete todo: ${res.statusText}`)
//         }
//         return res.json();
//     })
//         .catch(err => console.error(err.message));
// }
//
// function createTodElement(todo) {
//     const li = document.createElement("li");
//     li.classList.add("app__task");
//     li.dataset.id = todo.id;
//
//     li.innerHTML = `
//             <div class="app__task__container">
//                 <input type="checkbox" class="app__task__checkbox" ${todo.completed ? 'checked' : ''}>
//                 <span class="app__task__text">${todo.title}</span>
//             </div>
//             <button class="app__task__remove">
//                 <img src="delete-button.svg" class="remove-btn-img" alt="delete">
//             </button>`;
//     return li;
// }
//
// loadTodos();
//
//
// todoFormBtn.addEventListener("click", e => {
//     e.preventDefault(); // for undo reload page
//
//     const title = todoInput.value.trim();
//
//     if (!title) {
//         return;
//     }
//
//     addNewTodo(title).then(todo => {
//         console.log(todo);
//         const li = createTodElement(todo);
//         todoList.appendChild(li);
//         todoInput.value = "";
//     }).catch(err => console.error(err.message));
// });
//
//
// todoList.addEventListener("click", e => {
//
//     if (e.target.classList.contains("app__task__remove") ||
//         e.target.classList.contains("remove-btn-img")) {
//
//         let li = e.target.closest(".app__task");
//         const id = li.dataset.id;
//         console.log(id);
//         deleteTodo(id).then(() => {
//             li.remove();
//         }).catch(err => console.error(err.message));
//     }
//
// });
// todoList.addEventListener("change", e => {
//
//     if (e.target.classList.contains("app__task__checkbox")) {
//
//         let li = e.target.closest(".app__task");
//         const id = li.dataset.id;
//         const completed = e.target.checked;
//         console.log(id);
//
//         toggleTodo(id, completed).catch(err => console.error(err.message));
//     }
// });

// console.log("start");
// const timeoutFirstId = setTimeout((first, second) => {
//     console.log("timeout", first, second);
// }, 5000, 13,12);
// console.log(timeoutFirstId);
// clearTimeout(timeoutFirstId);
// console.log("end");
//
//
// let interval = setInterval(() => {
//     console.log("interval");
// }, 2000);
//
//
// setTimeout(() => {
//     clearInterval(interval);
// }, 5000 );
//
// try {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .catch(err => console.error(err.message));
// } catch (e) {
//     console.log(e);
// }

console.log("1");
setTimeout(() => {

    console.log("2");

    new Promise((resolve) => {
        console.log("3");
        resolve();
    }).then(() => {
        console.log("4");
    });
}, 0);

new Promise((resolve) => {
    console.log("5");
    resolve();
}).then(() => {
    console.log("6");

    new Promise((resolve => {
        console.log("7");
        resolve();
    })).then(() => {
        console.log("8");
    })
})

console.log("9");