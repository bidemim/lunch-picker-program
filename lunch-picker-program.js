const lunches = [];

function addLunchToEnd(arr1, str1) {
  lunches.push(arr1)
  console.log(`${str1} added to the end of the lunch menu.`)
  return lunches
}

function addLunchToStart(arr2, str2) {
  lunches.unshift(arr2)
  console.log(`${str2} added to the start of the lunch menu.`)
  return arr2
}

function removeLastLunch(arr3) {
  if (lunches.length > 0) {
    lunches.pop();
    console.log(`${arr3} removed from the end of the lunch menu.`) 
  } else {console.log("No lunches to remove.")}
  return arr3
}

function removeFirstLunch(arr4) {
  if (arr4 == 0) {
    console.log("No lunches to remove.")}
  else { 
    lunches.shift()
    console.log(`${arr4} removed from the start of the lunch menu.`)}
  return arr4
}

function getRandomLunch(arr5) {
  if (arr5 == 0) {
    console.log("No lunches available.")
  } else {
    console.log(`Randomly selected lunch: ${arr5[0]} `)
  }
}

function showLunchMenu(arr6) {
  if (arr6 == 0) {
    console.log("The menu is empty.")
  } else {
    console.log(`"Menu items: ${arr6}`)
  }}
  
console.log(addLunchToEnd(lunches, "Tacos"))
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"))
console.log(addLunchToStart(lunches, "Sushi"))
console.log()
console.log()
console.log()
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"))
console.log(removeLastLunch(["Stew", "Soup", "Toast"]))
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]))
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]))
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]))
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]))
console.log(showLunchMenu(["Greens", "Corns", "Beans"]))
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]))
