function expand(refID){
    
    let divToInteract = document.getElementById(refID);
    
    if(divToInteract.style.display == "grid")
    {
        divToInteract.style.display = "none";
    }
    else
    {
        divToInteract.style.display = "grid";
    }

}

function overlay(ref){
    
    let divToInteract = document.getElementById("overlay");
    
    if(divToInteract.style.display == "grid")
    {
        divToInteract.style.display = "none";
    }
    else
    {
        divToInteract.style.display = "grid";
    }
    setOverlay(ref);
}

let youtubeLinks = [
    'https://www.youtube.com/embed/RYQTygjHJ9g?si=hVboDxSJ5LMn2SQD',
    'https://www.youtube.com/embed/cjL0yooXDHU?si=1hIfwPam4LW_5ofX',
    'https://www.youtube.com/embed/Q8O4jv7Bnmg?si=TtRQRb9t9Z8DXIFb',
    'https://www.youtube.com/embed/mkbbookwUSM?si=lQZrc2oBYtB0pXT8',
    'https://www.youtube.com/embed/k3Hjkr2fv9I?si=EcSpTxCcWdUb3-VT'
];

let explainText = [
    "A grass system made for River Scene Zine. designed to be more customisable then Unity's inbuilt terrain grass. \n\nThe the tool was made to be easy to use by my co-creator as they are not a technically focused developer. On the backend it utilises 3 specific systems for efficent rendering and lighting. The first of these is Compute Shader mesh generation and Frustrum culling. This is the first step in the rendering pass, as this pass determines the points that are in the camera's view and only send meshes to the GPU for these points. The next stpe is using Command Buffers to inject the rendering of these meshes into the GBuffer passes so they are lit as part of the Deferred Render pass. Lastly for ease of editing the positions of the grass are stored in a Quad BSP for efficent distance calculations when erasing grass.",
    'Recreation of the Ben Day printing method as a post effect. \n\nOn the backend the process involves first converting the colour space from RGB to CMYK; this is done to make sure that the back colour can be set to white to more effectively recreate the paper printing look. After conversion, the image is then down sampled to create each dot. These colours are then offset based on an angle to create the ben-day printing method which used this offsetting to create the colour illusion.',
    'A painting effect made using a mixture of post effects techniques and Compute Shader mesh generation. \n\nMade as a proof of concept and style test, this effect re-creates a scene out of rancomly placed Triangles with paint textures on them, created by a Compute Shader by doing it this way I am able to make tens of thousands of Tris for very little computation overhead. These tris are then placed in the scene using the main Cameras depth and normal texture, and sample the screen texture for colour. Because of the low resolution effect the placement of tris make I am able to use low resolution screen textures from the main camera.',
    'Mesh Slicing built for a freelancing contact, with internal SDF shader. \n\nThe slicing system didnt involve any fancy algorithm or optimizations, instead I focused on making sure I only made/spawn objects as needed. Caching the mesh data, and only sending information to rendered after all slcing was complete. Alongside this system I alos made a SDF rendering shader for the internals of food - this system used 3D meshes representing the foods internal structure, that was then converted into a 3D texture in unity. Each colour of the interanals was then represented by a 3D texture allowing for these to be layered together to create more complete structures of rinds, and seeds.',
    'A custom anime style deferred shading solution. \n\nMade for a freelancing project as a proof of concept style for a cooking game, the system allowed me to inject my own lighting information into Unitys inbuild deferred shading by using the specular channel of the GBuffer to hold shadow and specular falloff data. This was then combined with custom outline scripts to create a drawn anime look for all the models in the game.'
];

function setOverlay(ref){
    let i = Number(ref);
    let youtube = document.getElementById("youtube");
    let explain = document.getElementById("explain");
    youtube.src = youtubeLinks[ref];
    explain.textContent = explainText[i];
    console.log(i);
}

function display(page){
    let workPage = document.getElementById("work");
    let aboutPage = document.getElementById("about");
    let shaderPage = document.getElementById("shaders");

    
    sessionStorage.setItem("currentPage", page);

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

