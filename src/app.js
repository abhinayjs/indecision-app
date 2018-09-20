console.log("App.js is running");

var app = {
    title : 'Indecision App',
    subtitle : 'React Tutorial',
    options :  ['One', 'Two']
};
var template = 
(
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle && app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    </div>
);

var user = {
    name : 'Abhinay Jangati',
    age : 27,
    location : 'Missouri'
};

function getLocation (location) {
    if (location) {
        return <p>Location : {location}</p>
    }
};
var template2 = 
(
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);