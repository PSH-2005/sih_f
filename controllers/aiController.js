const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

exports.getAnalysis = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentorData = await pool.query('SELECT * FROM users WHERE id = $1', [mentorId]);

    const prompt = `Analyze the contributions of mentor ${mentorData.rows[0].full_name} based on the following input: ...`;
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 200,
    });

    const analysis = response.data.choices[0].text;
    res.render('analysis', { analysis });
  } catch (error) {
    console.error('Error in AI analysis:', error);
    res.status(500).send('AI analysis failed');
  }
};

