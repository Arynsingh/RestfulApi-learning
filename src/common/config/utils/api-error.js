class ApiError extends Error{
  constructor(statusCode,message){
    super(message) // super calls parent constructor of parent class
    this.statusCode = statusCode
    this.isOperational = true // for future
  }
}
