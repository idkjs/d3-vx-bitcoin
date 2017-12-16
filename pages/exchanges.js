import { LinearGradient } from "@vx/gradient";
import { withScreenSize } from "@vx/responsive";
import Chart from "../components/chart";

function Background({ width, height }) {
  return (
    <svg width={width} height={height}>
      <LinearGradient id="fill" vertical={false}>
        <stop stopColor="#a943e4" offset="0%" />
        <stop stopColor="#f55989" offset="50%" />
        <stop stopColor="#ffaf84" offset="100%" />
      </LinearGradient>
      {/* <rect fill attribute is pointing to <LG id="fill" */}
      <rect width={width} height={height} fill="url(#fill)" />
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
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }
  render() {
    const { screenWidth, screenHeight } = this.props;
    const { data } = this.state;
    if (!data.length) {
      return <div>Loading...</div>;
    }
    const prices = Object.keys(data).map(k => {
      return {
        timestamp: k,
        NASDAQ: data[k].stocks.NASDAQ,
        CAC40: data[k].stocks.CAC40
      };
    });
    console.log(prices);
    return (
      <div className="app">
        <Background width={screenWidth} height={screenHeight} />
        <div className="center">
          <div className="chart">
            <div className="title">CAC40 VS NASDAQ</div>
            <div className="container">
              <Chart data={data} />
            </div>
          </div>
        </div>
        <style jsx>{`
          .app,
          .center {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            flex: 1;
            justify-content: center;
            align-items: center;
            font-family: arial;
            flex-direction: column;
          }
          .title {
            padding: 15px;
          }
          .container {
            flex: 1;
            display: flex;
          }
          .chart {
            width: 600px;
            height: 400px;
            background-color: #27273f;
            border-radius: 8px;
            color: white;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}

export default withScreenSize(App);
