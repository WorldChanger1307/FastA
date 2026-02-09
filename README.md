# Study Quiz Generator

A web-based tool that generates multiple-choice quizzes from your course materials using Claude AI.

## Features

- 📚 Multiple courses (currently: Calculus I)
- 🤖 AI-generated questions mixing conceptual and computational problems
- 📱 Mobile-friendly design
- 🔒 Secure API key storage (browser-only)
- ✅ Instant feedback on answers
- 📊 Score tracking

## How to Use

1. Visit the live site
2. Enter your Anthropic API key (get one free at https://console.anthropic.com)
3. Select your course
4. Choose how many questions you want (1-20)
5. Take the quiz!

## Adding Courses

To add new courses, edit the `courses` object in `index.html`:

```javascript
const courses = {
    'courseid': {
        name: 'Course Name',
        material: `Your course material here...`
    }
};
```

## API Requirements

- Requires an Anthropic API key
- Uses Claude Opus 4.5 model
- Costs approximately $0.01 per 5 questions generated

## License

Free to use and modify!
