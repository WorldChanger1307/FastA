// netlify/functions/generate-questions.js
exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { material, numQuestions, apiKey } = JSON.parse(event.body);

    if (!apiKey || !material || !numQuestions) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5-20251101',
        max_tokens: 4096,
        messages: [
          {
            role: 'user',
            content: `Based on this study material, generate exactly ${numQuestions} multiple choice questions. Return ONLY a valid JSON array with no additional text. Each question should have: "question" (string), "options" (array of 4 strings), "correct" (number 0-3 for the correct option index). Mix understanding questions with equation solving problems.

Study material:
${material}

Return ONLY the JSON array, starting with [ and ending with ]`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: error.error?.message || 'API request failed' }),
      };
    }

    const data = await response.json();
    const content = data.content[0].text;

    // Extract JSON from the response
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Could not parse questions from response' }),
      };
    }

    const questions = JSON.parse(jsonMatch[0]);

    return {
      statusCode: 200,
      body: JSON.stringify({ questions }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
