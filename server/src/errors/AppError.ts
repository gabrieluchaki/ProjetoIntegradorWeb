class AppError extends Error {
  statusCode: number

  constructor (message: string, statusCode = 400) {
    super(message)
    this.message = message
    this.statusCode = statusCode
  }
}

export { AppError }