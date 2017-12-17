import { LinePath } from "@vx/shape";

export default ({ data, label, yScale, xScale, yText, x, y }) => {
  return (
    // <g> = group tag
    <g>
      <LinePath data={data} yScale={yScale} xScale={xScale} x={x} y={y} />
      <text y={yText} fontSize="12">
        {label}
      </text>
    </g>
  );
};
