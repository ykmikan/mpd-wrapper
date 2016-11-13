'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mpd = require('mpd');

var _mpd2 = _interopRequireDefault(_mpd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playlist = function () {
  function Playlist(mpdClient) {
    (0, _classCallCheck3.default)(this, Playlist);

    this.mpd = mpdClient;
    this.cmd = _mpd2.default.cmd;
  }

  (0, _createClass3.default)(Playlist, [{
    key: 'add',
    value: function add(uris) {
      var _this = this;

      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(resolve, reject) {
          var args, i, length, arg, result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  args = void 0;


                  if (!uris) {
                    reject('error occurred, required uris.');
                  } else if (Array.isArray(uris)) {
                    args = uris;
                  } else if (typeof uris === 'string') {
                    args = [uris];
                  } else {
                    reject('uri type error. uri must be array or string.');
                  }

                  i = 0, length = args.length;

                case 3:
                  if (!(i < length)) {
                    _context.next = 12;
                    break;
                  }

                  arg = args[i];
                  _context.next = 7;
                  return _this._sendCommand('add', arg);

                case 7:
                  result = _context.sent;

                  console.log('result ', result);

                case 9:
                  i++;
                  _context.next = 3;
                  break;

                case 12:

                  resolve();

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {
        _this2.mpd.sendCommand(_this2.cmd('clear', []), function (err) {
          if (err) {
            reject(err);
          }

          resolve();
        });
      });
    }
  }, {
    key: '_sendCommand',
    value: function _sendCommand(cmd, arg) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        _this3.mpd.sendCommand(_this3.cmd(cmd, [arg]), function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    }
  }]);
  return Playlist;
}();

exports.default = Playlist;
module.exports = exports['default'];