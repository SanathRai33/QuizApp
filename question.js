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
  [
    {
      numb: 1,
      question: "In Python, what is the output of 3 ** 2?",
      answer: "9",
      options: ["6", "9", "8", "Error"],
    },
    {
      numb: 2,
      question: "Which keyword is used to prevent method overriding in Java?",
      answer: "final",
      options: ["const", "final", "static", "sealed"],
    },
    {
      numb: 3,
      question: 'Which operator is known as the "modulus" operator?',
      answer: "%",
      options: ["/", "%", "//", "**"],
    },
    {
      numb: 4,
      question: "In C++, which function is the entry point of a program?",
      answer: "main()",
      options: ["start()", "main()", "execute()", "run()"],
    },
    {
      numb: 5,
      question: "Which of the following is NOT a valid data type in Java?",
      answer: "real",
      options: ["int", "double", "real", "char"],
    },
    {
      numb: 6,
      question: "Which symbol is used to access members of a structure in C?",
      answer: ".",
      options: ["->", ".", "::", "#"],
    },
    {
      numb: 7,
      question:
        "In JavaScript, which method converts a JSON string into an object?",
      answer: "JSON.parse()",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "parseJSON()",
        "toObject()",
      ],
    },
    {
      numb: 8,
      question: "In databases, SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Simple Query Language",
        "Structured Question Language",
        "Structured Query Language",
        "Sequential Query Language",
      ],
    },
    {
      numb: 9,
      question: "Which keyword is used in C to define a constant?",
      answer: "#define",
      options: ["const", "#define", "static", "final"],
    },
    {
      numb: 10,
      question: "Which Python data type is immutable?",
      answer: "Tuple",
      options: ["List", "Dictionary", "Tuple", "Set"],
    },
  ],
  [
    {
      numb: 1,
      question:
        'Which language is often called the "mother of all programming languages"?',
      answer: "C",
      options: ["Java", "Python", "C", "Assembly"],
    },
    {
      numb: 2,
      question: "In Python, which keyword is used to define a function?",
      answer: "def",
      options: ["func", "function", "def", "define"],
    },
    {
      numb: 3,
      question: "Which of the following is a strongly typed language?",
      answer: "Java",
      options: ["C", "Python", "Java", "JavaScript"],
    },
    {
      numb: 4,
      question: "Which symbol is used for single-line comments in C++?",
      answer: "//",
      options: ["#", "//", "/* */", "--"],
    },
    {
      numb: 5,
      question: "In Java, which keyword is used to inherit a class?",
      answer: "extends",
      options: ["implements", "inherits", "extends", "super"],
    },
    {
      numb: 6,
      question: "Which programming paradigm does Haskell follow?",
      answer: "Functional",
      options: ["Procedural", "Object-Oriented", "Functional", "Imperative"],
    },
    {
      numb: 7,
      question:
        "In C, what is the default return type of a function if not specified?",
      answer: "int",
      options: ["void", "int", "float", "char"],
    },
    {
      numb: 8,
      question: "Which of the following is NOT a programming language?",
      answer: "HTML",
      options: ["Python", "Ruby", "HTML", "C#"],
    },
    {
      numb: 9,
      question: 'In JavaScript, which type of scope does "var" have?',
      answer: "Function scope",
      options: [
        "Block scope",
        "Function scope",
        "Global scope only",
        "No scope",
      ],
    },
    {
      numb: 10,
      question: "Which keyword is used in C++ to handle exceptions?",
      answer: "try",
      options: ["catch", "throw", "try", "error"],
    },
  ],
  [
    {
      numb: 1,
      question: "In Java, which keyword is used to create an object?",
      answer: "new",
      options: ["new", "create", "make", "init"],
    },
    {
      numb: 2,
      question: "In Python, which data structure is used for key-value pairs?",
      answer: "Dictionary",
      options: ["List", "Tuple", "Dictionary", "Set"],
    },
    {
      numb: 3,
      question: "Which of the following is a low-level programming language?",
      answer: "Assembly",
      options: ["Java", "C++", "Assembly", "Python"],
    },
    {
      numb: 4,
      question:
        'What does the "break" statement do in most programming languages?',
      answer: "Exits the loop immediately",
      options: [
        "Skips one iteration",
        "Ends the program",
        "Exits the loop immediately",
        "Continues to next loop",
      ],
    },
    {
      numb: 5,
      question:
        "Which of the following is NOT an object-oriented programming concept?",
      answer: "Compilation",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
    },
    {
      numb: 6,
      question:
        "In JavaScript, what is the default value of uninitialized variables?",
      answer: "undefined",
      options: ["null", "undefined", "0", "NaN"],
    },
    {
      numb: 7,
      question: "Which symbol is used for single-line comments in Python?",
      answer: "#",
      options: ["//", "#", "--", "/* */"],
    },
    {
      numb: 8,
      question: "In C, which format specifier is used to print a string?",
      answer: "%s",
      options: ["%s", "%c", "%d", "%str"],
    },
    {
      numb: 9,
      question: "Which keyword is used in C++ to allocate memory dynamically?",
      answer: "new",
      options: ["alloc", "malloc", "new", "create"],
    },
    {
      numb: 10,
      question:
        "Which operator is used in SQL to select data from multiple tables?",
      answer: "JOIN",
      options: ["CONNECT", "JOIN", "LINK", "MERGE"],
    },
  ],
];
