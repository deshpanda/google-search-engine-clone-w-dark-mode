let toggle = document.getElementById("toggle");
let dark = document.querySelector(".dark");
let footer = document.querySelector(".footer");
let searchField = document.querySelector(".search-field");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let img = document.querySelector("img");
let findOut = document.querySelector(".find-out");
let languages = document.querySelector(".languages");
let hrBreak = document.querySelector(".break");
let googleSearch = document.querySelector("#search");

//Dark Mode On
function darkModeOn(){
    dark.style.backgroundColor = "rgb(36, 35, 35)";
    footer.style.backgroundColor = "rgb(31, 30, 30)";
    dark.style.color = "lightgrey";
    footer.style.color = "grey";
    searchField.style.backgroundColor = "rgb(36, 35 35)";
    searchField.style.color = "white";
    searchField.style.border = "1px solid rgb(95, 95, 95)";
    btn.style.backgroundColor = "rgb(53, 52, 52)";
    btn1.style.backgroundColor = "rgb(53, 52, 52)";
    btn.style.color = "lightgrey";
    btn1.style.color = "lightgrey";
    img.src = "menu (2).png";
    findOut.style.color = "rgb(39, 124, 223)";
    languages.style.color = "rgb(39, 124, 223)";
    hrBreak.style.border = "1px solid rgb(48, 48, 48)";
    localStorage.setItem("darkMode", "enabled");
}

//Dark Mode Off
function darkModeOff(){
    dark.style.backgroundColor = "white";
    footer.style.backgroundColor = "rgb(238, 238, 238)";
    dark.style.color = "black";
    footer.style.color = "rgb(102, 100, 100)";
    searchField.style.backgroundColor = "white";
    searchField.style.color = "black";
    btn.style.backgroundColor = "rgb(248, 248, 248)";
    btn1.style.backgroundColor = "rgb(248, 248, 248)";
    btn.style.color = "rgb(88, 88, 88)";
    btn1.style.color = "rgb(88, 88, 88)";
    img.src = "menu.png";
    findOut.style.color = "blue";
    languages.style.color = "blue";
    hrBreak.style.border = "1px solid rgb(223, 223, 223)";
    localStorage.setItem("darkMode", null);

}

//Toggle Switch On or Off
toggle.addEventListener("click", function(){
    if(toggle.checked === true){
        darkModeOn();
    }
    else{
        darkModeOff();
    }
})

//Enable dark mode even after refresh
let saveDarkMode = localStorage.getItem("darkMode");
if(saveDarkMode === "enabled"){
    toggle.checked == true;
    darkModeOn();
}

//Search Enabled
btn.onclick = function search(){
    let input = searchField.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APq-WBubYmjpnP34Svq1FsvNpY7sTYFQIQ%3A1644452221462&source=hp&ei=fVkEYrb2GfyX4-EPvsiA8As&iflsig=AHkkrS4AAAAAYgRnjVyF9sQoAbudk9NoNWXUXJHyEhRn&ved=0ahUKEwj2qIj07fP1AhX8yzgGHT4kAL4Q4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEIAEEIcCEBQyCwguEIAEELEDENQCMggIABCABBCxAzIICC4QsQMQgwEyBQguEIAEMgsILhCABBCxAxDUAjIFCAAQgAQyCAguEIAEELEDMgUIABCABDILCAAQgAQQsQMQgwE6BwgjEOoCECc6CAgAELEDEIMBOg4ILhCABBCxAxDHARCjAjoECCMQJzoLCAAQgAQQsQMQyQM6BQgAEJIDULkGWNkLYKsRaAFwAHgAgAGRAYgBvAWSAQMwLjWYAQCgAQGwAQo&sclient=gws-wiz";
}

googleSearch.addEventListener("click", function(){
    if(searchField.value == ""){
        console.log("Please Type Something!!!");
    }
    else{
        search();
    }
})
