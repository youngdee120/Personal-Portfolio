// 1) Mobile Menu
const sidemen = document.getElementById("sidemenu");
function openmenu()  { sidemen.style.right = "0"; }
function closemenu() { sidemen.style.right = "-200px"; }

document.addEventListener('DOMContentLoaded', function() {
  // 2) Tabs
  const tablinks    = document.querySelectorAll(".tab-links");
  const tabcontents = document.querySelectorAll(".tab-contents");

  tablinks.forEach(link => {
    link.addEventListener('click', function(event) {
      tablinks.forEach(l => l.classList.remove("active-link"));
      tabcontents.forEach(c => c.classList.remove("active-tab"));
      link.classList.add("active-link");

      // extract tab id from onclick attribute
      const match = link.getAttribute("onclick").match(/opentab\('(.+)'\)/);
      if (match) {
        document.getElementById(match[1]).classList.add("active-tab");
      }
    });
  });

  // 3) Portfolio “Show More”
  const works       = document.querySelectorAll('.work');
  const showMoreBtn = document.getElementById('showMoreBtn');
  let visibleCount  = 12;  // show 3 rows × 4 cols on load
  const increment   = 4;   // reveal 4 more per click

  // hide beyond the first 12
  works.forEach((work, idx) => {
    if (idx >= visibleCount) work.classList.add('hidden');
  });
  if (works.length <= visibleCount) {
    showMoreBtn.style.display = 'none';
  }

  showMoreBtn.addEventListener('click', function() {
    for (let i = visibleCount; i < visibleCount + increment && i < works.length; i++) {
      works[i].classList.remove('hidden');
    }
    visibleCount += increment;
    if (visibleCount >= works.length) {
      showMoreBtn.style.display = 'none';
    }
  });
});
