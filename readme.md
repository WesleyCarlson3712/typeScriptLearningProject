# Overview
I have worked on this project for 2 weeks with the goal to learn how to use the TypeScript programming language in practical ways. 
I already had some JavaScript experience going into this project, but there has been a lot more to learn than i anticipated. 
This project is split into 3 parts, where I demonstrate the concepts of classes and inheritance, file reading and error handling, and recursion.
I decided to break this project into parts so i could focus more on the language than making a single large product.
The classes demo is a short battle simulator between a hero and monster, which are both subclasses of a character class.
The file reading demo loads user data from a given json file, ensuring the file is valid and that it is of a correct structure
The recursion demo both demonstrates a factorial function and a function to print nodes in a tree structure

[Software Demo Video](https://youtu.be/kqwmzmvWYB0)

# Development Environment

This project was made entirely in visual studio code using typescript and node.
It uses the readFileSync library for filereading and promptSnc for user input.

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Copilot AI](https://copilot.microsoft.com/)
- [W3schools TypeScript tutorial](https://www.w3schools.com/typescript/)

# Future Work

While this isn't a single project I can plan future work for, I do think I would like to continue using TypeScript in the future.
I have found learning the language to be quite fun and interesting and could make good use of the skills I have developed.

# Instructions
## 1. Download the project 
- Click the green Code button → Download ZIP.
- Extract the ZIP file to a folder on your computer.
- Alternatively, if you have Git installed, you can clone directly:
  ```
  git clone https://github.com/your-username/your-repo-name.git
  cd your-repo-name
  ```
## 2. Install dependencies
Open a terminal in the project folder and run:
```
npm install
```
This installs everything listed in package.json.
For this project, you’ll need:
- TypeScript (compiler)
- ts-node (optional, for running TS directly)
- prompt-sync (for interactive input in the file reading demo)
Install them with:
```
npm install typescript ts-node @types/node --save-dev
npm install prompt-sync
npm install --save-dev @types/prompt-sync
```
## 3. Compile the TypeScript files  
If you want to run the compiled JavaScript:
```
npx tsc
```
## 4. Run the demos
- To run the classes demo:
```
node dist/classesDemo.js
```
- To run the file reading demo
```
node dist/fileReadingDemo.js
```
- to run the recursion demo:
```
node dist/recursionDemo.js
``` 
