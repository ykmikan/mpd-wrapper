import mpd from 'mpd'

class MPD {
  constructor(port = 6600, host = 'localhost') {
    this.client = mpd.connect({ port, host })

    this.client.on('ready', err => {
      if (err) {
        throw new Error(err)
      }
    })

    this.cmd = mpd.cmd
  }

  play() {
    return new Promise((resolve, reject) => {
      this.client.sendCommand(this.cmd('play', []), err => {
        if (err) {
          reject(err)
        }

        resolve(true)
      })
    })
  }

  stop() {
    return new Promise((resolve, reject) => {
      this.client.sendCommand(this.cmd('stop', []), err => {
        if (err) {
          reject(err)
        }

        resolve(true)
      })
    })
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

  update(uri) {
    let args = uri ? [uri] : []
    return new Promise((resolve, reject) => {
      this.client.sendCommand(this.cmd('update', args), (err, result) => {
        if (err) {
          reject(err)
        }

        resolve(result)
      })
    })
  }
}

export default MPD
