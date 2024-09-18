const prompts = [
    "Write a story about a time traveler.",
    "Describe your perfect day.",
    "What would you do if you won the lottery?",
    "Create a dialogue between two characters who dislike each other.",
    "Imagine you are an astronaut on Mars. What do you see?"
];

function generatePrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const prompt = prompts[randomIndex];
    document.getElementById('prompt').innerText = prompt;
    document.getElementById('copyButton').style.display = 'inline';
}

function copyPrompt() {
    const promptText = document.getElementById('prompt').innerText;
    navigator.clipboard.writeText(promptText).then(() => {
        alert('Prompt copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
