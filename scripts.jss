// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const categoryFilter = document.getElementById("category-filter");
    const subcategoryFilter = document.getElementById("subcategory-filter");
    const yearFilter = document.getElementById("year-filter");
    const gridSizeSlider = document.getElementById("grid-size-slider");
    const projectGrid = document.getElementById("project-grid");
    const projects = document.querySelectorAll(".project");

    function filterProjects() {
        const category = categoryFilter.value;
        const subcategory = subcategoryFilter.value;
        const year = yearFilter.value;

        projects.forEach(project => {
            const projectCategory = project.getAttribute("data-category");
            const projectSubcategory = project.getAttribute("data-subcategory");
            const projectYear = project.getAttribute("data-year");

            if (
                (category === "all" || projectCategory === category) &&
                (subcategory === "all" || projectSubcategory === subcategory) &&
                (year === "all" || projectYear === year)
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }

    function updateGridSize() {
        const gridSize = gridSizeSlider.value;
        projectGrid.className = `grid-size-${gridSize}`;
    }

    categoryFilter.addEventListener("change", filterProjects);
    subcategoryFilter.addEventListener("change", filterProjects);
    yearFilter.addEventListener("change", filterProjects);
    gridSizeSlider.addEventListener("input", updateGridSize);

    // Inicializar filtros y grid
    filterProjects();
    updateGridSize();
});
