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

        // Task 3: Display Tickets Dynamically on the Page

        const ticketList = document.createElement("ul") 

        tickets.forEach(ticket => {
            const listItem = document.createElement("li")
            listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: User ${ticket.userId}, Issue: ${ticket.title}, Details: ${ticket.body}`
            ticketList.appendChild(listItem)
        })

        ticketContainer.appendChild(ticketList) 
    } catch (error) {
        errorMessage.textContent = error.message

    // Task 4: Use finally to Ensure Cleanup
    
    } finally {
        console.log("Fetch attempt completed")
    }
}

// Fetch and display tickets for customer 
displayTickets()


