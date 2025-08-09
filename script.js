let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", function () {
  const guess = Number(document.getElementById("guessInput").value);
  attempts++;

  const feedback = document.getElementById("feedback");
  const attemptDisplay = document.getElementById("attempts");

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent =
      "⛔ Reading comprehension isn't for all of us. 1 and 100 buddy.";
    return;
  }

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    document.getElementById("submitGuess").disabled = true;
  } else if (guess < secretNumber) {
    feedback.textContent = "Too low, go up! ⬆️";
  } else {
    feedback.textContent = "Too high, go down! ⬇️";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});
