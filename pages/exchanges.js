// get responsive HOC d3 stuff to make Background resp.
// call App export with it. Expects screen dimensions in coming
//  in from react props so we destructure them of the props object
// and pass them to Background.
import { withScreenSize } from '@vx/responsive';
function Background({width, height}) {
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
        const { screenWidth, screenHeight} = this.props;
		const { data } = this.state;
		return (
		<div className="app">
            <Background width={screenWidth} height={screenHeight} />
            <style jsx>{`
            .app {
                display:flex;
                position: absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
            }
            `}</style>

        </div>
		);
	}
}

export default withScreenSize(App);
