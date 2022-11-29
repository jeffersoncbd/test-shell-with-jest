import { exec } from 'child_process'
import { CustomError } from './CustomError'

export class Bash {
  constructor(private scriptPath: string) {}

  run(parameters: string) {
    return new Promise((resolve, rejects) => {
      exec(`${this.scriptPath} ${parameters}`, (error, stdout, stderr) => {
        if (error) {
          if (error.code === 2) {
            rejects(new CustomError(stderr))
          } else {
            rejects(new Error(stderr))
          }
        }
        resolve(stdout)
      })
    })
  }
}
