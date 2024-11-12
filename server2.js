async function awaitCall() {
  console.log("Fetching data...");

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data fetched successfully!", data: [1, 2, 3, 4, 5] });
    }, 2000);
  });

  console.log("Response received:", data);
}

awaitCall();
