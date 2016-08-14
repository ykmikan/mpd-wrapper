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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controller = function () {
  function Controller(mpd) {
    (0, _classCallCheck3.default)(this, Controller);

    this.mpd = mpd;
    this.cmd = mpd.cmd;
  }

  (0, _createClass3.default)(Controller, [{
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
    key: 'updateDB',
    value: function updateDB(path) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {
        _this3.client.sendCommand(_this3.cmd('update', path), function (err, result) {
          if (err) {
            reject(err);
          }

          resolve(result);
        });
      });
    }
  }]);
  return Controller;
}();

exports.default = Controller;
module.exports = exports['default'];