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
    fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
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
    if (!data.bpi) {
      return <div>Loading...</div>;
    }
    const prices = Object.keys(data.bpi).map(k => {
      return {
        time: k,
        price: data.bpi[k]
      };
    });
    /** we want to current price which will be the last item returned from our api call
     *
     */
    const currentPrice = prices[prices.length - 1].price;
    // console.log(currentPrice);
    return (
      <div className="app">
        <Background width={screenWidth} height={screenHeight} />
        <div className="center">
          <div className="chart">
            <div className="titlebar">
              <div className="title">
                <div>BITCOIN PRICE</div>
                <div>
                  <small>last 30 days</small>
                </div>
              </div>
              <div className="spacer" />
              <div>
                <div>{currentPrice}</div>
              </div>
            </div>
            <div className="container">
              <Chart data={data} />
            </div>
          </div>
          <p className="disclaimer">{data.disclaimer}</p>
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
          .spacer {
            flex: 1;
          }
          .titlebar {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 15px;
          }
          .title {
          }
          .container {
            flex: 1;
            display: flex;
          }
          .disclaimer {
            margin-top: 35px;
            font-size: 11px;
            color: white;
            opacity: 0.4;
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
