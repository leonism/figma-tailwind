const toggleNavigation = () => {
  const navigationLinks = document.querySelector("[data-nav-links]")
  const overlay = document.querySelector(["data-nav-link-overlay"])

  // checking the class name if navigation link has "-left-[250px]" class or not
  if (navigationLinks.classList.contains("-left-[250px]")) {

    // if found, show them
    navigationLinks.classList.replace("-left-[250px]", "left-0")
    overlay.classList.remove(["hidden"])

    // else
  } else {
    
    // if not, hide them
    navigationLinks.classList.replace("left-0", "-left-[250px]")
    overlay.classList.add(["hidden"])
  }
}

// console.log(navigationLinks)