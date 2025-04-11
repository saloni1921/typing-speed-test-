const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast is a skill that improves with practice.",
    "JavaScript can be fun and powerful at the same time.",
    "Stay curious, keep learning, and never give up."
  ];
  
  let startTime, selectedQuote;
  
  function startTest() {
    // Pick a random quote
    selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = selectedQuote;
  
    // Reset input and result
    const inputField = document.getElementById("input");
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();
    document.getElementById("result").textContent = "";
  
    // Start timing
    startTime = new Date().getTime();
  
    // Listen for input end
    inputField.oninput = function () {
      const currentText = inputField.value;
      if (currentText === selectedQuote) {
        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000; // in seconds
        const wordCount = selectedQuote.split(" ").length;
        const speed = Math.round((wordCount / timeTaken) * 60); // words per minute
  
        document.getElementById("result").textContent =
          `🎉 Done! Your typing speed is ${speed} WPM.`;
  
        inputField.disabled = true;
      }
    };
  }
  