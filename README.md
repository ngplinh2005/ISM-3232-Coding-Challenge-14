# ISM-3232-Coding-Challenge-14

Coding Challenge: Customer Support Ticket System – Using Async/Await, Error Handling, and Throw Statements

Introduction:
In this challenge, you will create a Customer Support Ticket System that displays support tickets for a business. You will use async/await to handle asynchronous operations, apply try/catch/finally for error handling, and use throw to trigger custom errors. The goal is to simulate how a customer support page retrieves and displays ticket data from an API, with proper error management.

Business Case:
Scenario: A business wants to create a webpage to list unresolved customer support tickets. The tickets are available through an external API, but network issues or missing data could cause the page to break. Your task is to use async/await to fetch the data and ensure errors are caught and managed properly. If no tickets are found, you should throw a custom error stating, “No unresolved tickets available.”

Tasks:
1. Setup HTML Structure for the Ticket System
Create an HTML page that includes:

A header ("Customer Support Tickets").
A container for dynamically displaying tickets.
An error message section for displaying any issues during the fetch process.

Commit: Setup basic HTML structure for the ticket system.

2. Fetch Tickets Using Async/Await and Handle Errors
Create a JavaScript file with an async function that retrieves data from the Unresolved Tickets API:
https://jsonplaceholder.typicode.com/posts

Use try/catch to handle any errors that occur during the fetch process. If the fetch fails (e.g., the API is down), display a custom error message. If no tickets are found, throw a custom error.

Commit: Implement async/await to fetch ticket data and handle errors.

3. Display Tickets Dynamically on the Page
Display the following details for each unresolved ticket:

Ticket ID
Customer Name (use the userId field as a placeholder)
Issue Description (use the title field)
Details (use the body field)

Commit: Dynamically display tickets on the page.

4. Use finally to Ensure Cleanup
Use finally to always hide any loading indicators (if present), regardless of whether the API request was successful or failed.

Commit: Use finally to clean up after the fetch.

Hints:

Use async/await to fetch data asynchronously.
throw a custom error if no tickets are found.
Use try/catch to manage errors, such as a failed fetch or invalid response.
Use finally to hide the loading message, ensuring the page stays user-friendly.

Submission Guidelines:

GitHub Repository: Include your index.html and main.js files in the repository. Ensure your code is well-organized and commented for clarity.
Repository Link: Ensure your repository is public or accessible to your instructors. Share the URL of your repository.

Expected Outcomes:

After completing this challenge, students will:

Understand how to use async/await to manage asynchronous code.
Implement try/catch/finally for error handling.
Learn how to use throw to create custom errors.
Dynamically display data from an API using JavaScript.

This challenge provides hands-on experience with error handling and async/await, helping students manage asynchronous operations more effectively and handle errors gracefully.