import { useState, ChangeEvent, FormEvent } from 'react';

const Chatbot = () => {
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Send POST request to Flask backend
            const response = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            const data = await response.json();

            // Update answer state with the response
            setAnswer(data.answer || 'No answer found.');
        } catch (error) {
            setAnswer('Error: Unable to fetch the answer.');
        }
        setLoading(false);
    };

    // Handle input change for the question field
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ask a question:
                    <input
                        type="text"
                        value={question}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Ask</button>
            </form>

            {loading && <p>Loading...</p>}
            {answer && <p>Answer: {answer}</p>}
        </div>
    );
};

export default Chatbot;

