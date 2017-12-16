/** Get with and heigth from this components parent
 * container and pass it to <Chart params with HOC
 */
import {withParentSize} from '@vx/responsive';

function Chart({parentWidth, parentHeight}) {
	return (
        <div>
            <div className="title">
                CAC40 VS NASDAQ 
            </div>
            <svg width={parentWidth} height={parentHeight}>
                <rect width={parentWidth} height={parentHeight} fill="steelblue"/>
            </svg>
        </div>
        
	);
}

export default withParentSize(Chart);
