document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = Boolean(
    localStorage.getItem("username") &&
    localStorage.getItem("password") &&
    localStorage.getItem("role") === "admin"
  )
  const isHomePage = window.location.pathname.endsWith("/index.html")

  Kitoblar.forEach(kitob => {
    let col5 = document.createElement("div")
    col5.classList.add("col-12", "col-sm-6", "col-lg-4")
    col5.dataset.genre = kitob.janr
    col5.innerHTML = `
    <a href="single.html?id=${kitob.id}" style="text-decoration:none">
      <article class="kitob-kartasi">
        <div class="muqova-qismi">
          <img src="${kitob.rasm}" class="kitob-muqovasi" alt="${kitob.nomi} kitobining muqovasi">
          <a href="yoqimlilar.html" onclick="yoqimlilargaQosh(${kitob.id}); return false"
          class="sevimli-havolasi" aria-label="Sevimlilarga qo'shish">
          <img src="images/qoravariantyurak.png">
        </a>
        ${isAdmin && isHomePage ? `<button type="button" class="kitob-tahrirlash" data-edit-book-id="${kitob.id}" aria-label="${kitob.nomi} kitobini tahrirlash" title="Kitobni tahrirlash">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path></svg>
        </button>` : ""}
        </div>
        <div class="kitob-malumoti">
          <p class="kitob-janri">${kitob.janr}</p>
        <a href="single.html?id=${kitob.id}" class="text-decoration-none">
          <h3 class="kitob-nomi">${kitob.nomi}</h3>
        </a>
          <p class="kitob-muallifi">${kitob.muallif}</p>
          <p class="kitob-tavsifi">${kitob.tavsif}</p>
        <div class="kitob-pasti">
          <span class="kitob-narxi">${kitob.narx} so'm</span>
          <button class="savatga-qoshish-tugmasi" type="button"
          onclick="savatgaqoshish(${kitob.id})">Savatga qo'shish</button>
        </div>
        </div>
      </article>
    </a>
    `
    document.querySelector("#kitoblarRoyxati")?.append(col5)




  })

  if (isAdmin && isHomePage) document.querySelector("#kitoblarRoyxati")?.addEventListener("click", event => {
    const editButton = event.target.closest("[data-edit-book-id]")
    if (!editButton) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    window.location.href = `adminPanel.html?edit=${encodeURIComponent(editButton.dataset.editBookId)}`
  })
  document.querySelectorAll(".kitob-tavsifi").forEach(element => {
    let sozlar = element.textContent.trim().split(/\s+/);

    if (sozlar.length > 7) {
      element.textContent = sozlar.slice(0, 7).join(" ") + "...";
    }
  });

  const navList = document.querySelector("#boshqaruvPaneli")
  if (isAdmin && navList) {
    navList.classList.remove("d-none")
    navList.innerHTML = '<a class="nav-link text-nowrap" href="adminPanel.html">Admin panel</a>'
  }
})

function yoqimlilargaQosh(id) {
  let yoqimlilar = JSON.parse(localStorage.getItem("Favorites") || "[]")

  if (!yoqimlilar.includes(id)) {
    yoqimlilar.push(id)
    localStorage.setItem("Favorites", JSON.stringify(yoqimlilar))
    alert("Yoqimlilarga qo'shildi")
  } else {
    alert("Bu kitob yoqimlilarga qo'shilgan")
  }
}

function savatgaqoshish(id) {
  let savat = JSON.parse(localStorage.getItem("Savat") || "[]")

  if (!savat.includes(id)) {
    savat.push(id)
    localStorage.setItem("Savat", JSON.stringify(savat))
    alert("Savatga qo'shildi")
  } else {
    alert("Bu kitob savatga qo'shilgan")
  }
}



let username = localStorage.getItem("username")
let password = localStorage.getItem("password")

if (username && password) {
  document.querySelector(".hisob").innerHTML = `
  <span class="hisob-havolasi">${username}</span>
  <a href="sigIN.html" class="hisob-tugmasi">Chiqish</a>
  `
}