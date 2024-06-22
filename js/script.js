document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            if (link.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop - 90, 
                    behavior: 'smooth'
                });
            }
        });
    }

    const chartBars = document.querySelectorAll('.chart-bar');
    
    chartBars.forEach(bar => {
        const value = parseFloat(bar.getAttribute('data-value'));
        const deg = value * 3.6;
        bar.style.setProperty('--deg', deg);
    });
});

function showProjectDetails(projectId) {
    document.getElementById('project-details').style.display = 'block';
    const projects = document.querySelectorAll('.project-info');
    projects.forEach(project => project.style.display = 'none');
    document.getElementById(projectId).style.display = 'block';
}

function hideProjectDetails() {
    document.getElementById('project-details').style.display = 'none';
}
