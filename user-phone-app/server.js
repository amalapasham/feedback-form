app.use(express.urlencoded({ extended: true })); // to parse form data

app.post("/add-user", (req, res) => {
    const { name, email } = req.body; // <- email added
    console.log("Name:", name, "Email:", email);
    res.send(`Hi ${name}, your feedback is received! 😃`);
});
