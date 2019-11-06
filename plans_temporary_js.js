window.toggled = false

//makes the overall look responsive
window.addEventListener("resize", plansLayout);
window.addEventListener("resize", responsiveNav);

//textbox restrictions
document.getElementById("username").addEventListener("input", () => {
    confirm_info();
    clean_uName();
});

document.getElementById("password").addEventListener("input", () => {
    confirm_info();
    clean_pass();
});

document.getElementById("password-confirm").addEventListener("input", () => {
    confirm_info();
    clean_pass2();
});

//hamburger menu hover
var mobileMenu = document.getElementById("toggle");
mobileMenu.addEventListener("mouseover", changeColor);
mobileMenu.addEventListener("mouseout", changeColorOff);

//changes the top navigation bar at a certain window width
function responsiveNav() {
    const mq = window.matchMedia( "(max-width: 850px)" )
    var hamburg = document.getElementById("toggle")
    var navLinks = document.getElementById("nav-links")
    var user = document.getElementById("user2")
    var hamburg_wrap = document.getElementById("hamburger-menu-wrapper")

    if (mq.matches) {
        navLinks.style.display = "none"
        hamburg_wrap.style.display = "flex"
        user.style.opacity = "0"
        hamburg.style.display = "flex"
        user.style.display = "block"
    } else {
        if (toggled === true) {
            toggleOff();
        } 
        hamburg_wrap.style.display = "none"
        navLinks.style.display = "flex"
        user.style.display = "none"
        hamburg.style.display = "none"
    }
}

//hover function
function changeColor() {
    var line1 = document.getElementById("line1")
    var line2 = document.getElementById("line2")
    var line3 = document.getElementById("line3")
    line1.style.background = "var(--mid_blue)"
    line2.style.background = "var(--mid_blue)"
    line3.style.background = "var(--mid_blue)"
}

//hover off function
function changeColorOff() {
    var line1 = document.getElementById("line1")
    var line2 = document.getElementById("line2")
    var line3 = document.getElementById("line3")
    line1.style.background = "var(--off_black)"
    line2.style.background = "var(--off_black)"
    line3.style.background = "var(--off_black)"
}

//makes the layout of 'plans' responsive at a certain window width
function plansLayout() {
    const mq = window.matchMedia( "(max-width: 950px)" )
    var root = document.documentElement
    var plans = document.getElementById("plans")
    var cp = document.getElementById("codevert-premium")
    var cd = document.getElementById("plans-trial")
    var getHeightCP = cp.offsetHeight
    var whyP = document.getElementById("why-premium")
    var cost = document.getElementById("premium-cost")

    if (mq.matches) {
        plans.style.flexDirection = "column"
        plans.style.marginLeft = "calc(10px + 3vw)"
        plans.style.marginRight = "calc(10px + 3vw)"
        plans.style.marginBottom = "10vh"
        plans.style.height = "min-content"
        cp.style.height = "min-content"
        cd.style.borderRadius = "0 0 7px 7px"
        root.style.setProperty("--height", "min-content")
        root.style.setProperty("--width", "100%")
        whyP.style.margin = "0"
        cost.style.padding = "0"

    } else {
        plans.style.flexDirection = "row"
        root.style.setProperty('--height', getHeightCP + 'px')
        root.style.setProperty("--width", "auto")
        cd.style.borderRadius = "0 7px 7px 0"
    }
}

//toggle on/off the vertical nav on small screens
function toggle() {
    var mobileMenu = document.getElementById("mobile-menu")
    var pos = mobileMenu.getBoundingClientRect()
    var user = document.getElementById("user2")
    var line1 = document.getElementById("line1")
    var line2 = document.getElementById("line2")
    var line3 = document.getElementById("line3")


    if (pos.top == "-530") {
        mobileMenu.style.top = "80px"
        mobileMenu.style.opacity = "1"
        //user icon animation
        user.style.opacity = "1"
        user.style.transform = "scale(1)"
        user.style.marginRight = "0"
        //hamburger menu animation
        line2.classList.add("line2-scaled")
        line1.classList.add("line1-rotated")
        line3.classList.add("line3-rotated")
        toggled = true
    } else {
        mobileMenu.style.top = "-530px"
        mobileMenu.style.opacity = "0"
        //user icon animation
        user.style.marginRight = "-42px"
        user.style.transform = "scale(0)"
        user.style.opacity = "0"
        //hamburger menu animation
        line1.classList.remove("line1-rotated")
        line3.classList.remove("line3-rotated")
        line2.classList.remove("line2-scaled")
        toggled = false
    }
}

