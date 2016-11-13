import mpd from 'mpd'

class Playlist {
  constructor(mpdClient) {
    this.mpd = mpdClient
    this.cmd = mpd.cmd
  }

  add(uris) {
    return new Promise(async (resolve, reject) => {
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

      for (let i = 0, length = args.length; i < length; i++) {
        let arg = args[i]
        let result = await this._sendCommand('add', arg)
        console.log('result ', result)
      }

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

  _sendCommand(cmd, arg) {
    return new Promise((resolve, reject) => {
      this.mpd.sendCommand(this.cmd(cmd, [arg]), err => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
  }
}

export default Playlist
