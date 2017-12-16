import { withParentSize } from "@vx/responsive";
// Import d3 methods to render x and y axis
import { scaleTime, scaleLinear } from "@vx/scale";

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

  const xScale = scaleTime({
    range: [0, width],
    domain: [Math.min(...data.map(x)), Math.max(...data.map(x))]
  });
  console.log(xScale.domain());
  return (
    <div>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="steelblue" />
      </svg>
    </div>
  );
}

export default withParentSize(Chart);
