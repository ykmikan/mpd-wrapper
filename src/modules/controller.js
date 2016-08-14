class Controller {
  constructor(mpd) {
    this.mpd = mpd
    this.cmd = mpd.cmd
  }

  play() {
    return new Promise((resolve, reject) => {
      this.mpd.sendCommand(this.cmd('play', []), err => {
        if (err) {
          reject(err)
        }

        resolve(true)
      })
    })
  }

  stop() {
    return new Promise((resolve, reject) => {
      this.mpd.sendCommand(this.cmd('stop', []), err => {
        if (err) {
          reject(err)
        }

        resolve(true)
      })
    })
  }

  updateDB(path) {
    return new Promise((resolve, reject) => {
      this.mpd.sendCommand(this.cmd('update', path), (err, result) => {
        if (err) {
          reject(err)
        }

        resolve(result)
      })
    })
  }
}

export default Controller
