var container = document.getElementById('container');
var todo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};
container.innerHTML = "\n\t<div todo=\"" + todo.id + "\" class=\"todo-container\">\n\t\t<div class=\"" + (todo.completed ? "" : "hidden") + " primary text-primary\">\n\t\t\t<span>" + todo.name + "</span>\n\t\t</div>\n\t</div>\n";
