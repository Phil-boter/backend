import app from "./app";
import db from "./database/DatabaseConnection"

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
	console.log(`App Started on ${PORT}`);
	//db.saveStatusLog("server.listen", "listen", "success", `server Started on `, `${PORT}`)
});
