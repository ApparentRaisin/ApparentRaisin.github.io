function expand(refID){
    
    var divToInteract = document.getElementById(refID);
    
    if(divToInteract.style.display == "grid")
    {
        divToInteract.style.display = "none";
    }
    else
    {
        divToInteract.style.display = "grid";
    }
}

function display(page){
    var workPage = document.getElementById("work");
    var aboutPage = document.getElementById("about");
    var shaderPage = document.getElementById("shaders");

    console.log(workPage);

    if(page == "work")
    {
        workPage.style.display = "grid";
        aboutPage.style.display = "none";
        shaderPage.style.display = "none";
    }
    else if(page == "about")
    {
        workPage.style.display = "none";
        aboutPage.style.display = "grid";
        shaderPage.style.display = "none";
    }
    else if(page == "shaders")
    {
        workPage.style.display = "none";
        aboutPage.style.display = "none";
        shaderPage.style.display = "grid";
    }
}