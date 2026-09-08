// Importing built-in Node.js modules
const os = require("os");
const path = require("path");
const dns = require("dns");
const net = require("net");

// ==========================================
// 1. OS MODULE
// ==========================================

console.log("===== OS MODULE =====");

console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Computer Name:", os.hostname());
console.log("Number of CPUs:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());


// ==========================================
// 2. PATH MODULE
// ==========================================

console.log("\n===== PATH MODULE =====");

const filePath = path.join(__dirname, "files", "student.txt");

console.log("Complete Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("File Extension:", path.extname(filePath));


// ==========================================
// 3. DNS MODULE
// ==========================================

console.log("\n===== DNS MODULE =====");

dns.lookup("google.com", (error, address, family) => {

    if (error) {
        console.log("DNS Error:", error);
        return;
    }

    console.log("Domain Name: google.com");
    console.log("IP Address:", address);
    console.log("IP Version:", family);
});


// ==========================================
// 4. NET MODULE
// ==========================================

console.log("\n===== NET MODULE =====");

const server = net.createServer((socket) => {

    console.log("Client connected");

    socket.write("Hello! You are connected to Node.js TCP Server.");

    socket.on("data", (data) => {
        console.log("Client says:", data.toString());
    });

    socket.on("end", () => {
        console.log("Client disconnected");
    });

});

server.listen(3000, () => {
    console.log("TCP Server is running on port 3000");
});