import { app } from "./app";

app.listen({
  host: '0.0.0.0',
  port: 333
}).then(()=> {
  console.log("HTTP server running!")
})