import app from "./app";
import connectDB from "./database";

connectDB();

const PORT = 3000 || process.env.PORT;
app.listen(PORT);
console.log("servidor escuchando en el puerto", 3000);
