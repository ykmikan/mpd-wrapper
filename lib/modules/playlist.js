'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      return new _promise2.default(function (resolve, reject) {
        var args = void 0;

        if (!uris) {
          reject('error occurred, required uris.');
        } else if (Array.isArray(uris)) {
          args = uris;
        } else if (typeof uris === 'string') {
          args = [uris];
        } else {
          reject('uri type error. uri must be array or string.');
        }

        args.forEach(function (arg) {
          _this.mpd.sendCommand(_this.cmd('add', [arg]), function (err) {
            if (err) {
              reject(err);
            }
          });
        });

        resolve();
      });
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
  }]);
  return Playlist;
}();

exports.default = Playlist;
module.exports = exports['default'];