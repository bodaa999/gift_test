document.getElementById('send-button').addEventListener('click', async function() {
    const userInput = document.getElementById('user-input').value;
    addMessage('user', userInput);
    
    // Call your backend/AI service
    const response = await fetch('/api/chatbot', {
      method: 'POST',
      body: JSON.stringify({message: userInput}),
      headers: {'Content-Type': 'application/json'}
    });
    
    const botResponse = await response.json();
    addMessage('bot', botResponse.reply);
  });
  
  function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = text;
    document.getElementById('chat-messages').appendChild(messageDiv);
  }