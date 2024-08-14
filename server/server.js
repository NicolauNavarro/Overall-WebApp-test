import express from 'express';
import {Client} from '@notionhq/client'
import cors from 'cors';
import dotenv from "dotenv";


/* CONFIGURATION */
dotenv.config()
const notion = new Client({
    auth: process.env.NOTION_TOKEN
})
const PORT = process.env.PORT || 9000
const app = express();
app.use(express.json())
app.use(cors())




/* ROUTES *//*
app.use("/logIn", logInRoutes)
app.use("/", homeRoutes)
*/


// PAGE ROUTES
app.use("/logIn", (req, res) => {
    res.redirect(`https://api.notion.com/v1/oauth/authorize?client_id=${process.env.OAUTH_CLIENT_ID}&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fspecial-spork-wrrrpxpq9gqpf95r6-8080.app.github.dev%2F`)
})


 // API ROUTES
app.get("/api/protected", (req, res) => {
    res.json({
        message: "This is protected data"
    })
})






app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})



async function getUsers() {
    const listUsersResponse = await notion.users.list({})
    return listUsersResponse
}
 
console.log(await getUsers())

