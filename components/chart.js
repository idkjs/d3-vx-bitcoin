/** Get with and heigth from this components parent
 * container and pass it to <Chart params with HOC.
 * 
 * svg is expecting width and heigth params since we moved title in here
 * we need to calculate the margines for rendering the title inside 
 * this component. We can do that with the info we get from parentSize
 */
import {withParentSize} from '@vx/responsive';

function Chart({parentWidth, parentHeight}) {
    /** define margin for this div to pass to calculation for svg */
    const margin = {
        top: 15,
        bottom: 40,
        left: 0,
        right:0
    }
    const width = parentWidth - margin.left - margin.right;
    const height = parentHeight - margin.top - margin.bottom;
	return (
        <div>
            <div className="title">
                CAC40 VS NASDAQ 
            </div>
            <svg width={width} height={height}>
                <rect width={width} height={height} fill="steelblue"/>
            </svg>
        </div>
        
	);
}

export default withParentSize(Chart);
