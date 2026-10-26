document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
        <div class="main-menu" style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; border-bottom: 2px solid #e9ecef; padding-bottom: 15px;">
            <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/sikidomok.html" style="text-decoration: none; padding: 8px 16px; font-size: 14px; font-weight: bold; color: #495057; background-color: #f8f9fa; border: 1px solid #ced4da; border-radius: 5px;">Síkidomok</a>
            <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/atvaltas.html" style="text-decoration: none; padding: 8px 16px; font-size: 14px; font-weight: bold; color: #495057; background-color: #f8f9fa; border: 1px solid #ced4da; border-radius: 5px;">Mértékegység átváltás</a>
            <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/tortek.html" style="text-decoration: none; padding: 8px 16px; font-size: 14px; font-weight: bold; color: #495057; background-color: #f8f9fa; border: 1px solid #ced4da; border-radius: 5px;">Törtek</a>
            <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/algebrai_osszevonasok.html" style="text-decoration: none; padding: 8px 16px; font-size: 14px; font-weight: bold; color: #495057; background-color: #f8f9fa; border: 1px solid #ced4da; border-radius: 5px;">Algebrai Átalakítások</a>
            <a href="https://debmatyas.github.io/matek/Kulcsar_Noemi/html/kviz.html" style="text-decoration: none; padding: 8px 16px; font-size: 14px; font-weight: bold; color: #495057; background-color: #f8f9fa; border: 1px solid #ced4da; border-radius: 5px;">Elméleti Kvíz</a>
        </div>
    `;

    // Keresünk egy kijelölt helyet a HTML-ben, ahová beillesztjük a menüt
    const menuPlaceholder = document.getElementById("main-menu-container");
    if (menuPlaceholder) {
        menuPlaceholder.innerHTML = menuHTML;
    }
});