function toggleOff() {
    var mobileMenu = document.getElementById("mobile-menu")
    var user = document.getElementById("user2")
    var line1 = document.getElementById("line1")
    var line2 = document.getElementById("line2")
    var line3 = document.getElementById("line3")

    mobileMenu.style.top = "-530px"
    mobileMenu.style.opacity = "0"
    //user icon animation
    user.style.marginRight = "-42px"
    user.style.transform = "scale(0)"
    user.style.opacity = "0"
    //hamburger menu animation
    line1.classList.remove("line1-rotated")
    line3.classList.remove("line3-rotated")
    line2.classList.remove("line2-scaled")
}

//shows the sign in form 
function sign_in_show() {
    var wrapper = document.getElementById("sign-in-wrapper")
    var overlay = document.getElementById("overlay")

    overlay.style.display = "block"
    overlay.style.opacity = "1"
    wrapper.style.display = "flex"
    wrapper.style.opacity = "1"
    wrapper.style.transform = "translate(-50%, -50%) scale(1)"
}

//hides the sign in form 
function sign_in_exit() {
    var wrapper = document.getElementById("sign-in-wrapper")
    var overlay = document.getElementById("overlay")

    wrapper.style.opacity = "0"
    wrapper.style.transform = "translate(-50%, -50%) scale(0.7)"
    wrapper.style.display = "none"
    overlay.style.opacity = "0"
    overlay.style.display = "none"
}

//shows register elements
function register_show() {
    var register_elements = document.getElementById("register-elements")
    var register_header = document.getElementById("sign-in-header")
    var form_link = document.getElementById("form-link")
    var sign_in_btn = document.getElementById("sign-in-btn")
    var register_note1 = document.getElementById("register-note1")
    var register_note2 = document.getElementById("register-note2")

    if (register_header.textContent == "Sign in") {
        sign_in_btn.disabled = true
        register_elements.style.display = "flex"
        register_header.textContent = "Register"
        form_link.textContent = "Sign in"
        register_note1.style.display = "flex"     
        register_note2.style.display = "flex"
        
    } else {
        register_elements.style.display = "none"
        register_header.textContent = "Sign in"
        form_link.textContent = "Register"
        sign_in_btn.disabled = false
        register_note1.style.display = "none"     
        register_note2.style.display = "none" 

    }
}

//password and username restrictions
function confirm_info() {
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("password-confirm").value;
    var register = document.getElementById("sign-in-btn");
    var uName = document.getElementById("username");
    var uName_val = uName.value
    var wrapper_header = document.getElementById("sign-in-header")

    if (wrapper_header.textContent == "Sign in") {
        register.disabled = false
    } else if (pass == pass2 && uName_val !== "" && uName_val.length > 4 && isNaN(uName_val) == true && pass2.length > 7 && pass.length > 7) {
        register.disabled = false
    } else {
        register.disabled = true
    }
}

//regExp function to eliminate special characters
function matchFunction(string) {
    var regExp = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]`/;

    if (string.match(regExp)) {
        newStr = string.replace(regExp, "")
        return newStr;
    } else {
        return string;
    }
}

//cleans all the unvalid input
function clean_uName() {
    var uName = document.getElementById("username");

    uName.value = matchFunction(uName.value);
}

function clean_pass() {
    var pass = document.getElementById("password");

    pass.value = matchFunction(pass.value);
}

function clean_pass2() {
    var pass2 = document.getElementById("password-confirm")

    pass2.value = matchFunction(pass2.value) 
}