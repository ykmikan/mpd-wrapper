import mpd from 'mpd'

class Playlist {
  constructor(mpdClient) {
    this.mpd = mpdClient
    this.cmd = mpd.cmd
  }

  add(uris) {
    return new Promise((resolve, reject) => {
      let args

      if (!uris) {
        reject('error occurred, required uris.')
      } else if (Array.isArray(uris)) {
        args = uris
      } else if (typeof uris === 'string') {
        args = [uris]
      } else {
        reject('uri type error. uri must be array or string.')
      }

      args.forEach(arg => {
        this.mpd.sendCommand(this.cmd('add', [arg]), err => {
          if (err) {
            reject(err)
          }
        })
      })

      resolve()
    })
  }

  clear() {
    return new Promise((resolve, reject) => {
      this.mpd.sendCommand(this.cmd('clear', []), err => {
        if (err) {
          reject(err)
        }

        resolve()
      })
    })
  }
}

export default Playlist
