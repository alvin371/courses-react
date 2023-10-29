import { useState } from "react";
import { OpenAIApi, Configuration } from "openai";

const AIchat = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: "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",
    dangerouslyAllowBrowser: true
  });
  const openai = new OpenAIApi(configuration);

  // const openai = new OpenAIApi(configuration);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        // model: "gpt-3.5-turbo",
        prompt: query,
        temperature: 0.5,
        max_tokens: 100
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow">
        {loading ? "ok" : ""}
        <h1 className="text-xl font-bold mb-4">
          OpenAI Integration with React
        </h1>
        <textarea
          className="p-2 w-64 h-24 mb-4 border rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your query here..."
        ></textarea>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => handleClick()}
        >
          Submit
        </button>
        <div className="mt-4">
          <p>
            <strong>Response:</strong>
          </p>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
};

export default AIchat;
