'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\naveen\\Documents\\GitHub\\Crowd-Coin\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:

                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:

                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Back')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Create!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdE5ldyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsIl9yZWYyIiwibWFyayIsIl9jYWxsZWUiLCJldmVudCIsImNhbXBhaWduIiwiX3RoaXMkc3RhdGUiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImVycm9yIiwiRmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInF1ZXJ5IiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIiwiX3gyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFOQSxJQUFJQSxlQUFlLDRGQUFuQjs7O0FBUUEsSUFBSUMsYUFBYSxVQUFVQyxVQUFWLEVBQXNCO0FBQ3JDLDBCQUFVRCxVQUFWLEVBQXNCQyxVQUF0Qjs7QUFFQSxXQUFTRCxVQUFULEdBQXNCO0FBQ3BCLFFBQUlFLElBQUo7QUFBQSxRQUNJQyxTQUFTLElBRGI7O0FBR0EsUUFBSUMsS0FBSixFQUFXQyxLQUFYLEVBQWtCQyxJQUFsQjs7QUFFQSxrQ0FBZ0IsSUFBaEIsRUFBc0JOLFVBQXRCOztBQUVBLFNBQUssSUFBSU8sT0FBT0MsVUFBVUMsTUFBckIsRUFBNkJDLE9BQU9DLE1BQU1KLElBQU4sQ0FBcEMsRUFBaURLLE9BQU8sQ0FBN0QsRUFBZ0VBLE9BQU9MLElBQXZFLEVBQTZFSyxNQUE3RSxFQUFxRjtBQUNuRkYsV0FBS0UsSUFBTCxJQUFhSixVQUFVSSxJQUFWLENBQWI7QUFDRDs7QUFFRCxXQUFPTixRQUFRRixTQUFTQyxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDSCxPQUFPRixXQUFXYSxTQUFYLElBQXdCLDhCQUF1QmIsVUFBdkIsQ0FBaEMsRUFBb0VjLElBQXBFLENBQXlFQyxLQUF6RSxDQUErRWIsSUFBL0UsRUFBcUYsQ0FBQyxJQUFELEVBQU9jLE1BQVAsQ0FBY04sSUFBZCxDQUFyRixDQUFqQyxDQUFSLEVBQXFKTCxLQUE5SixHQUFzS0EsTUFBTVksS0FBTixHQUFjO0FBQ2pNQyxhQUFPLEVBRDBMO0FBRWpNQyxtQkFBYSxFQUZvTDtBQUdqTUMsaUJBQVcsRUFIc0w7QUFJak1DLGVBQVMsS0FKd0w7QUFLak1DLG9CQUFjO0FBTG1MLEtBQXBMLEVBTVpqQixNQUFNa0IsUUFBTixHQUFpQixZQUFZO0FBQzlCLFVBQUlDLFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUMzRixZQUFJQyxRQUFKLEVBQWNDLFdBQWQsRUFBMkJWLFdBQTNCLEVBQXdDRCxLQUF4QyxFQUErQ0UsU0FBL0MsRUFBMERVLFFBQTFEOztBQUVBLGVBQU8sc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUMxRCxpQkFBTyxDQUFQLEVBQVU7QUFDUixvQkFBUUEsU0FBU0MsSUFBVCxHQUFnQkQsU0FBU0UsSUFBakM7QUFDRSxtQkFBSyxDQUFMO0FBQ0VSLHNCQUFNUyxjQUFOOztBQUVBUiwyQkFBVyx3QkFBU3ZCLE1BQU1nQyxLQUFOLENBQVlDLE9BQXJCLENBQVg7QUFDQVQsOEJBQWN4QixNQUFNWSxLQUFwQixFQUEyQkUsY0FBY1UsWUFBWVYsV0FBckQsRUFBa0VELFFBQVFXLFlBQVlYLEtBQXRGLEVBQTZGRSxZQUFZUyxZQUFZVCxTQUFySDs7QUFHQWYsc0JBQU1rQyxRQUFOLENBQWUsRUFBRWxCLFNBQVMsSUFBWCxFQUFpQkMsY0FBYyxFQUEvQixFQUFmOztBQUVBVyx5QkFBU0MsSUFBVCxHQUFnQixDQUFoQjtBQUNBRCx5QkFBU0UsSUFBVCxHQUFnQixDQUFoQjtBQUNBLHVCQUFPLGNBQUtLLEdBQUwsQ0FBU0MsV0FBVCxFQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDRVgsMkJBQVdHLFNBQVNTLElBQXBCO0FBQ0FULHlCQUFTRSxJQUFULEdBQWdCLEVBQWhCO0FBQ0EsdUJBQU9QLFNBQVNlLE9BQVQsQ0FBaUJDLGFBQWpCLENBQStCekIsV0FBL0IsRUFBNEMsY0FBSzBCLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQjVCLEtBQWpCLEVBQXdCLE9BQXhCLENBQTVDLEVBQThFRSxTQUE5RSxFQUF5RjJCLElBQXpGLENBQThGLEVBQUVDLE1BQU1sQixTQUFTLENBQVQsQ0FBUixFQUE5RixDQUFQOztBQUVGLG1CQUFLLEVBQUw7O0FBRUUsK0JBQU9tQixTQUFQLENBQWlCLGdCQUFnQjVDLE1BQU1nQyxLQUFOLENBQVlDLE9BQTVCLEdBQXNDLFdBQXZEO0FBQ0FMLHlCQUFTRSxJQUFULEdBQWdCLEVBQWhCO0FBQ0E7O0FBRUYsbUJBQUssRUFBTDtBQUNFRix5QkFBU0MsSUFBVCxHQUFnQixFQUFoQjtBQUNBRCx5QkFBU2lCLEVBQVQsR0FBY2pCLFNBQVMsT0FBVCxFQUFrQixDQUFsQixDQUFkOztBQUVBNUIsc0JBQU1rQyxRQUFOLENBQWUsRUFBRWpCLGNBQWNXLFNBQVNpQixFQUFULENBQVlDLE9BQTVCLEVBQWY7O0FBRUYsbUJBQUssRUFBTDs7QUFFRTlDLHNCQUFNa0MsUUFBTixDQUFlLEVBQUVsQixTQUFTLEtBQVgsRUFBZjs7QUFFRixtQkFBSyxFQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPWSxTQUFTbUIsSUFBVCxFQUFQO0FBckNKO0FBdUNEO0FBQ0YsU0ExQ00sRUEwQ0oxQixPQTFDSSxFQTBDS3ZCLE1BMUNMLEVBMENhLENBQUMsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFELENBMUNiLENBQVA7QUEyQ0QsT0E5QzJDLENBQWhDLENBQVo7O0FBZ0RBLGFBQU8sVUFBVWtELEVBQVYsRUFBYztBQUNuQixlQUFPN0IsTUFBTVQsS0FBTixDQUFZLElBQVosRUFBa0JQLFNBQWxCLENBQVA7QUFDRCxPQUZEO0FBR0QsS0FwRG1CLEVBTkwsRUEwRFZKLEtBMURFLEdBMERNLHlDQUEyQkMsS0FBM0IsRUFBa0NDLElBQWxDLENBMURiO0FBMkREOztBQUVELDZCQUFhTixVQUFiLEVBQXlCLENBQUM7QUFDeEJzRCxTQUFLLFFBRG1CO0FBRXhCcEMsV0FBTyxTQUFTcUMsTUFBVCxHQUFrQjtBQUN2QixVQUFJQyxTQUFTLElBQWI7O0FBRUEsYUFBTyxnQkFBTUMsYUFBTixtQkFFTDtBQUNFQyxrQkFBVTtBQUNSQyxvQkFBVTVELFlBREY7QUFFUjZELHNCQUFZO0FBRko7QUFEWixPQUZLLEVBUUwsZ0JBQU1ILGFBQU4sZUFFRSxFQUFFSSxPQUFPLGdCQUFnQixLQUFLeEIsS0FBTCxDQUFXQyxPQUEzQixHQUFxQyxXQUE5QyxFQUEyRG9CLFVBQVU7QUFDakVDLG9CQUFVNUQsWUFEdUQ7QUFFakU2RCxzQkFBWTtBQUZxRDtBQUFyRSxPQUZGLEVBT0UsZ0JBQU1ILGFBQU4sQ0FDRSxHQURGLEVBRUU7QUFDRUMsa0JBQVU7QUFDUkMsb0JBQVU1RCxZQURGO0FBRVI2RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLE1BUkYsQ0FQRixDQVJLLEVBMEJMLGdCQUFNSCxhQUFOLENBQ0UsSUFERixFQUVFO0FBQ0VDLGtCQUFVO0FBQ1JDLG9CQUFVNUQsWUFERjtBQUVSNkQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxrQkFSRixDQTFCSyxFQW9DTCxnQkFBTUgsYUFBTix3QkFFRSxFQUFFbEMsVUFBVSxLQUFLQSxRQUFqQixFQUEyQnVDLE9BQU8sQ0FBQyxDQUFDLEtBQUs3QyxLQUFMLENBQVdLLFlBQS9DLEVBQTZEb0MsVUFBVTtBQUNuRUMsb0JBQVU1RCxZQUR5RDtBQUVuRTZELHNCQUFZO0FBRnVEO0FBQXZFLE9BRkYsRUFPRSxnQkFBTUgsYUFBTixDQUNFLHNCQUFLTSxLQURQLEVBRUU7QUFDRUwsa0JBQVU7QUFDUkMsb0JBQVU1RCxZQURGO0FBRVI2RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGdCQUFNSCxhQUFOLENBQ0UsT0FERixFQUVFO0FBQ0VDLGtCQUFVO0FBQ1JDLG9CQUFVNUQsWUFERjtBQUVSNkQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxhQVJGLENBUkYsRUFrQkUsZ0JBQU1ILGFBQU4seUJBQTJCO0FBQ3pCdkMsZUFBTyxLQUFLRCxLQUFMLENBQVdFLFdBRE87QUFFekI2QyxrQkFBVSxTQUFTQSxRQUFULENBQWtCckMsS0FBbEIsRUFBeUI7QUFDakMsaUJBQU82QixPQUFPakIsUUFBUCxDQUFnQixFQUFFcEIsYUFBYVEsTUFBTXNDLE1BQU4sQ0FBYS9DLEtBQTVCLEVBQWhCLENBQVA7QUFDRCxTQUp3QjtBQUt6QndDLGtCQUFVO0FBQ1JDLG9CQUFVNUQsWUFERjtBQUVSNkQsc0JBQVk7QUFGSjtBQUxlLE9BQTNCLENBbEJGLENBUEYsRUFvQ0UsZ0JBQU1ILGFBQU4sQ0FDRSxzQkFBS00sS0FEUCxFQUVFO0FBQ0VMLGtCQUFVO0FBQ1JDLG9CQUFVNUQsWUFERjtBQUVSNkQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxnQkFBTUgsYUFBTixDQUNFLE9BREYsRUFFRTtBQUNFQyxrQkFBVTtBQUNSQyxvQkFBVTVELFlBREY7QUFFUjZELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsZ0JBUkYsQ0FSRixFQWtCRSxnQkFBTUgsYUFBTix5QkFBMkI7QUFDekJ2QyxlQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FETztBQUV6QjhDLGtCQUFVLFNBQVNBLFFBQVQsQ0FBa0JyQyxLQUFsQixFQUF5QjtBQUNqQyxpQkFBTzZCLE9BQU9qQixRQUFQLENBQWdCLEVBQUVyQixPQUFPUyxNQUFNc0MsTUFBTixDQUFhL0MsS0FBdEIsRUFBaEIsQ0FBUDtBQUNELFNBSndCO0FBS3pCd0Msa0JBQVU7QUFDUkMsb0JBQVU1RCxZQURGO0FBRVI2RCxzQkFBWTtBQUZKO0FBTGUsT0FBM0IsQ0FsQkYsQ0FwQ0YsRUFpRUUsZ0JBQU1ILGFBQU4sQ0FDRSxzQkFBS00sS0FEUCxFQUVFO0FBQ0VMLGtCQUFVO0FBQ1JDLG9CQUFVNUQsWUFERjtBQUVSNkQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxnQkFBTUgsYUFBTixDQUNFLE9BREYsRUFFRTtBQUNFQyxrQkFBVTtBQUNSQyxvQkFBVTVELFlBREY7QUFFUjZELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsV0FSRixDQVJGLEVBa0JFLGdCQUFNSCxhQUFOLHlCQUEyQjtBQUN6QnZDLGVBQU8sS0FBS0QsS0FBTCxDQUFXRyxTQURPO0FBRXpCNEMsa0JBQVUsU0FBU0EsUUFBVCxDQUFrQnJDLEtBQWxCLEVBQXlCO0FBQ2pDLGlCQUFPNkIsT0FBT2pCLFFBQVAsQ0FBZ0IsRUFBRW5CLFdBQVdPLE1BQU1zQyxNQUFOLENBQWEvQyxLQUExQixFQUFoQixDQUFQO0FBQ0QsU0FKd0I7QUFLekJ3QyxrQkFBVTtBQUNSQyxvQkFBVTVELFlBREY7QUFFUjZELHNCQUFZO0FBRko7QUFMZSxPQUEzQixDQWxCRixDQWpFRixFQThGRSxnQkFBTUgsYUFBTiwyQkFBNkIsRUFBRUssT0FBTyxJQUFULEVBQWVJLFFBQVEsT0FBdkIsRUFBZ0NDLFNBQVMsS0FBS2xELEtBQUwsQ0FBV0ssWUFBcEQsRUFBa0VvQyxVQUFVO0FBQ3JHQyxvQkFBVTVELFlBRDJGO0FBRXJHNkQsc0JBQVk7QUFGeUY7QUFBNUUsT0FBN0IsQ0E5RkYsRUFtR0UsZ0JBQU1ILGFBQU4sMEJBRUUsRUFBRVcsU0FBUyxJQUFYLEVBQWlCL0MsU0FBUyxLQUFLSixLQUFMLENBQVdJLE9BQXJDLEVBQThDcUMsVUFBVTtBQUNwREMsb0JBQVU1RCxZQUQwQztBQUVwRDZELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxTQVBGLENBbkdGLENBcENLLENBQVA7QUFrSkQ7QUF2SnVCLEdBQUQsQ0FBekIsRUF3SkksQ0FBQztBQUNITixTQUFLLGlCQURGO0FBRUhwQyxXQUFPLFlBQVk7QUFDakIsVUFBSW1ELFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9CNUMsSUFBcEIsQ0FBeUIsU0FBUzZDLFFBQVQsQ0FBa0JqQyxLQUFsQixFQUF5QjtBQUM1RixZQUFJQyxPQUFKO0FBQ0EsZUFBTyxzQkFBb0JQLElBQXBCLENBQXlCLFNBQVN3QyxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUM1RCxpQkFBTyxDQUFQLEVBQVU7QUFDUixvQkFBUUEsVUFBVXRDLElBQVYsR0FBaUJzQyxVQUFVckMsSUFBbkM7QUFDRSxtQkFBSyxDQUFMO0FBQ0VHLDBCQUFVRCxNQUFNb0MsS0FBTixDQUFZbkMsT0FBdEI7QUFDQSx1QkFBT2tDLFVBQVVFLE1BQVYsQ0FBaUIsUUFBakIsRUFBMkIsRUFBRXBDLFNBQVNBLE9BQVgsRUFBM0IsQ0FBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPa0MsVUFBVXBCLElBQVYsRUFBUDtBQVBKO0FBU0Q7QUFDRixTQVpNLEVBWUprQixRQVpJLEVBWU0sSUFaTixDQUFQO0FBYUQsT0FmMkMsQ0FBaEMsQ0FBWjs7QUFpQkEsZUFBU0ssZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsZUFBT1AsTUFBTXRELEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT21FLGVBQVA7QUFDRCxLQXZCTTtBQUZKLEdBQUQsQ0F4Sko7O0FBb0xBLFNBQU8zRSxVQUFQO0FBQ0QsQ0FqUWdCLGtCQUFqQjs7a0JBbVFlQSxVIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnQzpcXFxcVXNlcnNcXFxcbmF2ZWVuXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcQ3Jvd2QtQ29pblxcXFxwYWdlc1xcXFxjYW1wYWlnbnNcXFxccmVxdWVzdHNcXFxcbmV3LmpzP2VudHJ5JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG52YXIgUmVxdWVzdE5ldyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZXF1ZXN0TmV3LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXF1ZXN0TmV3KCkge1xuICAgIHZhciBfcmVmLFxuICAgICAgICBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXF1ZXN0TmV3KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBSZXF1ZXN0TmV3Ll9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFJlcXVlc3ROZXcpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHJlY2lwaWVudDogJycsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZTogJydcbiAgICB9LCBfdGhpcy5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZXZlbnQpIHtcbiAgICAgICAgdmFyIGNhbXBhaWduLCBfdGhpcyRzdGF0ZSwgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQsIGFjY291bnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oX3RoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSwgZGVzY3JpcHRpb24gPSBfdGhpcyRzdGF0ZS5kZXNjcmlwdGlvbiwgdmFsdWUgPSBfdGhpcyRzdGF0ZS52YWx1ZSwgcmVjaXBpZW50ID0gX3RoaXMkc3RhdGUucmVjaXBpZW50O1xuXG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5jcmVhdGVSZXF1ZXN0KGRlc2NyaXB0aW9uLCB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCAnZXRoZXInKSwgcmVjaXBpZW50KS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcblxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJy9jYW1wYWlnbnMvJyArIF90aGlzLnByb3BzLmFkZHJlc3MgKyAnL3JlcXVlc3RzJyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbJ2NhdGNoJ10oNCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogX2NvbnRleHQudDAubWVzc2FnZSB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCBfdGhpczIsIFtbNCwgMTNdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVxdWVzdE5ldywgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExheW91dCxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogNDdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTGluayxcbiAgICAgICAgICB7IHJvdXRlOiAnL2NhbXBhaWducy8nICsgdGhpcy5wcm9wcy5hZGRyZXNzICsgJy9yZXF1ZXN0cycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdCYWNrJ1xuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDUxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQ3JlYXRlIGEgUmVxdWVzdCdcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBGb3JtLFxuICAgICAgICAgIHsgb25TdWJtaXQ6IHRoaXMub25TdWJtaXQsIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgRm9ybS5GaWVsZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDYyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2M1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ1ZhbHVlIGluIEV0aGVyJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnUmVjaXBpZW50J1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucmVjaXBpZW50LFxuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgcmVjaXBpZW50OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3MlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzIScsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3OVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICB7IHByaW1hcnk6IHRydWUsIGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDgwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQ3JlYXRlISdcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdnZXRJbml0aWFsUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihwcm9wcykge1xuICAgICAgICB2YXIgYWRkcmVzcztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoJ3JldHVybicsIHsgYWRkcmVzczogYWRkcmVzcyB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMiwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhfeDIpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gUmVxdWVzdE5ldztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdE5ldyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsIl9yZWYyIiwibWFyayIsIl9jYWxsZWUiLCJldmVudCIsImNhbXBhaWduIiwiX3RoaXMkc3RhdGUiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImVycm9yIiwiRmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInF1ZXJ5IiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIiwiX3gyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFD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RSxnQkFBTUgsYUFBTiwyQkFBNkIsRUFBRUssT0FBTyxJQUFULEVBQWVJLFFBQVEsT0FBdkIsRUFBZ0NDLFNBQVMsS0FBS2xELEtBQUwsQ0FBV0ssWUFBcEQsRUFBa0VvQyxVQUFVO0FBQ3JHQyxvQkFBVTVELFlBRDJGO0FBRXJHNkQsc0JBQVk7QUFGeUY7QUFBNUUsT0FBN0IsQ0E5RkYsRUFtR0UsZ0JBQU1ILGFBQU4sMEJBRUUsRUFBRVcsU0FBUyxJQUFYLEVBQWlCL0MsU0FBUyxLQUFLSixLQUFMLENBQVdJLE9BQXJDLEVBQThDcUMsVUFBVTtBQUNwREMsb0JBQVU1RCxZQUQwQztBQUVwRDZELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxTQVBGLENBbkdGLENBcENLLENBQVA7QUFrSkQ7QUF2SnVCLEdBQUQsQ0FBekIsRUF3SkksQ0FBQztBQUNITixTQUFLLGlCQURGO0FBRUhwQyxXQUFPLFlBQVk7QUFDakIsVUFBSW1ELFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9CNUMsSUFBcEIsQ0FBeUIsU0FBUzZDLFFBQVQsQ0FBa0JqQyxLQUFsQixFQUF5QjtBQUM1RixZQUFJQyxPQUFKO0FBQ0EsZUFBTyxzQkFBb0JQLElBQXBCLENBQXlCLFNBQVN3QyxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUM1RCxpQkFBTyxDQUFQLEVBQVU7QUFDUixvQkFBUUEsVUFBVXRDLElBQVYsR0FBaUJzQyxVQUFVckMsSUFBbkM7QUFDRSxtQkFBSyxDQUFMO0FBQ0VHLDBCQUFVRCxNQUFNb0MsS0FBTixDQUFZbkMsT0FBdEI7QUFDQSx1QkFBT2tDLFVBQVVFLE1BQVYsQ0FBaUIsUUFBakIsRUFBMkIsRUFBRXBDLFNBQVNBLE9BQVgsRUFBM0IsQ0FBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPa0MsVUFBVXBCLElBQVYsRUFBUDtBQVBKO0FBU0Q7QUFDRixTQVpNLEVBWUprQixRQVpJLEVBWU0sSUFaTixDQUFQO0FBYUQsT0FmMkMsQ0FBaEMsQ0FBWjs7QUFpQkEsZUFBU0ssZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsZUFBT1AsTUFBTXRELEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT21FLGVBQVA7QUFDRCxLQXZCTTtBQUZKLEdBQUQsQ0F4Sko7O0FBb0xBLFNBQU8zRSxVQUFQO0FBQ0QsQ0FqUWdCLGtCQUFqQjs7a0JBbVFlQSxVIiwiZmlsZSI6InVua25vd24ifQ==