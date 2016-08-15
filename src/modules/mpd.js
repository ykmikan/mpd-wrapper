import mpd from 'mpd'
import Controller from './controller'
import Playlist from './playlist'

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
    this.playlist = new Playlist(this.client)
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

  async addToPlaylist(uri, isUpdateDB = true) {
    try {
      if (isUpdateDB) {
        await this.controller.updateDB()
      }
      return this.playlist.add(uri)
    } catch (err) {
      throw new Error(err)
    }
  }

  clearPlaylist() {
    return this.playlist.clear()
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
