import "friendly-challenge/widget"

document.addEventListener("submit", (event) => {
    console.log("Validating")
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let request = new XMLHttpRequest()
    request.open("POST", "http://localhost:3000/authorize")

    console.log("Validated")

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    request.send(`user=${username}&password=${password}`)
    const headers = new Headers()
    headers.append("Accept" , "application/json")
    headers.append("Authorization", btoa(username + ":" + password))

    event.preventDefault
})