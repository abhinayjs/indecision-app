class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component{
    render () {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Dont let a computer control your life.</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render () {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                This is option
            </div>
        )
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                Add Option
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));