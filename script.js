
let navbarOpenOrClose = false;

const controlNavbar = () => {
   if (navbarOpenOrClose){
      navbar.classList.remove("navbar2");
      // navbar.style.transition = "all 2s ease-in-out";
      leftNavbar.classList.remove("leftNavbar2");
      rightNavbar.classList.remove("rightNavbar2");
      search.classList.remove("search2");
      rightNavUl.style.display = "none";
      searchicon.style.top = "2vh"
      searchicon.style.right = "12vw"
      navbarOpenOrClose = false;
      console.log("Closed!", navbarOpenOrClose)
   }
   else {
      navbar.classList.add("navbar2");
      leftNavbar.classList.add("leftNavbar2");
      rightNavbar.classList.add("rightNavbar2");
      search.classList.add("search2");
      brandlogo.classList.add("brandlogo");
      rightNavUl.classList.add("rightNavUl");
      searchicon.style.top = "15vh"
      searchicon.style.right = "45vw"
      navbarOpenOrClose = true;
      rightNavUl.style.display = "block";
      console.log("Opened!", navbarOpenOrClose)
   }
}
