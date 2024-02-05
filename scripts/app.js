/* 
    Jaedyn Chinn
    100909448
    Date Completed: 2024/02/04
*/
// body text for all pages
document.getElementById('aboutUsHeader').innerText = 'About Us';
document.getElementById('aboutMe').innerText = 'About Me: My name is Jaedyn Chinn, I am a student in the second year of computer programming and analysis.';
document.getElementById('linkedin').innerText = 'LinkedIn:';

document.getElementById('projectsHeader').innerText = 'Projects';
document.getElementById('project1').innerText = 'Project 1';
document.getElementById('projectText').innerText = 'Can\'t really remember many specific projects I was proud of and I kinda lost them so I can\'t take screenshots of any :(.';

document.getElementById('servicesHeader').innerText = 'Services';
document.getElementById('service1').innerText = 'Service 1';
document.getElementById('service1Text').innerText = 'Programming: C#, C++, Java, Python.';

document.getElementById('service2').innerText = 'Service 2';
document.getElementById('service2Text').innerText = 'Web Development';

// changing the product link to projects
document.getElementById('productsLink').innerHTML = '<a class="nav-link" href="#"><span class="fa fa-th"></span> Projects</a>';


// adding hr link
// Create new list item for Human Resources
var hrNavItem = document.createElement('li');
hrNavItem.className = 'nav-item';

// Create link for Human Resources
var hrNavLink = document.createElement('a');
hrNavLink.className = 'nav-link';
hrNavLink.href = '#';

// Create span for FA icon
var hrIcon = document.createElement('span');
hrIcon.className = 'fa fa-users'; // You can use the appropriate Font Awesome icon for Human Resources

// Set text for the link
hrNavLink.appendChild(hrIcon);
hrNavLink.appendChild(document.createTextNode(' Human Resources'));

// Append link to list item
hrNavItem.appendChild(hrNavLink);

// Get parent element (ul) to insert new item
var navbarNav = document.querySelector('.navbar-nav');

// Find element to insert new item after (about us)
var aboutUsNavItem = document.querySelector('.navbar-nav .nav-item:nth-child(4)');

// Insert new item before "Contact Us"
navbarNav.insertBefore(hrNavItem, aboutUsNavItem.nextSibling);


// NAVBAR

var fixedBottomNavbar = document.createElement('nav');
fixedBottomNavbar.className = 'navbar navbar-dark bg-dark fixed-bottom';

// Create div
var containerDiv = document.createElement('div');
containerDiv.className = 'container-fluid';

// Create copyright statement
var copyrightStatement = document.createElement('span');
copyrightStatement.innerHTML = '&copy; ' + new Date().getFullYear() + ' Jaedyn Chinn';

// Append copyright statement to container
containerDiv.appendChild(copyrightStatement);

// Append container to fixed bottom navbar
fixedBottomNavbar.appendChild(containerDiv);

// Append fixed bottom navbar to body
document.body.appendChild(fixedBottomNavbar);


// Contact form
function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Output user information to the console
    console.log('Name:', name);
    console.log('Contact Number:', contactNumber);
    console.log('Email Address:', email);
    console.log('Short Message:', message);

    // Set a timer to redirect after 3 seconds
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 3000);
}