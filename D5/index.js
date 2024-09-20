const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((userData) => {
    const emailData = userData.map(() => {});
  })
  .catch((error) => {
    console.error("Error:", error);
  });
