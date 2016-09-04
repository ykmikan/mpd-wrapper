'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mpd = require('mpd');

var _mpd2 = _interopRequireDefault(_mpd);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _playlist = require('./playlist');

var _playlist2 = _interopRequireDefault(_playlist);

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
    this.playlist = new _playlist2.default(this.client);
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
    key: 'addToPlaylist',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(uri) {
        var isUpdateDB = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!isUpdateDB) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this.controller.updateDB(uri);

              case 4:
                return _context.abrupt('return', this.playlist.add(uri));

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                throw new Error(_context.t0);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function addToPlaylist(_x3, _x4) {
        return _ref.apply(this, arguments);
      }

      return addToPlaylist;
    }()
  }, {
    key: 'clearPlaylist',
    value: function clearPlaylist() {
      return this.playlist.clear();
    }
  }, {
    key: 'listall',
    value: function listall() {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        _this.client.sendCommand(_this.cmd('listall', []), function (err, result) {
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