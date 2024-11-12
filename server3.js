async function awaitCall() {
  console.log("Fetching data...");

  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3; 
        if (success) {
          resolve({
            message: "Data fetched successfully!",
            data: [1, 2, 3, 4, 5],
          });
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 2000);
    });

    console.log("Response received:", data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

awaitCall();
