# with-vx & next.js

* see: https://github.com/hshoff/vx

## deps

* run: `npm i @vx/axis @vx/event @vx/gradient @vx/grid @vx/group @vx/mock-data @vx/pattern @vx/responsive @vx/scale @vx/shape @vx/tooltip d3-array d3-format d3-time-format isomorphic-fetch next react react-dom`

## Gradients in SVG

* see: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients

## quandl.com api

* `tsQv3o6PCk1j23GhkqQi`

## accessor methods for placing chart elements

* see: https://github.com/d3/d3-array#d3-array

/\*\* scale value to map value from a domain to range

* see: https://github.com/d3/d3-scale
  \*/

- accessors - xScale, yScale gets us our data. Now we need a shape to draw the data into. In Charts we use something like LinePath from @vx/shape

## areaClosed /fill

* draws shape between the bottom a line shape and the bottom of the chart.
* example: https://bl.ocks.org/d3noob/119a138ef9bd1d8f0a8d57ea72355252

```js
return (
  <div>
    <svg width={width} height={height}>
      <AreaClosed data={data} yScale={yScale} xScale={xScale} x={x} y={y} />
      <LinePath data={data} yScale={yScale} xScale={xScale} x={x} y={y} />
    </svg>
  </div>
);
```

## LinearGradient to ...
