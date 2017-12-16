import {LinearGradient} from '@vx/gradient';
import {withScreenSize} from '@vx/responsive';

function Background({width, height}) {
	return (
        <svg width={width} height={height}>
            <LinearGradient id="fill" vertical={false}>
                <stop stopColor="#a943e4" offset="0%" />
                <stop stopColor="#f55989" offset="50%" />
                <stop stopColor="#ffaf84" offset="100%" />
            </LinearGradient>
            {/* <rect fill attribute is pointing to <LG id="fill" */}
        <rect width={width} height={height} fill="url(#fill)"/>
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
	componentDidMount() {
		fetch('http://localhost:8000')
        .then(res => res.json())
        .then(json => {
            this.setState({
                data: json
            });
        });
	}
	render() {
		const {screenWidth, screenHeight} = this.props;
		const {data} = this.state;
		console.log(data);
		return (
		<div className="app">
            <Background width={screenWidth} height={screenHeight} />
            <div className="center">
                <div className="chart">Chart</div>
            </div>
            <style jsx>{`
            .app,
            .center {
                display:flex;
                position: absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                flex:1;
                justify-content: center;
                align-items: center;
                font-family: arial;
            }
            .chart {
                width: 600px;
                height: 400px;
                background-color: #27273f;
                border-radius: 8px;
                color: white;
            }       
            `}</style>

        </div>
		);
	}
}

export default withScreenSize(App);
