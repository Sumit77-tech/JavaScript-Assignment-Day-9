function fetchDataWithCallback(callback) {
    const shouldFail = Math.random() < 0.5;
    setTimeout(() => {
        if(shouldFail) {
            callback("Error fetching data");
        } else {
            callback(null, { data: "Fetched data"});
        }
    }, 1000);
}
fetchDataWithCallback((error, result) => {
    if(error) {
        console.log("Error fetching data");
    } else {
        console.log("Data:", result.data);
    }
});