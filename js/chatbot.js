window.initChatbot = function () {
    const openBtn = document.getElementById("chatbotOpenBtn");
    const closeBtn = document.getElementById("chatbotCloseBtn");
    const panel = document.getElementById("chatbotPanel");
    const form = document.getElementById("chatbotForm");
    const input = document.getElementById("chatbotInput");
    const messages = document.getElementById("chatbotMessages");
    const quickReplies = document.querySelectorAll(".quick-reply");

    if (!openBtn || !closeBtn || !panel || !form || !input || !messages) {
        console.warn("Chatbot elements not found.");
        return;
    }

    function openChatbot() {
        panel.classList.add("open");
        panel.setAttribute("aria-hidden", "false");
    }

    function closeChatbot() {
        panel.classList.remove("open");
        panel.setAttribute("aria-hidden", "true");
    }

    function addMessage(text, type) {
        const message = document.createElement("div");
        message.className = type === "user" ? "user-message" : "bot-message";
        message.innerHTML = `<p>${text}</p>`;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    openBtn.addEventListener("click", openChatbot);
    closeBtn.addEventListener("click", closeChatbot);

    quickReplies.forEach((button) => {
        button.addEventListener("click", function () {
            const text = button.textContent.trim();
            addMessage(text, "user");
            addMessage(`You asked about ${text}. This chatbot will be trained later to answer that properly.`, "bot");
            openChatbot();
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const text = input.value.trim();
        if (!text) return;

        addMessage(text, "user");
        input.value = "";
        openChatbot();

        setTimeout(() => {
            addMessage("This chatbot frontend is ready. Later, I can connect it to your trained model or API.", "bot");
        }, 500);
    });
};