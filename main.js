

let siteBtn = document.getElementById('site-btn')
let cartCounter = document.getElementById('cart')
let spellBtns = document.querySelectorAll('.spell-btn')
let spellList = document.querySelector('.spell-list')
let total = document.getElementById('total')
let checkout = document.getElementById('checkout')

let cartCount = 0
let priceTotal = 0


const fakeError = () => {
    alert('Our site is undergoing temporary maintenance')
}

const buySpell = () => {
        cartCount += 1
        priceTotal += 1.99
        cartCounter.textContent = `Cart: ${cartCount}`
        total.textContent = `Total: ${Math.round(priceTotal * 100)/100}`
}

spellBtns.forEach(btn => {
    btn.addEventListener('click', buySpell)
})


checkout.addEventListener('click', () => {
    alert('Success!')
})
siteBtn.addEventListener('click', fakeError)