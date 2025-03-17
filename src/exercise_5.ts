type ServerResponse = string | boolean;

/**
 * Processes a server response and logs a message based on the type of response.
 * @param response The response, which can be a string (message) or a boolean (success/failure).
 */
function processResponse(response: ServerResponse): void {
  if (typeof response === "string") {
    console.log(`Server message: ${response}`);
  } else if (typeof response === "boolean") {
    console.log(response ? "Operation successful" : "Operation failed");
  }
}

processResponse("Server is up and running");
processResponse(true);
processResponse(false);
