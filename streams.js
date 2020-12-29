const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
    // Solution 1: Read File Callback
    // Not good for large files or in production
    // fs.readFile("./test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2: Streams.
    // Readable is faster than res, which isn't good.
    // Back Pressure.
    // const readable = fs.createReadStream("./test-file.txt");

    // readable.on("data", (chunk) => {
    //     res.write(chunk); // res is writable stream.
    // });

    // readable.on("end", () => {
    //     res.end();
    // });

    // readable.on("error", (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File not found.");
    // });

    // Solution 3: Pipes
    // Pipes the source into the destination.
    // readableSource.pipe(writableDestination)
    const readable = fs.createReadStream("./test-file.txt");
    readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening...");
});
