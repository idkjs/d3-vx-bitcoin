//   Create a Background component for the chart using svg. Define
//  a funtion that takes witdth and height  the produces and
//  svg d3 dom element. define the <svg container then what
//  we want in the container, her a <rect for our chart we can then
//  call the component in our app component wiht some test w/h values
function Background(width, height) {
	return (
        <svg width={width} height={height}>
            <rect
            width={width}
            height={height}
            fill="steelblue"
            />
        </svg>
	);
}

class App extends React.Component {
    // Set up state
	constructor(props) {
		super(props);
        // Set data to empty object
		this.state = {
			data: {}
		};
	}
	render() {
		const {data} = this.state;
		return (
		<div>
            <Background width={100} height={100} />
        </div>
		);
	}
}

export default App;
