import { withParentSize } from "@vx/responsive";
import { scaleTime, scaleLinear } from "@vx/scale";
import { LinePath, AreaClosed } from "@vx/shape";
import { LinearGradient } from "@vx/gradient";

import MaxPrice from "./maxprice";

function Chart({ data, parentWidth, parentHeight }) {
  /** Define margin for this div to pass to calculation for svg */
  const margin = {
    top: 15,
    bottom: 40,
    left: 0,
    right: 0
  };
  const width = parentWidth - margin.left - margin.right;
  const height = parentHeight - margin.top - margin.bottom;

  /** Define accessors and values to be passed to our shapes
   */

  const x = d => new Date(d.time);
  const y = d => d.price;

  const firstPoint = data[0];
  const currentPoint = data[data.length - 1];

  const minPrice = Math.min(...data.map(y));
  const maxPrice = Math.max(...data.map(y));
  const maxPriceData = [
    {
      time: x(firstPoint),
      price: maxPrice
    },
    {
      time: x(currentPoint),
      price: maxPrice
    }
  ];

  const xScale = scaleTime({
    range: [0, width],
    domain: [Math.min(...data.map(x)), Math.max(...data.map(x))]
  });
  /** defines the scale of a y axis line */
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
      <svg width={width} height={height}>
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
          label={maxPrice}
          yText={yScale(maxPrice)}
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
      </svg>
    </div>
  );
}

export default withParentSize(Chart);
