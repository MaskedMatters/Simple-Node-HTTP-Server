# Simple-Node-HTTP-Server
An HTTP server is used for very basic server's and apps. If you want to create something more complex and more working I will create another repository that might be out while you are reading this!

  To start off we must create the Libraries Section. This imports all of the information your server needs to work. Kind of like a library for humans where you read a book about code to pass the Software Developer Quiz, the server needs information to actually work. The first book we are going to give him will be about http. You need to write something this, const http = require('http');

  Our next section "Server Hosting" is all the information we need to get it on our browser. The first thing you will write is const hostname = "127.0.0.1"; the line under that you will write const port = 3000; We will use this later.

  The next section called server is going to create the server and inside of the curly brackets is what the server wil do. You are going to write:

const server = http.createServer((req, res) => {
  res.write("Hello, World!")
  res.end()
});

The res.write means it is using the response function to tell the server something and write just means to print Hello, World! res.end() just ends the function. When we created the libraries section we added something called http and used it to create the server. You can also put res.send("") which will send some html to the screen. You can also add an html file and connect it so it doesn't look like a big jumbled mess of stuff inside the res.send("") function. (Note: We Did Not Add An HTML file!!)

  Now the last function actually hosts it on the internet, write this:

server.listen(port, hostname, () => {
  console.log("Server listening at: http://" + hostname + ":" + port + "/")
})

This will start the server to listen at http://localhost:3000/ when you type in the terminal "node start". The console.log() function says "Server listening at: http://127.0.0.1:3000/" when you start your server!


BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE BYE 
