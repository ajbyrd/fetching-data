console.log("This is working and you will understand it")

/* Creating DOM Element */

const foodFactory = (food) => {
    return `
    <div class="foodList">
    <h2>${food.name}</h2>
    <section>${food.category}</section>
    <aside>${food.ethnicity}</aside>
    </div>
    `
}

/* */

const addFoodToDom = (foodString) => {
    const foodListEl = document.querySelector(".foodList")
    
    foodListEl.innerHTML += foodString
}

/* Fetch call that passes  */

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })

