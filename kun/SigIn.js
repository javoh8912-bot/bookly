document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#yuborishTugmasi").addEventListener("click", (e) => {
        e.preventDefault()
        let username = document.querySelector("#foydalanuvchiNomi").value.trim()
        let password = document.querySelector("#maxfiySoz").value.trim()


        let currentUser = Users.find(u =>u.username === username && u.password === password)

            if (!currentUser) {
                alert("Username yoki parol xato")
                return
            }
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            localStorage.setItem("role", currentUser.role)
            window.location.href = "index.html"
        })
    })
