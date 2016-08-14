import mpd from 'mpd'
import Controller from './controller'

class MPD {
  constructor(port = 6600, host = 'localhost') {
    this.client = mpd.connect({ port, host })

    this.client.on('ready', err => {
      if (err) {
        throw new Error(err)
      }
    })

    this.cmd = mpd.cmd
    this.controller = new Controller(this.client)
  }

  play() {
    return this.controller.play()
  }

  stop() {
    return this.controller.stop()
  }

  updateDB() {
    return this.controller.updateDB()
  }

  playlistAdd(uri) {
    return new Promise((resolve, reject) => {
      this.client.sendCommand(this.cmd('add', [uri]), err => {
        if (err) {
          reject(err)
        }

        resolve(true)
      })
    })
  }

  listall() {
    return new Promise((resolve, reject) => {
      this.client.sendCommand(this.cmd('listall', []), (err, result) => {
        if (err) {
          reject(err)
        }

        resolve(result)
      })
    })
  }


}

export default MPD
