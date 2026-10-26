document.addEventListener("DOMContentLoaded", function () {
  const submenuHTML = `
    <div class="sub-menu" style="display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; background-color: #e9ecef; padding: 10px; border-radius: 8px;">
      <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/kozos_nevezo.html" class="submenu-link" style="text-decoration: none; padding: 6px 12px; font-size: 13px; font-weight: bold; color: #333; background-color: #fff; border: 1px solid #ced4da; border-radius: 4px; transition: all 0.2s;">Közös nevező</a>
      <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/muveletek.html" class="submenu-link" style="text-decoration: none; padding: 6px 12px; font-size: 13px; font-weight: bold; color: #333; background-color: #fff; border: 1px solid #ced4da; border-radius: 4px; transition: all 0.2s;">Műveletek törtekkel</a>
      <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/osztoja.html" class="submenu-link" style="text-decoration: none; padding: 6px 12px; font-size: 13px; font-weight: bold; color: #333; background-color: #fff; border: 1px solid #ced4da; border-radius: 4px; transition: all 0.2s;">Osztó-e?</a>
    </div>
  `;

  // Beszúrjuk az almenü konténerébe
  const submenuContainer = document.getElementById("tortek-menu-container");
  if (submenuContainer) {
    submenuContainer.innerHTML = submenuHTML;

    // Automatikusan kiemeljük az aktív oldalt a fájlnév alapján
    const currentPage = window.location.pathname.split("/").pop();
    const links = submenuContainer.querySelectorAll(".submenu-link");
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.style.backgroundColor = "#007bff";
        link.style.color = "#ffffff";
        link.style.borderColor = "#007bff";
      }
    });
  }
});