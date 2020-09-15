const quizQuestions = [
    {
        question: "How can you get the total number of arguments passed to a function?",
        answers: {
            a: "Using args.length property",
            b: "Using arguments.length property",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which built-in method returns the length of the string?",
        answers: {
            a: "length()",
            b: "size()",
            c: "index()",
            d: "None of the above."
        },
        correctAnswer: "a"
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        answers: {
            a: "changeOrder(order)",
            b: "order()",
            c: "sort()",
            d: "None of the above."
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following function of Number object returns the number's value?",
        answers: {
            a: "toString()",
            b: "valueOf()",
            c: "toLocaleString()",
            d: "toPrecision()"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        answers: {
            a: "concat()",
            b: "match()",
            c: "replace()",
            d: "replace()"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        answers: {
            a: "toLocaleLowerCase()",
            b: "toLowerCase()",
            c: "toString()",
            d: "substring()"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        answers: {
            a: "sup()",
            b: "small()",
            c: "strike()",
            d: "sub()"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
        answers: {
            a: "indexOf()",
            b: "join()",
            c: "lastIndexOf()",
            d: "map()"
        },
        correctAnswer: "c"
    },
    {
        question: "10 - Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
        answers: {
            a: "pop()",
            b: "push()",
            c: "reduce()",
            d: "educeRight()"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: {
            a: "<javascript>",
            b: "<scripted>",
            c: "<script>",
            d: "<js>"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called “main.js”?",
        answers: {
            a: "<script src=”main.js”>",
            b: "<script href=”main.js”>",
            c: "<script ref=”main.js”>",
            d: "<script name=”main.js”>"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    },
    {
        question: "Ask a question8?",
        answers: {
            a: "Something",
            b: "Also Something",
            c: "Maybe Something",
            d: "Could be something"
        },
        correctAnswer: "c"
    }

]