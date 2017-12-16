"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";
/** 
 * svg is expecting width and heigth params since we moved title in here
 * we need to calculate the margines for rendering the title inside 
 * this component. We can do that with the info we get from parentSize
 */


function Chart(_ref) {
    var parentWidth = _ref.parentWidth,
        parentHeight = _ref.parentHeight;

    /** define margin for this div to pass to calculation for svg */
    var margin = {
        top: 15,
        bottom: 40,
        left: 0,
        right: 0
    };
    var width = parentWidth - margin.left - margin.right;
    var height = parentHeight - margin.top - margin.bottom;
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement("svg", { width: width, height: height, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement("rect", { width: width, height: height, fill: "steelblue", __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJDaGFydCIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxBQUFROzs7OztBQUxSOzs7Ozs7O0FBT0EsU0FBQSxBQUFTLFlBQW1DO1FBQTVCLEFBQTRCLG1CQUE1QixBQUE0QjtRQUFmLEFBQWUsb0JBQWYsQUFBZSxBQUN4Qzs7QUFDQTtRQUFNO2FBQVMsQUFDTixBQUNMO2dCQUZXLEFBRUgsQUFDUjtjQUhXLEFBR0wsQUFDTjtlQUpKLEFBQWUsQUFJTCxBQUVWO0FBTmUsQUFDWDtRQUtFLFFBQVEsY0FBYyxPQUFkLEFBQXFCLE9BQU8sT0FBMUMsQUFBaUQsQUFDakQ7UUFBTSxTQUFTLGVBQWUsT0FBZixBQUFzQixNQUFNLE9BQTNDLEFBQWtELEFBQ3JEOzJCQUNPLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO3NCQUEzQjt3QkFBQSxBQUNJO0FBREo7K0NBQ1UsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztzQkFBekM7d0JBSGYsQUFDTyxBQUNJLEFBQ0ksQUFLZjtBQUxlOztBQU9oQjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9