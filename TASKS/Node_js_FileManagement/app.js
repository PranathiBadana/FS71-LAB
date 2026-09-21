// Import the File System module
const fs = require("fs");

// Import the Readline module
// It is used to take input from the user
const readline = require("readline");

// Create an interface for taking user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Ask the user for the filename
rl.question("Enter the filename: ", function (filename) {

    // Ask the user for the initial content
    rl.question("Enter the content: ", function (content) {

        // --------------------------------
        // 1. CREATE / WRITE THE FILE
        // --------------------------------

        // writeFile() creates a new file
        // If the file already exists, its old content is replaced
        fs.writeFile(filename, content, function (error) {

            // Check if there is an error
            if (error) {
                console.log("Error while creating the file:", error);
                rl.close();
                return;
            }

            console.log("\nFile created successfully.");


            // --------------------------------
            // 2. READ THE FILE
            // --------------------------------

            // readFile() reads the contents of the file
            fs.readFile(filename, "utf8", function (error, data) {

                if (error) {
                    console.log("Error while reading the file:", error);
                    rl.close();
                    return;
                }

                console.log("\nInitial file contents:");
                console.log(data);


                // --------------------------------
                // 3. APPEND ADDITIONAL CONTENT
                // --------------------------------

                // Ask the user for additional content
                rl.question("\nEnter additional content: ", function (additionalContent) {

                    // appendFile() adds new content
                    // without removing the existing content
                    fs.appendFile(
                        filename,
                        "\n" + additionalContent,
                        function (error) {

                            if (error) {
                                console.log("Error while appending:", error);
                                rl.close();
                                return;
                            }

                            console.log("\nContent appended successfully.");


                            // --------------------------------
                            // 4. READ FINAL CONTENT
                            // --------------------------------

                            // Read the file again after appending
                            fs.readFile(
                                filename,
                                "utf8",
                                function (error, finalData) {

                                    if (error) {
                                        console.log(
                                            "Error while reading final content:",
                                            error
                                        );
                                        rl.close();
                                        return;
                                    }

                                    console.log("\nFinal file contents:");
                                    console.log(finalData);

                                    // Close the readline interface
                                    rl.close();
                                }
                            );
                        }
                    );
                });
            });
        });
    });
});