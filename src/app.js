console.log("App.js is running");

var template = 
(
    <div>
        <h1>Indecision App</h1>
        <p>This is JSX from app.js!!</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name : 'Abhinay Jangati',
    age : 27,
    location : 'Missouri'
};
var template2 = 
(
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);