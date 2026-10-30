let Products =[]
let Kitoblar = []
Products = JSON.parse(localStorage.getItem("Products") || "[]")
Kitoblar =[
    {
        id: 1,
        nomi: "O'tkan kunlar",
        muallif: "Abdulla Qodiriy",
        janr: "Roman",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkagzVJRTSrLd0SZV23acMAy-rJXVUBxNsLr01oQfthYXdqFtkZg2pfDdC&s=10",
        narx: 45000,
        tavsif: "O'zbek adabiyotining mashhur tarixiy romani.",
        link: "https://ziyouz.uz/ozbek-nasri/abdulla-qodiriy/abdulla-qodiriy-otkan-kunlar-roman/"
    },
    {
        id: 2,
        nomi: "Mehrobdan chayon",
        muallif: "Abdulla Qodiriy",
        janr: "Roman",
        rasm: "https://qamar.uz/media/1c/%D0%9D%D0%BE%D0%BC%D0%B5%D0%BD%D0%BA%D0%BB%D0%B0%D1%82%D1%83%D1%80%D0%B0/20260819/Mehrobdan%20chayon.png",
        narx: 42000,
        tavsif: "Tarixiy voqealar va inson taqdiri haqida roman.",
        link: "https://ziyouz.uz/ozbek-nasri/abdulla-qodiriy/abdulla-qodiriy-mehrobdan-chayon-roman/"
    },
    {
        id: 3,
        nomi: "Shum bola",
        muallif: "G'afur G'ulom",
        janr: "Qissa",
        rasm: "https://elib.tsul.uz/uploads/books/1777730626413-3033bf631766ffbe.jpg",
        narx: 35000,
        tavsif: "Sho'x va topqir bolaning sarguzashtlari haqidagi qissa.",
        link: "https://www.gutenberg.org/files/76/76-h/76-h.htm"
    },
    {
        id: 4,
        nomi: "Dunyoning ishlari",
        muallif: "O'tkir Hoshimov",
        janr: "Qissa",
        rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M7bX0yrAu1lmbIKYCi-y3Q3E-uIQDMk9irtAP4HskQ&s=10",
        narx: 39000,
        tavsif: "Ona mehri va hayot haqida samimiy hikoyalar.",
        link: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
    },
    {
        id: 5,
        nomi: "Sariq devni minib",
        muallif: "Xudoyberdi To'xtaboyev",
        janr: "Sarguzasht",
        rasm: "https://kitobxon.com/img_knigi/1546.jpg",
        narx: 38000,
        tavsif: "Bolalar uchun qiziqarli va sehrli sarguzasht qissasi.",
        link: "https://www.gutenberg.org/files/11/11-h/11-h.htm"
    },
    {
        id: 6,
        nomi: "Ikki eshik orasi",
        muallif: "O'tkir Hoshimov",
        janr: "Roman",
        rasm: "https://mutolaa.com/_next/image?url=https%3A%2F%2Fcdn-minio.mutolaa.com%2Fmedia%2Fbooks%2F2026%2F06%2Fphoto_2026-06-05_12-22-42.jpg&w=3840&q=75",
        narx: 52000,
        tavsif: "Insonlar taqdiri va urush yillari haqida roman.",
        link: "https://ziyouz.uz/ozbek-nasri/abdulla-qodiriy/abdulla-qodiriy-otkan-kunlar-roman/"
    },
    {
        id: 7,
        nomi: "G'urur va andisha",
        muallif: "Jane Austen",
        janr: "Roman",
        rasm: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        narx: 48000,
        tavsif: "Elizabeth Bennet va janob Darcy haqidagi mashhur roman.",
        link: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
    },
    {
        id: 8,
        nomi: "Buyuk Getsbi",
        muallif: "F. Scott Fitzgerald",
        janr: "Roman",
        rasm: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        narx: 46000,
        tavsif: "Jay Gatsby va uning orzulari haqida roman.",
        link: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
    },
    {
        id: 9,
        nomi: "Hayvonlar xo'jaligi",
        muallif: "George Orwell",
        janr: "Qissa",
        rasm: "https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg",
        narx: 35000,
        tavsif: "Hayvonlar fermasidagi voqealar orqali jamiyat tasvirlangan qissa.",
        link: "https://www.gutenberg.org/files/76/76-h/76-h.htm"
    },
    {
        id: 10,
        nomi: "Kichkina shahzoda",
        muallif: "Antoine de Saint-Exupery",
        janr: "Qissa",
        rasm: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg",
        narx: 32000,
        tavsif: "Kichkina shahzodaning sayyoralarga qilgan safarlari haqida qissa.",
        link: "https://www.gutenberg.org/files/11/11-h/11-h.htm"
    },
    {
        id: 11,
        nomi: "Chol va dengiz",
        muallif: "Ernest Hemingway",
        janr: "Qissa",
        rasm: "https://covers.openlibrary.org/b/isbn/9780684801223-L.jpg",
        narx: 34000,
        tavsif: "Baliqchi Santyagoning dengizdagi kurashi haqida qissa.",
        link: "https://www.gutenberg.org/files/120/120-h/120-h.htm"
    },
    {
        id: 12,
        nomi: "Hobbit",
        muallif: "J. R. R. Tolkien",
        janr: "Sarguzasht",
        rasm: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        narx: 55000,
        tavsif: "Bilbo Bagginsning uzoq safar va sarguzashtlari.",
        link: "https://www.gutenberg.org/files/120/120-h/120-h.htm"
    },
    {
        id: 13,
        nomi: "Xazina oroli",
        muallif: "Robert Louis Stevenson",
        janr: "Sarguzasht",
        rasm: "https://covers.openlibrary.org/b/isbn/9780141321004-L.jpg",
        narx: 39000,
        tavsif: "Jim Hawkins va xazina izlovchilarining dengiz sarguzashtlari.",
        link: "https://www.gutenberg.org/files/120/120-h/120-h.htm"
    },
    {
        id: 14,
        nomi: "Robinzon Kruzo",
        muallif: "Daniel Defoe",
        janr: "Sarguzasht",
        rasm: "https://covers.openlibrary.org/b/isbn/9780141439822-L.jpg",
        narx: 41000,
        tavsif: "Kimsasiz orolda yashab qolishga urinayotgan dengizchi haqida.",
        link: "https://www.gutenberg.org/files/521/521-h/521-h.htm"
    },
    {
        id: 15,
        nomi: "Dunyo bo'ylab 80 kunda",
        muallif: "Jules Verne",
        janr: "Sarguzasht",
        rasm: "https://covers.openlibrary.org/b/isbn/9780140449068-L.jpg",
        narx: 43000,
        tavsif: "Phileas Foggning dunyo bo'ylab qilgan sayohati.",
        link: "https://www.gutenberg.org/files/103/103-h/103-h.htm"
    },
    {
        id: 16,
        nomi: "Dyuna",
        muallif: "Frank Herbert",
        janr: "Fantastika",
        rasm: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
        narx: 65000,
        tavsif: "Arrakis sayyorasi va Atreideslar oilasi haqidagi ilmiy-fantastik roman.",
        link: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
    },
    {
        id: 17,
        nomi: "Frankenshteyn",
        muallif: "Mary Shelley",
        janr: "Fantastika",
        rasm: "https://covers.openlibrary.org/b/isbn/9780486282114-L.jpg",
        narx: 44000,
        tavsif: "Olim Viktor Frankenshteyn yaratgan maxluq haqidagi roman.",
        link: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
    },
    {
        id: 18,
        nomi: "1984",
        muallif: "George Orwell",
        janr: "Fantastika",
        rasm: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        narx: 47000,
        tavsif: "Kelajakdagi totalitar jamiyat tasvirlangan antiutopik roman.",
        link: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
    },
    {
        id: 19,
        nomi: "Farengeyt bo'yicha 451 daraja",
        muallif: "Ray Bradbury",
        janr: "Fantastika",
        rasm: "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg",
        narx: 49000,
        tavsif: "Kitoblar taqiqlangan jamiyat haqidagi ilmiy-fantastik roman.",
        link: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
    },
    {
        id: 20,
        nomi: "G'aroyib yangi dunyo",
        muallif: "Aldous Huxley",
        janr: "Fantastika",
        rasm: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg",
        narx: 46000,
        tavsif: "Kelajak jamiyati va inson erkinligi haqida antiutopik roman.",
        link: "https://www.gutenberg.org/files/84/84-h/84-h.htm"
    },
    {
        id: 21,
        nomi: "Sherlok Xolms sarguzashtlari",
        muallif: "Arthur Conan Doyle",
        janr: "Detektiv",
        rasm: "https://covers.openlibrary.org/b/isbn/9780451528018-L.jpg",
        narx: 42000,
        tavsif: "Mashhur detektiv Sherlok Xolms va doktor Vatson tergovlari.",
        link: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
    },
    {
        id: 22,
        nomi: "Sharq ekspressidagi qotillik",
        muallif: "Agatha Christie",
        janr: "Detektiv",
        rasm: "https://covers.openlibrary.org/b/isbn/9780062693662-L.jpg",
        narx: 45000,
        tavsif: "Erkyul Puaro poyezddagi sirli qotillikni tergov qiladi.",
        link: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
    },
    {
        id: 23,
        nomi: "Va hech kim qolmadi",
        muallif: "Agatha Christie",
        janr: "Detektiv",
        rasm: "https://covers.openlibrary.org/b/isbn/9780062073488-L.jpg",
        narx: 44000,
        tavsif: "Orolda qolgan mehmonlar birin-ketin g'oyib bo'la boshlaydi.",
        link: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
    },
    {
        id: 24,
        nomi: "Katta uyqu",
        muallif: "Raymond Chandler",
        janr: "Detektiv",
        rasm: "https://covers.openlibrary.org/b/isbn/9780394758282-L.jpg",
        narx: 43000,
        tavsif: "Xususiy detektiv Philip Marlowe ishtirokidagi jinoyat romani.",
        link: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
    },
    {
        id: 25,
        nomi: "ABC qotilliklari",
        muallif: "Agatha Christie",
        janr: "Detektiv",
        rasm: "https://covers.openlibrary.org/b/isbn/9780062073587-L.jpg",
        narx: 44000,
        tavsif: "Erkyul Puaro ketma-ket sodir etilgan qotilliklarni tergov qiladi.",
        link: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
    }
];

Products.forEach(kitob => {
    let idIndex = Kitoblar.findIndex(mavjudKitob => Number(mavjudKitob.id) === Number(kitob.id))
    if (idIndex === -1) {
        Kitoblar.push(kitob)
    } else {
        Kitoblar[idIndex] = { ...Kitoblar[idIndex], ...kitob }
    }
})

Students = Products
localStorage.setItem("Products", JSON.stringify(Products))

let Users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin"
    }
];
