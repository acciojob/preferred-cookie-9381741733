//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");

    // Function to get cookies by name
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return decodeURIComponent(value);
        }
        return null;
    }

    // Load saved preferences from cookies
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
        fontSizeInput.value = savedFontSize;
    }

    if (savedFontColor) {
        document.documentElement.style.setProperty("--fontcolor", savedFontColor);
        fontColorInput.value = savedFontColor;
    }

    // Save preferences when form is submitted
    document.getElementById("fontForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;

        // Save in cookies
        document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`;
        document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;

        // Apply changes immediately
        document.documentElement.style.setProperty("--fontsize", fontSize + "px");
        document.documentElement.style.setProperty("--fontcolor", fontColor);
    });
});
