// const sidebarToggle = document.getElementById('sidebar-toggle');
// const sidebar = document.getElementById('sidebar');

// sidebarToggle.addEventListener('click', () => {
//   sidebar.classList.toggle('active');
// });

document.addEventListener("DOMContentLoaded", function () {
  const icon1 = document.getElementById("icon1");
  const icon2 = document.getElementById("icon2");
  const sidebar = document.getElementById("sidebar"); 

  icon1.addEventListener("click", function () {
    toggleSidebar();
  });

  icon2.addEventListener("click", function () {
    toggleSidebar();
  });

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    icon1.classList.toggle("hidden");
    icon2.classList.toggle("hidden");
  }
});


