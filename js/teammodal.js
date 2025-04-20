function openTeamModal() {
    const modal = document.getElementById("team-modal");
    modal.classList.add("show");
}

function closeTeamModal() {
    const modal = document.getElementById("team-modal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 5);
}
