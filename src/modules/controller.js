import mpd from 'mpd'

class Controller {
  constructor(mpdClient) {
    this.mpd = mpdClient
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
    let args
    if (!path) {
      args = []
    } else if (Array.isArray(path)) {
      args = path
    } else {
      args = [path]
    }

    return new Promise((resolve, reject) => {
      this.mpd.sendCommand(this.cmd('update', args), (err, result) => {
        if (err) {
          reject(err)
        }

        resolve(result)
      })
    })
  }
}

export default Controller
