function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const correctUsername = "roshni.24b15310163@abes.ac.in";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        document.getElementById("message").innerHTML = "Invalid Username or Password!";
    }

    return false;
}