"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _shape = require("@vx/shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/maxprice.js";

exports.default = function (_ref) {
  var data = _ref.data,
      label = _ref.label,
      yScale = _ref.yScale,
      xScale = _ref.xScale,
      yText = _ref.yText,
      x = _ref.x,
      y = _ref.y;

  return (
    // <g> = group tag
    _react2.default.createElement("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, _react2.default.createElement(_shape.LinePath, {
      data: data,
      yScale: yScale,
      xScale: xScale,
      x: x,
      y: y,
      strokeDasharray: "4.4",
      strokeOpacity: "0.4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }), _react2.default.createElement("text", { fill: "#6086d6", dy: "1.3em", dx: "1em", y: yText, fontSize: "12", __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, label))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4cHJpY2UuanMiXSwibmFtZXMiOlsiTGluZVBhdGgiLCJkYXRhIiwibGFiZWwiLCJ5U2NhbGUiLCJ4U2NhbGUiLCJ5VGV4dCIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUVUOzs7Ozs7a0JBQWUsZ0JBQWtEO01BQS9DLEFBQStDLFlBQS9DLEFBQStDO01BQXpDLEFBQXlDLGFBQXpDLEFBQXlDO01BQWxDLEFBQWtDLGNBQWxDLEFBQWtDO01BQTFCLEFBQTBCLGNBQTFCLEFBQTBCO01BQWxCLEFBQWtCLGFBQWxCLEFBQWtCO01BQVgsQUFBVyxTQUFYLEFBQVc7TUFBUixBQUFRLFNBQVIsQUFBUSxBQUMvRDs7QUFDRTtBQUNBO29CQUFBLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUM7WUFBRCxBQUNRLEFBQ047Y0FGRixBQUVVLEFBQ1I7Y0FIRixBQUdVLEFBQ1I7U0FKRixBQUlLLEFBQ0g7U0FMRixBQUtLLEFBQ0g7dUJBTkYsQUFNa0IsQUFDaEI7cUJBUEYsQUFPZ0I7O2tCQVBoQjtvQkFERixBQUNFLEFBU0E7QUFUQTtBQUNFLHdCQVFGLGNBQUEsVUFBTSxNQUFOLEFBQVcsV0FBVSxJQUFyQixBQUF3QixTQUFRLElBQWhDLEFBQW1DLE9BQU0sR0FBekMsQUFBNEMsT0FBTyxVQUFuRCxBQUE0RDtrQkFBNUQ7b0JBQUEsQUFDRztBQURIO09BWkosQUFFRSxBQVVFLEFBS0w7O0FBbEJEIiwiZmlsZSI6Im1heHByaWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9