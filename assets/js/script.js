const toggleNavigation = () => {
  const navigationLinks = document.querySelector("[data-nav-links]")

  // checking the class name if navigation link has hidden class or no
  if (navigationLinks.classList.contains("hidden")) {

    // if found, remove them
    navigationLinks.classList.remove("hidden")
  } else {
    // if not, add them
    navigationLinks.classList.add("hidden")
  }

}

// console.log(navigationLinks)