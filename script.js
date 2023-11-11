
 
// Sample menu items data
var menuItemsData = {
  "LUNCH": [
    { name: "Chicken Caesar Salad", price: 12.99 },
    { name: "Vegetarian Wrap", price: 9.99 },
    // Add more lunch items as needed
  ],
  "DINNER": [
    { name: "Grilled Salmon", price: 19.99 },
    { name: "Filet Mignon", price: 24.99 },
    // Add more dinner items as needed
  ],
  "SUSHI": [
    { name: "Dragon Roll", price: 15.99 },
    { name: "Spicy Tuna Roll", price: 14.99 },
    // Add more sushi items as needed
  ],
  // Add more categories and items as needed
};

function loadRandomCategory() {
  var categories = Object.keys(menuItemsData);
  var randomIndex = Math.floor(Math.random() * categories.length);
  var randomCategoryShortName = categories[randomIndex];
  loadMenuItems(randomCategoryShortName);
}

function loadMenuItems(categoryShortName) {
  var menuItemsContainer = document.getElementById("menu-items-container");
  var items = menuItemsData[categoryShortName];

  if (items) {
    var html = "<h2>" + categoryShortName + " Menu</h2><ul>";

    items.forEach(function (item) {
      html += "<li>" + item.name + " - $" + item.price.toFixed(2) + "</li>";
    });

    html += "</ul>";
    menuItemsContainer.innerHTML = html;
  } else {
    menuItemsContainer.innerHTML = "<p>No menu items found for category: " + categoryShortName + ".</p>";
  }
}
// ... (previous JavaScript code) ...

function loadMenu() {
  var menuItemsContainer = document.getElementById("menu-items-container");
  var allItems = [];

  // Concatenate all menu items from different categories
  Object.values(menuItemsData).forEach(function (categoryItems) {
    allItems = allItems.concat(categoryItems);
  });

  if (allItems.length > 0) {
    var html = "<h2>All Menu Items</h2><ul>";

    allItems.forEach(function (item) {
      html += "<li>" + item.name + " - $" + item.price.toFixed(2) + "</li>";
    });

    html += "</ul>";
    menuItemsContainer.innerHTML = html;
  } else {
    menuItemsContainer.innerHTML = "<p>No menu items found.</p>";
  }
}

// ... (remaining JavaScript code) ...


function loadMap() {
  // Implement the logic to load the Map page
  // You can replace this with your actual code
  alert("Load Map page");
}

// ... (remaining JavaScript code)
  