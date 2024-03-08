document.write("JavaScript Connected");

let usernames = ['Ateeb', 'Hamza', 'Babar'];

let choice = prompt("Do you want to login? (yes/no)");

if (choice.toLowerCase() === 'yes') {
    // Prompt user for their name
    let name = prompt("Please enter your name:");
    
    // Check if a name is provided
    if (name) {
        // Add the username to the array
        usernames.push(name.trim()); // Trim any leading or trailing whitespace
        console.log("User added successfully!");
    } else {
        console.log("Invalid name!");
    }
} else {
    console.log("Login cancelled.");
}

// Display the updated array
console.log("Usernames array:", usernames);

