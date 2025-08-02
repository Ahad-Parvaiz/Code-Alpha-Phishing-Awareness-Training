const slides = [
  {
    title: "✅ Welcome to Phishing Awareness Training",
    content: `
      <ul>
        <li>What is phishing?</li>
        <li>Real-world examples</li>
        <li>Social engineering tactics</li>
        <li>How to spot phishing emails and fake websites</li>
        <li>Best practices & quizzes</li>
      </ul>
    `
  },
  {
    title: "🔍 What is Phishing?",
    content: `
      <p>Phishing is a type of cyber attack where attackers impersonate trusted sources to steal data.</p>
      <ul>
        <li>Emails</li>
        <li>Fake websites</li>
        <li>Social media messages</li>
        <li>Text (Smishing), Voice (Vishing)</li>
      </ul>
    `
  },
  {
    title: "🎭 Social Engineering Tactics",
    content: `
      <ul>
        <li><strong>Impersonation:</strong> Pretending to be someone you trust</li>
        <li><strong>Urgency:</strong> "Your account will be locked!"</li>
        <li><strong>Greed or Fear:</strong> "You've won a prize!"</li>
        <li><strong>Authority Pressure:</strong> “Immediate action required”</li>
      </ul>
    `
  },
  {
    title: "📧 Real-World Example #1 – Fake Email",
    content: `
      <p><strong>From:</strong> PayPaI Support &lt;support@paypa1.com&gt;</p>
      <p><strong>Subject:</strong> Unauthorized login attempt</p>
      <ul>
        <li>Spelling errors: "PayPaI" with capital i</li>
        <li>Urgent tone</li>
        <li>Suspicious link (hover to inspect)</li>
      </ul>
    `
  },
  {
    title: "🌐 Real-World Example #2 – Fake Website",
    content: `
      <p>Cloned bank page: <code>https://secure-yourbank-login.com</code></p>
      <ul>
        <li>Unusual domain</li>
        <li>No HTTPS or invalid cert</li>
        <li>Asks for full card + PIN</li>
      </ul>
    `
  },
  {
    title: "🧠 How to Recognize a Phishing Email",
    content: `
      <ul>
        <li>Unusual sender address</li>
        <li>Attachments or links</li>
        <li>Spelling/grammar issues</li>
        <li>Urgent requests for credentials</li>
        <li>Hover links before clicking</li>
      </ul>
    `
  },
  {
    title: "💡 Best Practices to Stay Safe",
    content: `
      <ul>
        <li>Don't click unknown links</li>
        <li>Verify senders directly</li>
        <li>Don’t share login/financial info via email</li>
        <li>Report suspicious emails</li>
        <li>Enable MFA on all accounts</li>
      </ul>
    `
  },
  {
    title: "🚷 Social Engineering Red Flags",
    content: `
      <ul>
        <li>Requests for secrecy</li>
        <li>Fake calls from IT/support</li>
        <li>Too-good-to-be-true offers</li>
        <li>“CEO” urgent payment requests</li>
      </ul>
    `
  },
  {
    title: "🧩 Quiz: What Should You Do?",
    content: `
      <div class="quiz-question">
        <p>You get an email from your bank asking to verify your password via a link. What do you do?</p>
        <div class="quiz-options">
          <label><input type="radio" name="q1" value="A"> A. Click and enter password</label>
          <label><input type="radio" name="q1" value="B"> B. Reply asking for clarification</label>
          <label><input type="radio" name="q1" value="C"> C. Call your bank using the official number</label>
          <label><input type="radio" name="q1" value="D"> D. Forward to a friend</label>
        </div>
        <p id="q1-feedback"></p>
      </div>
    `
  },
  {
    title: "🧠 Quiz: Spot the Secure URL",
    content: `
      <div class="quiz-question">
        <p>What does a secure website URL usually start with?</p>
        <div class="quiz-options">
          <label><input type="radio" name="q2" value="A"> A. http://</label>
          <label><input type="radio" name="q2" value="B"> B. secure://</label>
          <label><input type="radio" name="q2" value="C"> C. https://</label>
          <label><input type="radio" name="q2" value="D"> D. web://</label>
        </div>
        <p id="q2-feedback"></p>
      </div>
    `
  },
  {
    title: "🎉 Final Tips and Resources",
    content: `
      <ul>
        <li>Trust your instincts — think before you click!</li>
        <li>Use tools like <a href="https://phishingquiz.withgoogle.com" target="_blank">Google Phishing Quiz</a></li>
        <li>Report all suspicious activity to <code>security@yourcompany.com</code></li>
      </ul>
    `
  }
];

let currentSlide = 0;
const container = document.getElementById("slide-container");

function renderSlide(index) {
  const slide = slides[index];
  container.innerHTML = `
    <div class="slide active">
      <h2>${slide.title}</h2>
      ${slide.content}
    </div>
  `;
  bindQuizHandlers();
}

function bindQuizHandlers() {
  const q1Radios = document.getElementsByName("q1");
  if (q1Radios.length) {
    q1Radios.forEach(radio => {
      radio.onclick = () => {
        document.getElementById("q1-feedback").textContent =
          radio.value === "C" ? "✅ Correct! Always verify via official number." : "❌ Incorrect.";
        document.getElementById("q1-feedback").className =
          radio.value === "C" ? "correct" : "incorrect";
      };
    });
  }

  const q2Radios = document.getElementsByName("q2");
  if (q2Radios.length) {
    q2Radios.forEach(radio => {
      radio.onclick = () => {
        document.getElementById("q2-feedback").textContent =
          radio.value === "C" ? "✅ Correct! Look for HTTPS." : "❌ Incorrect.";
        document.getElementById("q2-feedback").className =
          radio.value === "C" ? "correct" : "incorrect";
      };
    });
  }
}

document.getElementById("nextBtn").onclick = () => {
  if (currentSlide < slides.length - 1) currentSlide++;
  renderSlide(currentSlide);
};

document.getElementById("prevBtn").onclick = () => {
  if (currentSlide > 0) currentSlide--;
  renderSlide(currentSlide);
};

renderSlide(currentSlide);
