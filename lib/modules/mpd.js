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

var MPD = function () {
  function MPD() {
    var port = arguments.length <= 0 || arguments[0] === undefined ? 6600 : arguments[0];
    var host = arguments.length <= 1 || arguments[1] === undefined ? 'localhost' : arguments[1];
    (0, _classCallCheck3.default)(this, MPD);

    this.client = _mpd2.default.connect({ port: port, host: host });

    this.client.on('ready', function (err) {
      if (err) {
        throw new Error(err);
      }
    });

    this.cmd = _mpd2.default.cmd;
  }

  (0, _createClass3.default)(MPD, [{
    key: 'play',
    value: function play() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.client.sendCommand(_this.cmd('play', []), function (err) {
          if (err) {
            reject(err);
          }

          resolve(true);
        });
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {
        _this2.client.sendCommand(_this2.cmd('stop', []), function (err) {
          if (err) {
            reject(err);
          }

          resolve(true);
        });
      });
    }
  }, {
    key: 'playlistAdd',
    value: function playlistAdd(uri) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        _this3.client.sendCommand(_this3.cmd('add', [uri]), function (err) {
          if (err) {
            reject(err);
          }

          resolve(true);
        });
      });
    }
  }, {
    key: 'listall',
    value: function listall() {
      var _this4 = this;

      return new _promise2.default(function (resolve, reject) {
        _this4.client.sendCommand(_this4.cmd('listall', []), function (err, result) {
          if (err) {
            reject(err);
          }

          resolve(result);
        });
      });
    }
  }, {
    key: 'update',
    value: function update(uri) {
      var _this5 = this;

      var args = uri ? [uri] : [];
      return new _promise2.default(function (resolve, reject) {
        _this5.client.sendCommand(_this5.cmd('update', args), function (err, result) {
          if (err) {
            reject(err);
          }

          resolve(result);
        });
      });
    }
  }]);
  return MPD;
}();

exports.default = MPD;
module.exports = exports['default'];