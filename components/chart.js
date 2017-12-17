import { withParentSize } from "@vx/responsive";
import { scaleTime, scaleLinear } from "@vx/scale";
import { LinePath, AreaClosed, Bar, Line } from "@vx/shape";
import { LinearGradient } from "@vx/gradient";
import { AxisBottom } from "@vx/axis";
import { localPoint } from "@vx/event";
import { withTooltip, toolTip } from "@vx/tooltip";
import formatPrice from "../utils/formatPrice";

import MaxPrice from "./maxprice";
import MinPrice from "./minprice";
import { bisector } from "d3-array";

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      data,
      parentWidth,
      parentHeight,
      tooltipLeft,
      tooltipRight,
      tooltipData,
      showtoolTip,
      hideTooltip
    } = this.props;

    /** Define margin for this div to pass to calculation for svg */
    const margin = {
      top: 15,
      bottom: 40,
      left: 0,
      right: 0
    };
    const width = parentWidth - margin.left - margin.right;
    const height = parentHeight - margin.top - margin.bottom;

    const bisectDate = bisector(d => x(d)).left;
    /** Define accessors and values to be passed to our shapes
     */

    const x = d => new Date(d.time);
    const y = d => d.price;

    const firstPoint = data[0];
    const currentPoint = data[data.length - 1];

    const minPrice = Math.min(...data.map(y));
    const maxPrice = Math.max(...data.map(y));
    const maxPriceData = [
      { time: x(firstPoint), price: maxPrice },
      { time: x(currentPoint), price: maxPrice }
    ];

    const minPriceData = [
      { time: x(firstPoint), price: minPrice },
      { time: x(currentPoint), price: minPrice }
    ];

    const xScale = scaleTime({
      range: [0, width],
      domain: [Math.min(...data.map(x)), Math.max(...data.map(x))]
    });
    /** Defines the scale of a y axis line */
    const yScale = scaleLinear({
      range: [height, 0],
      domain: [minPrice, maxPrice]
    });

    // Console.log(xScale.domain());
    // console.log(yScale.domain());

    /* end accessor values */
    //   call <LinePath, pass in the data, xScale, yScale domain mappers,
    //  and x and y accessors
    return (
      <div>
        <svg ref={s => this.svg - s} width={width} height={parentHeight}>
          {/* top: shortcut for translate y value */}
          <AxisBottom
            top={yScale(minPrice)}
            data={data}
            scale={xScale}
            x={x}
            numTicks={4}
            hideAxisLine
            hideTicks
            tickLabelComponent={<text fill="#ffffff" fontSize={11} />}
          />
          <LinearGradient
            id="area-fill"
            from="#46a2b4"
            to="#46a2b4"
            fromOpacity={0.3}
            toOpacity={0}
          />
          <MaxPrice
            data={maxPriceData}
            yScale={yScale}
            xScale={xScale}
            x={x}
            y={y}
            label={formatPrice(maxPrice)}
            yText={yScale(maxPrice)}
          />
          <MinPrice
            data={minPriceData}
            yScale={yScale}
            xScale={xScale}
            x={x}
            y={y}
            label={formatPrice(minPrice)}
            yText={yScale(minPrice)}
          />
          <AreaClosed
            data={data}
            yScale={yScale}
            xScale={xScale}
            x={x}
            y={y}
            fill="url(#area-fill)"
            stroke="transparent"
          />
          <LinePath data={data} yScale={yScale} xScale={xScale} x={x} y={y} />
          <Bar
            data={data}
            width={width}
            height={height}
            fill="transparent"
            onMouseMove={data => event => {
              const { x: xPoint } = localPoint(this.svg, event);
              const x0 = xScale.invert(xPoint);
              const index = bisectDate(data, x0, 1);
              const d = x0 - xScale(x(d0)) > xScale(x(d1)) - x0 ? d1 : d0;
              // Call showtoolTip and define what should shop up at each position
              showtoolTip({
                tooltipLeft: xScale(x(d)),
                tooltipRight: yScale(y(d)),
                tooltipData: d
              });
            }}
            onMouseLeave={data => event => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: yScale(y(maxPriceData[0])) }}
                to={{ x: tooltipLeft, y: yScale(y(minPriceData[0])) }}
                stroke="#ffffff"
              />
            </g>
          )}
        </svg>
      </div>
    );
  }
}

export default withParentSize(withTooltip(Chart));
