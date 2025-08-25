// Creating an array and passing the number, questions, options, and answers
let questions = [
  [
    {
      numb: 1,
      question: "Which type of language is JavaScript?",
      answer: "Scripting",
      options: ["Programming", "Scripting", "Markup", "Styling"],
    },
    {
      numb: 2,
      question: "Which keyword is used to declare a variable in JavaScript?",
      answer: "All of the above",
      options: ["var", "let", "const", "All of the above"],
    },
    {
      numb: 3,
      question:
        "Which built-in method is used to parse a string to an integer?",
      answer: "parseInt()",
      options: ["parseInt()", "parseFloat()", "toFixed()", "toPrecision()"],
    },
    {
      numb: 4,
      question: "How do you write an arrow function in JavaScript?",
      answer: "() => {}",
      options: [
        "function => {}",
        "() => {}",
        "=> function() {}",
        "function() => {}",
      ],
    },
    {
      numb: 5,
      question: "Which of the following is NOT a JavaScript framework/library?",
      answer: "Laravel",
      options: ["React", "Angular", "Vue", "Laravel"],
    },
    {
      numb: 6,
      question: "What will 'typeof null' return in JavaScript?",
      answer: "object",
      options: ["null", "undefined", "object", "string"],
    },
    {
      numb: 7,
      question:
        "Which method is used to add an element at the end of an array?",
      answer: "push()",
      options: ["push()", "pop()", "shift()", "unshift()"],
    },
    {
      numb: 8,
      question: "What does the 'this' keyword refer to in JavaScript?",
      answer: "Depends on the context",
      options: [
        "Global object",
        "Current function",
        "Depends on the context",
        "Window object",
      ],
    },
    {
      numb: 9,
      question: "Which JavaScript method is used to fetch data from an API?",
      answer: "fetch()",
      options: ["get()", "fetch()", "retrieve()", "httpRequest()"],
    },
    {
      numb: 10,
      question: "How do you declare an asynchronous function in JavaScript?",
      answer: "async function()",
      options: [
        "async function()",
        "function async()",
        "async: function()",
        "await function()",
      ],
    },
  ],
  [
    {
      numb: 1,
      question:
        "Which symbol is used for strict equality comparison in JavaScript?",
      answer: "===",
      options: ["==", "===", "=", "!=="],
    },
    {
      numb: 2,
      question:
        "Which method is used to join all elements of an array into a string?",
      answer: "join()",
      options: ["concat()", "join()", "toString()", "map()"],
    },
    {
      numb: 3,
      question: "What will `Boolean(0)` return?",
      answer: "false",
      options: ["true", "false", "undefined", "null"],
    },
    {
      numb: 4,
      question: "Which loop is guaranteed to run at least once?",
      answer: "do...while",
      options: ["for", "while", "do...while", "for...of"],
    },
    {
      numb: 5,
      question:
        "Which function is used to serialize an object into a JSON string?",
      answer: "JSON.stringify()",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "toString()",
        "Object.stringify()",
      ],
    },
    {
      numb: 6,
      question: "Which event is fired when the DOM is fully loaded?",
      answer: "DOMContentLoaded",
      options: ["load", "ready", "DOMContentLoaded", "onload"],
    },
    {
      numb: 7,
      question: "Which operator is used to spread elements in JavaScript?",
      answer: "...",
      options: ["...", "??", "&&", "||"],
    },
    {
      numb: 8,
      question: "Which statement is used to handle errors in JavaScript?",
      answer: "try...catch",
      options: [
        "catch...throw",
        "try...catch",
        "error...handle",
        "exception...catch",
      ],
    },
    {
      numb: 9,
      question: 'What will `console.log(2 + "2")` output?',
      answer: "22",
      options: ["4", "22", "NaN", "undefined"],
    },
    {
      numb: 10,
      question: "Which feature allows a function to call itself?",
      answer: "Recursion",
      options: ["Callback", "Recursion", "Closure", "Promise"],
    },
  ],
];
