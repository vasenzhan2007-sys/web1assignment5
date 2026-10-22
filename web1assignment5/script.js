const userProfile = {
    name: "Yerkezhan",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Reading", "Music", "Programming"]
};

// Task 1 and Task 2
function displayProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("developerStatus").textContent = userProfile.isDeveloper;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("hobbyCount").textContent = userProfile.hobbies.length;

    displayHobbies();
}

// Task 5
function displayHobbies() {
    const hobbyList = document.getElementById("hobbyList");
    hobbyList.innerHTML = "";

    userProfile.hobbies.forEach(function(hobby) {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbyList.appendChild(li);
    });
}

// Task 3 and Task 4
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const birthYear = Number(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();

    if (username === "" || birthYear < 1900 || birthYear > currentYear) {
        document.getElementById("message").textContent = "Please enter valid information.";
        return;
    }

    userProfile.name = username;
    userProfile.birthYear = birthYear;

    displayProfile();

    document.getElementById("message").textContent = "Profile updated successfully!";
});

// Add Item button
document.getElementById("addButton").addEventListener("click", function() {
    const newHobby = document.getElementById("newHobby").value.trim();

    if (newHobby !== "") {
        userProfile.hobbies.push(newHobby);

        displayHobbies();
        document.getElementById("hobbyCount").textContent = userProfile.hobbies.length;
        document.getElementById("newHobby").value = "";
    }
});

// Remove Item button
document.getElementById("removeButton").addEventListener("click", function() {
    userProfile.hobbies.pop();

    displayHobbies();
    document.getElementById("hobbyCount").textContent = userProfile.hobbies.length;
});

// Display initial information
displayProfile();
