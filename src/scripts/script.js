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

function changeSeason() {
    const selectSeasons = document.getElementById("select-season");
    const showSeason1 = document.getElementById("season1");
    const showSeason2 = document.getElementById("season2");

    
    selectSeasons.addEventListener("change", atualizarTemporada);
    atualizarTemporada();


    function atualizarTemporada() {
        if (selectSeasons.value === "T1: Solo Leveling") {
            console.log("T1");
            showSeason1.classList.add("shows__list--is-active");
            showSeason2.classList.remove("shows__list--is-active");
        } else if (selectSeasons.value === "T2: Solo Leveling") {
            console.log("T2");
            showSeason2.classList.add("shows__list--is-active");
            showSeason1.classList.remove("shows__list--is-active");
        }
    }
}

window.onload = function () {
    changeSeason();
};