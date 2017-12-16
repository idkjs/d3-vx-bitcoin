"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";
/** Get with and heigth from this components parent
 * container and pass it to <Chart params with HOC
 */


function Chart(_ref) {
    var parentWidth = _ref.parentWidth,
        parentHeight = _ref.parentHeight;

    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement("div", { className: "title", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, "CAC40 VS NASDAQ"), _react2.default.createElement("svg", { width: parentWidth, height: parentHeight, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement("rect", { width: parentWidth, height: parentHeight, fill: "steelblue", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJDaGFydCIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsQUFBUTs7Ozs7QUFIUjs7Ozs7QUFLQSxTQUFBLEFBQVMsWUFBbUM7UUFBNUIsQUFBNEIsbUJBQTVCLEFBQTRCO1FBQWYsQUFBZSxvQkFBZixBQUFlLEFBQzNDOzsyQkFDTyxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFHQSxvQ0FBQSxjQUFBLFNBQUssT0FBTCxBQUFZLGFBQWEsUUFBekIsQUFBaUM7c0JBQWpDO3dCQUFBLEFBQ0k7QUFESjsrQ0FDVSxPQUFOLEFBQWEsYUFBYSxRQUExQixBQUFrQyxjQUFjLE1BQWhELEFBQXFEO3NCQUFyRDt3QkFOZixBQUNPLEFBSUksQUFDSSxBQUtmO0FBTGU7O0FBT2hCOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=