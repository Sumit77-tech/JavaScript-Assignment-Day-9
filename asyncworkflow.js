function asyncTask(taskName, success, callback) {
    setTimeout(() => {
        if (success) { 
            console.log(`${taskName} completed successfully.`); 
            callback(null);
        } else {
            const error = `${taskName} failed.`; 
            callback(error);
        }
    }, 1000);
}

function registerUser(callback) {
    asyncTask("Register User", true, (error) => {
        if (error) {
            console.log("Error:", error);
            return;
        }
        sendVerification(callback);
    });
}

function sendVerification(callback) {
    asyncTask("Send Verification Email", true, (error) => {
        if (error) {
            console.log("Error:", error);
            return;
        }
        loginUser(callback);
    });
}

function loginUser(callback) {
    asyncTask("Log In User", true, (error) => {
        if (error) {
            console.log("Error:", error);
            return;
        }
        displayWelcomeMessage(callback);
    });
}

function displayWelcomeMessage(callback) {
    asyncTask("Display Welcome Message", true, (error) => {
        if (error) {
            console.log("Error:", error);
            return;
        }
        console.log("User registration and login workflow completed!");
    });
}

registerUser((error) => {
    if (error) {
        console.log("Workflow stopped due to error:", error);
    }
});
