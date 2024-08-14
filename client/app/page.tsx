import React, {useEffect, useState} from 'react'
import styles from "./page.module.css";

async function apiResponse(){
  fetch("https://special-spork-wrrrpxpq9gqpf95r6-8080.app.github.dev/api/home").then(response => {
    return response.json()
  })
}




function page() {
  return (
    <div>Hello world </div>
  )
}

export default page




