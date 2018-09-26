let visibility = false;

const onToggle = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const visibilityToggle = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>
            {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Here are some details.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(visibilityToggle, document.getElementById('app'))
}

render();
