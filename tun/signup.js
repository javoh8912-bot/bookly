document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#royxatdanOtishTugmasi").addEventListener("click", (e) => {
        e.preventDefault()
        let username = document.querySelector("#royxatdanOtuvchiNomi").value.trim()
        let email = document.querySelector("#royxatElektronPochtasi").value.trim()
        let number = document.querySelector("#royxatTelefonRaqami").value.trim()
        let password = document.querySelector("#royxatMaxfiySozi").value.trim()


                localStorage.setItem("username", username)
                localStorage.setItem("email", email)
                localStorage.setItem("number", number)
                localStorage.setItem("password", password)
                localStorage.setItem("role", "user")
                window.location.href = "index.html"
            
        })
    })
