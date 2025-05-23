from flask import Flask, request, jsonify
import openai  # Or any other NLP service you choose

app = Flask(__name__)

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data['message']
    
    # Process with AI (using OpenAI API as example)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_message}]
    )
    
    return jsonify({"reply": response.choices[0].message.content})

if __name__ == '__main__':
    app.run()