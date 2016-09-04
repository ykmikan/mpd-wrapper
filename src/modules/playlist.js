import mpd from 'mpd'

class Playlist {
  constructor(mpdClient) {
    this.mpd = mpdClient
    this.cmd = mpd.cmd
  }

  add(uri) {
    return new Promise((resolve, reject) => {
      let args

      if (!uri) {
        reject('error occurred, required uri.')
      } else if (Array.isArray(uri)) {
        args = uri
      } else if (typeof uri === 'string') {
        args = [uri]
      } else {
        reject('uri type error. uri must be array or string.')
      }

      this.mpd.sendCommand(this.cmd('add', args), err => {
        if (err) {
          reject(err)
        }

        resolve()
      })
    })
  }

  clear(uri) {
    return new Promise((resolve, reject) => {
      let args

      if (!uri) {
        args = ['']
      } else if (Array.isArray(uri)) {
        args = uri
      } else if (typeof uri === 'string') {
        args = [uri]
      } else {
        reject('uri type error. uri must be array or string.')
      }

      this.mpd.sendCommand(this.cmd('clear', args), err => {
        if (err) {
          reject(err)
        }

        resolve()
      })
    })
  }
}

export default Playlist
