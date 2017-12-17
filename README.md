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

  /\*\* Define accessor

  * see: https://github.com/d3/d3-array#d3-array
  * define x and what data point we want for each x at that d/data point,
  * then do same for y
  * for x we want the date on the returned bitcoin value json
  * for y we want the price on that d / data point
    \*/

    /\*\* Scale value to map value from a domain to range

  * see: https://github.com/d3/d3-scale
  * range defines starting point for data to show and endpoint
  * domain is what data to spread over that range.
    \*/

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

* example: https://bl.ocks.org/mbostock/1086421
* LinearGradient defines the properties of what we want the gradient to look like. We give an id so we can call it in the shape we want to show that gradient look in.
* <LinearGradient needs an id attribute, from attr for starting color to for last color in the gradient range. Also define what opacity start and finish you want with same syntax.

- you end up with the fill getting less opaque the higher up the line vectors

```js
<LinearGradient
  id="area-fill"
  from="somecolor code"
  to="some color code"
  fromOpacity={0.3}
  toOpacity={0}
/>
```

* then pass the id to an shape fill attribute.

```js
<AreaClosed
  data={data}
  yScale={yScale}
  xScale={xScale}
  x={x}
  y={y}
  fill="url(#area-fill)"
  stroke="transparent" // stroke is the black line at bottom of chart, transparent value makes it invisibile, no color so cant see.
/>
```

## maxprice.js

* call <MaxPrice in chart.js. nice trick to pass empty object to data since we dont know what we want to pass yet. Allows image to compile and render so we can see while thinking through it.

```js
<MaxPrice data={{}} yScale={yScale} xScale={xScale} x={x} y={y} />
```

## maxPrice data

* data is an array of objects that will have values we want to render on the x axis at top of chart. Each point will be result of a function to calculate diff in prices that we have to create. `<MaxPrice data={[{},{}]}`. x should go from the first point on the top left and move across to the right to end of chart. Y value is a constant being are maxPrice. x is a function that calculates diff of max price to current price.

```js
const firstPoint = data[0];
const currentPoint = data[data.length -1];

<MaxPrice data={[{
  time: x(firstPoint),
  price: y(maxPrice)
},{
  time: x(currentPoint),
  price: y(maxPrice)
}]}
label={maxprice}
yText={yScale(maxPrice)}
```

## yText attr

* set value of yText attr to yScale() passing in maxPrice which spreads the values of `const maxPrice = Math.max(...data.map(y));` into the yText label space.

- in maxprice component add attr `fill="white" dy="1.3em" dx="1em"` to style so the yText shows. The text element is used to write text at a location. The location is given in absolute terms with the x and y attributes or a relative location with dx and dy attributes. see: http://www.svgbasics.com/simple_text.html

## AxisBottom

* use to show days from data at the bottom.
* place at beginning of svg element so it shows everywhere?

- `numTicks={4}` attr, tells the element to only render the bottom values every 4 ticks, gets us less crowded axis-bottom

## tickLabelComponent

* a formatted text component around each tick value

- color isnt rendering for some reason, TODO

```js
tickLabelComponent={<text fill="#ffffff" fontSize={11} />}
```

## Tooltips @vx/tooltip

* import withTooltip HOC, toolTip.

- HOC has methods tooltipLeft, tooltipRight, tooltipData, showtoolTip, hidetoolTip that we can call once we pass are chart into it in export.

* goal is to use tool tip to show some additional info about where mouse is pointed anywhere on the chart. We can import Bar from Shape, and let it track our mouse. Bar can be invisible, just using for tracking.
* import Bar from "@vx/shape";

- create reference from mouse coordinates to svg coordinates to get data at that point
- to do this we need to store a reference to the svg. We need to change chart component to class component because we need state from svg which we will access via props.

- create ref in <svg> `<svg ref={s => this.svg - s}...>`, we will ref this in <Bar later.
- set up <Bar /> to track mouse movements

```js
<Bar
  width={width}
  height={height}
  fill="transparent"
  onMouseMove={data => event => {}}
  onMouseLeave={data => event => {}}
/>
```

* converting local coords to x/y coord
* localPoint is where you pass in your svg ref.
* x coord is aliased to xPoint

```js
onMouseMove={data => event => {
  const {x: xPoint} = localPoint(this.svg, event);

  // get x at 0 by inverting xPoint value through xScale() invert method
  const x0 = xScale.invert(xPoint);
}}
```
