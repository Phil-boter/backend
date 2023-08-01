import app from "./app";

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
	console.log(`App Started on ${PORT}`);
});
