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

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

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
    this.controller = new _controller2.default(this.client);
  }

  (0, _createClass3.default)(MPD, [{
    key: 'play',
    value: function play() {
      return this.controller.play();
    }
  }, {
    key: 'stop',
    value: function stop() {
      return this.controller.stop();
    }
  }, {
    key: 'updateDB',
    value: function updateDB() {
      return this.controller.updateDB();
    }
  }, {
    key: 'playlistAdd',
    value: function playlistAdd(uri) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.client.sendCommand(_this.cmd('add', [uri]), function (err) {
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
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {
        _this2.client.sendCommand(_this2.cmd('listall', []), function (err, result) {
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