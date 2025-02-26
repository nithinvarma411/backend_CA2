import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API working")
})

app.post("/check", (req, res) => {
    const {email, password} = req.body

    if (!email) {
        return res.send({"message": "email cannot be empty"})
    }

    if (!password) {
        return res.send({"message": "password cannot be empty"})
    }

    return res.send({ email, password})
})

app.listen(8080, (req, res) => {
    console.log("server running on port 8080")
})