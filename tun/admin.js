let username = localStorage.getItem("username")
let password = localStorage.getItem("password")
let role = localStorage.getItem("role")
if (!username || !password || role !== "admin") {
    window.location.href = "sigIN.html"
}

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".container form")
    if (!form) {
        return
    }

    let editId = new URLSearchParams(window.location.search).get("edit")
    let editBook = editId === null
        ? null
        : Kitoblar.find(product => Number(product.id) === Number(editId))

    if (editId !== null && !editBook) {
        alert("Tahrirlanadigan kitob topilmadi")
        window.location.href = "index.html"
        return
    }

    if (editBook) {
        document.querySelector("#formSarlavhasi").textContent = "Kitobni tahrirlash"
        document.querySelector("#saqlashTugmasi").textContent = "O'zgarishlarni saqlash"
        document.querySelector("#sarlavha").value = editBook.nomi || ""
        document.querySelector("#muallif").value = editBook.muallif || ""
        document.querySelector("#janr").value = editBook.janr || ""
        document.querySelector("#rasm").value = editBook.rasm || ""
        document.querySelector("#link").value = editBook.link || ""
        document.querySelector("#narx").value = editBook.narx ?? ""
        document.querySelector("#tavsif").value = editBook.tavsif || ""
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let products = JSON.parse(localStorage.getItem("Products") || "[]")
        if (!Array.isArray(products)) {
            products = []
        }

        let book = {
            nomi: document.querySelector("#sarlavha").value.trim(),
            muallif: document.querySelector("#muallif").value.trim(),
            janr: document.querySelector("#janr").value.trim(),
            rasm: document.querySelector("#rasm").value.trim(),
            link: document.querySelector("#link").value.trim(),
            narx: Number(document.querySelector("#narx").value),
            tavsif: document.querySelector("#tavsif").value.trim()
        }

        if (editBook) {
            book.id = editBook.id
            let productIndex = products.findIndex(product => Number(product.id) === Number(editBook.id))
            if (productIndex === -1) {
                products.push(book)
            } else {
                products[productIndex] = book
            }

            localStorage.setItem("Products", JSON.stringify(products))
            alert("Kitob muvaffaqiyatli tahrirlandi")
            window.location.href = "index.html"
            return
        }

        let maxId = [...Kitoblar, ...products].reduce(
            (max, product) => Math.max(max, Number(product.id) || 0),
            0
        )
        book.id = maxId + 1
        products.push(book)
        localStorage.setItem("Products", JSON.stringify(products))
        form.reset()
        alert("Kitob muvaffaqiyatli qo'shildi")
    })
})
