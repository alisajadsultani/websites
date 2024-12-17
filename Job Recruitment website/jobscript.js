document.querySelectorAll('a[href^="#"]').forEach(options => {
  options.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

var create = document.getElementById('create');
const jobsTable = document.getElementById('jobPostings');

create.addEventListener('click', function (event) {
  window.open('listjob.html', '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
  const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

  jobsTable.innerHTML = '';

  var count = 0;
  var oldrow;

  jobs.forEach(job => {

    var row;
      count = count+1;
      if (count == 1) {
      row = document.createElement('tr');
      oldrow = row;
      jobsTable.appendChild(row);
      }
      else {
        row = oldrow;
      }
      const cell = document.createElement('td');

      cell.textContent = job.title;
      cell.dataset.jobId = job.id;
      cell.style.cursor = 'pointer';
      row.appendChild(cell);
      if (count == 4) {
        count = 0;
      }
  });

  jobsTable.addEventListener('click', function (event) {
      if (event.target.tagName === 'TD') {
          const jobId = event.target.dataset.jobId;
          window.open(`index.html?jobId=${jobId}`, '_blank');
      }
  });
});


const clearButton = document.getElementById('clear-storage');
if (clearButton) {
  clearButton.addEventListener('click', function () {
    if (confirm('Are you sure you want to clear all saved data?')) {
      localStorage.clear();
      alert('All saved data has been cleared!');
      location.reload();
    }
  });
}
