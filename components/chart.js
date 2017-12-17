import { withParentSize } from "@vx/responsive";
// Import d3 methods to render x and y axis
import { scaleTime, scaleLinear } from "@vx/scale";
import { LinePath, AreaClosed } from "@vx/shape";
import Area from "@vx/shape/build/shapes/Area";

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

  /** Define accessor
   * see: https://github.com/d3/d3-array#d3-array
   * define x and what data point we want for each x at that d/data point,
   *  then do same for y
   * for x we want the date on the returned bitcoin value json
   * for y we want the price on that d / data point
   */

  const x = d => new Date(d.time);
  const y = d => d.price;

  /** Scale value to map value from a domain to range
   * see: https://github.com/d3/d3-scale
   * range defines starting point for data to show and endpoint
   * domain is what data to spread over that range.
   */

  /** store min max y values to reuse later */

  const minPrice = Math.min(...data.map(y));
  const maxPrice = Math.max(...data.map(y));
  const xScale = scaleTime({
    range: [0, width],
    domain: [Math.min(...data.map(x)), Math.max(...data.map(x))]
  });

  const yScale = scaleLinear({
    range: [height, 0],
    domain: [minPrice, maxPrice]
  });

  console.log(xScale.domain());
  console.log(yScale.domain());

  //   call <LinePath, pass in the data, xScale, yScale domain mappers,
  //  and x and y accessors
  return (
    <div>
      <svg width={width} height={height}>
        <AreaClosed data={data} yScale={yScale} xScale={xScale} x={x} y={y} />
        <LinePath data={data} yScale={yScale} xScale={xScale} x={x} y={y} />
      </svg>
    </div>
  );
}

export default withParentSize(Chart);
