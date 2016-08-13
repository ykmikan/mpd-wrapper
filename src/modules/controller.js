class Controller {
  constructor(mpd) {
    this.mpd = mpd
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
}

export default Controller