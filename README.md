# Google Forms Auto Generator - How to Use

### Set up the Google Apps Script
1. Open [Google Apps Script](https://script.google.com).
2. Create a new project and copy the script from `main.gs` into the project.
3. Replace the placeholder `Your ID` in the script with the ID of your Google Doc that contains the questions in JSON format.
4. Save the project.

### Docs example

```json
[
  {
    "question": "Example 1 - What is the capital of France?",
    "type": "selection",
    "options": ["Paris", "London", "Rome", "Berlin"],
    "correctAnswer": "Paris"
  },
  {
    "question": "Example 2 - Select all the primary colors.",
    "type": "multiple choice",
    "options": ["Red", "Blue"],
    "correctAnswer": ["Red", "Blue"]
  },
  {
    "question": "Example 3 - How many continents are there on Earth?",
    "type": "text",
    "correctAnswer": "7"
  },
  {
    "question": "Example 4 - Rank the following planets in order of size (1 = largest, 8 = smallest)",
    "type": "ranking",
    "options": ["Jupiter", "Saturn", "Earth", "Mars", "Venus", "Neptune", "Uranus", "Mercury"],
    "correctAnswer": "1,2,3,4,5,6,7,8"
  }
]
