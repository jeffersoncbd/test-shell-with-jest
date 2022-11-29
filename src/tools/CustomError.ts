export class CustomError extends Error {
  constructor(feedback: string) {
    super(feedback)
    Object.setPrototypeOf(this, CustomError.prototype)
    this.name = 'CustomError'
  }
}
