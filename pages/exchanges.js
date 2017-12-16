 class App extends React.Component {
    // set up state
    constructor(props) {
        super(props);
        // set data to empty object
        this.state = {
            data: {}
        };
    }
    render() {
        const { data } = this.state;
        return <div>App</div>;
    }
}

export default App;