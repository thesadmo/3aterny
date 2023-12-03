function toggleForm(formId) {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var loginToggle = document.getElementById("loginToggle");
    var signupToggle = document.getElementById("signupToggle");

    if (formId === "loginForm") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginToggle.classList.add("active");
        signupToggle.classList.remove("active");
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginToggle.classList.remove("active");
        signupToggle.classList.add("active");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        // Validate login 
        alert("Login logic here");
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        // Validate signup 
        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;

        if (newUsername && newPassword) {
            
            alert("Account created successfully");
            toggleForm("loginForm"); // Switch to the login form after signup
        } else {
            alert("Please fill in all fields");
        }
    });

    
    const registeredUsers = {
        "user1": "password1",
        "user2": "password2",
        "user3": "password3",
        "user4": "password4",
        "user5": "password5",
    };

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        if (registeredUsers[enteredUsername] && registeredUsers[enteredUsername] === enteredPassword) {
            window.location.href = "home.html"; // Redirect to the home page
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;
        var newPasswordConfirm = document.getElementById("newPasswordConfirm").value;

        if (newUsername && newPassword && newPassword === newPasswordConfirm) {
            registeredUsers[newUsername] = newPassword;
            alert("Account created successfully");
            toggleForm("loginForm");
        } else {
            alert("Please fill in all fields and ensure passwords match");
        }
    });
});




function addToCart(name, price, image) {
    const newItem = { name, price, image };

    
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    
    cartItems.push(newItem);

    
    localStorage.setItem('cart', JSON.stringify(cartItems));

    alert('Item added to cart!');
}


const cartItems = JSON.parse(localStorage.getItem('cart')) || [];


const cartItemsBody = document.getElementById('cartItemsBody');
cartItems.forEach(item => {
    const cartItemRow = document.createElement('tr');
    cartItemRow.innerHTML = `
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>$${item.price}</td>
    `;
    cartItemsBody.appendChild(cartItemRow);
});


const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


const cartTotal = document.getElementById('cartTotal');
cartTotal.innerHTML = `Total: $${totalPrice}`;