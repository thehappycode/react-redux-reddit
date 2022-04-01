const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

app.post("/v1/update", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body);
    }, [2000])
});

app.listen(port, () => {
    console.log("Server is running...");
})