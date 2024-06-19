document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }

    // Display the user's message in the chat box
    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = "You: " + userInput;
    document.getElementById("chat-box").appendChild(userMessageDiv);

    // Clear the input field
    document.getElementById("user-input").value = "";

    fetch("https://your-backend-server-url.onrender.com/get_response", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Display the bot's response in the chat box
        const botMessageDiv = document.createElement("div");
        botMessageDiv.textContent = "Bot: " + data.response;
        document.getElementById("chat-box").appendChild(botMessageDiv);

        // Scroll to the bottom of the chat box
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
