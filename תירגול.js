let s = prompt("htrgera")
let p = () => {
    for (i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }
    return true

}
console.log(p())


let s = prompt("htrgera")
let all = ""

let p = () => {
    for (i = 0; i < s.length; i++) {
        all += s[s.length - 1 - i]
    }
    return all
}
console.log(p())



for (h in monsters) {
    monsters[h].dH = function dH(monsters) {
        for (i in monsters) {
            monsters[i].hp -= 200
            console.log(monsters[i].hp)
        }
    }
    dH(monsters)
}




let user = {
    id: "b79fee9d-7001-4618-b58f-8b09fbe4f619",
    name: "doctorcode",
    balance: 1000,
    books: [],
}

let bookStore = [
    {
        id: 'b79fee9d-7001-4618-b58f-8b09fbe4f615',
        name: 'Davion the knight',
        pages: 1800,
        price: 125.99,
        quantity: 10,
        forKids: false,
    },
    {
        id: 'b79fee9d-7001-4618-b58f-8b09fbe4f618',
        name: 'The Hobbit',
        pages: 2550,
        price: 50.5,
        quantity: 2,
        forKids: false,
    },
    {
        id: 'b79fee9d-7001-4618-b58f-8b09fbe4f622',
        name: 'Lord of the rings',
        pages: 650,
        price: 75.99,
        quantity: 88,
        forKids: false,
    },
]

//ליצור ספר
let createBook = (id, name, pages, price, quantity, forKids) => {
    let newBook = {
        id, name, pages, price, quantity, forKids
    }
    bookStore.push(newBook)
}
createBook('b79fee9d-7001-4618-b58f-8b09fbe4f654', "gamad bayaar", 32, 24.8, 30, true)

// לקרוא ספר
let readBookById = (bookId) =>{
    let book = bookStore.find((bookStore)=> bookStore.id === bookId)
    return book? book : {}
}
readBookById("b79fee9d-7001-4618-b58f-8b09fbe4f622")