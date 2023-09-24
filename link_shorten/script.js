document.addEventListener("DOMContentLoaded", function () {
    const shortenForm = document.getElementById("shorten-form");
    const originalUrlInput = document.getElementById("original-url");
    const shortenedUrlSpan = document.getElementById("shortened-url");

    shortenForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const originalUrl = originalUrlInput.value;

        // You would typically send the original URL to the server here
        // and get the shortened URL as a response.

        // For this example, we'll simulate a shortened URL.
        const shortenedUrl = generateShortenedUrl();

        shortenedUrlSpan.textContent = shortenedUrl;
    });

    function generateShortenedUrl() {
        // Generate a random string as a simplified shortened URL
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const length = 6;
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return `http://example.com/${result}`;
    }
});
