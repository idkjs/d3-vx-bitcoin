/** Get with and heigth from this components parent
 * container and pass it to <Chart params with HOC
 */
import {withParentSize} from '@vx/responsive';

function Chart({parentWidth, parentHeight}) {
	return (
        <svg width={parentWidth} height={parentHeight}>
            <rect width={parentWidth} height={parentHeight} fill="steelblue"/>
        </svg>
	);
}

export default withParentSize(Chart);
