class ErrorResponse {

  sendValidationErrorResponse(res, errs) {
    return res.status(400).send({
      detailedError: { errors: errs },
      error: "BadRequest",
      message: "Invalid Request Input",
      status: "400 Bad Request",
      timestamp: new Date().toISOString()
    });
  }

  sendInternalServerErrorResponse(res, msg, detailedError) {
    return res.status(500).send({
      detailedError: { errors: detailedError },
      error: "InternalServerError",
      message: msg,
      status: "500 Internal Server Error",
      timestamp: new Date().toISOString()
    });
  }

  sendUnauthorizedErrorResponse(res, msg) {
    return res.status(401).send({
      detailedError: {},
      error: "Unauthorized",
      message: msg,
      status: "401 Unauthorized",
      timestamp: new Date().toISOString()
    })
  }

}

const errorResponse = new ErrorResponse();
export default errorResponse;