// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketContainer = document.getElementById("ticketContainer")
const errorMessage = document.getElementById("errorMessage")

// Async function to fetch and display tickets
async function displayTickets() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            throw new Error("Failed to fetch tickets")
        }

        const tickets = await response.json()

        if (tickets.length === 0) {
            throw new Error("No unresolved tickets available")
        }
    }
}