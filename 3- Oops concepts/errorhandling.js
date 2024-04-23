try {
  let json = '{"name": "John", "age": 30}';
  let user = JSON.parse(json); // Parsing JSON string, may throw SyntaxError
  console.log("User:", user);
  nonexistentFunction(); // This function call will throw a ReferenceError
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Syntax error occurred:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Reference error occurred:", error.message);
  } else {
    console.error("An error occurred:", error.message);
  }
} finally {
  console.log("Cleanup code executed");
}
