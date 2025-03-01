// function moreDetails() {
//     const opacityOne = document.getElementById("hero-opacity-one");
//     const opacityTwo = document.getElementById("hero-opacity-two");
//     const allContent = document.getElementById("hero-all-content");
//     const btnMoreDetails = document.getElementById("more-details--button");
//     const allContentInfos = document.getElementById("hero-all-content-infos");

//     if(allContent.style.display === "flex") {
//         allContent.style.display = "none";
//         allContentInfos.display = "none";
//         opacityOne.style.color = "#A0A0A0";
//         opacityTwo.style.color = "#59595B";
//         btnMoreDetails.innerHTML = "mais detalhes";
//         btnMoreDetails.style.marginTop = "0";
//     } else {
//         allContent.style.display = "flex";
//         allContentInfos.opacity = "1";
//         opacityOne.style.color = "#FFFFFF";
//         opacityTwo.style.color = "#FFFFFF";
//         btnMoreDetails.innerHTML = "menos detalhes";
//         btnMoreDetails.style.marginTop = "10px";
//     }
// }

function moreDetails() {
    const allContentStory = document.getElementById("hero-all-content-story");
    const allContentInfos = document.getElementById("hero-all-content-infos");
    const opacityOne = document.getElementById("hero-opacity-one");
    const opacityTwo = document.getElementById("hero-opacity-two");
    const btnDetails = document.getElementById("more-details--button");

    if (allContentStory.style.display === "flex") {
        allContentStory.style.display = "none";
        allContentInfos.style.display = "none";
        opacityOne.style.color = "#A0A0A0";
        opacityTwo.style.color = "#59595B";
        btnDetails.innerHTML = "mais detalhes";
        btnDetails.style.marginTop = "0";
    } else {
        allContentStory.style.display = "flex";
        allContentInfos.style.display = "block";
        opacityOne.style.color = "#FFFFFF";
        opacityTwo.style.color = "#FFFFFF";
        btnDetails.innerHTML = "menos detalhes";
        btnDetails.style.marginTop = "10px";
    }
}