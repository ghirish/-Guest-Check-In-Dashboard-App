let chartInstance = null;

async function createGuestChart(type = 'bar') {
  const ctx = document.getElementById('guestChart').getContext('2d');
  const guests = await fetch('/api/guests').then(r => r.json());

  console.log('Guests fetched:', guests); // ✅ Moved INSIDE after fetching!

  const counts = {};
  guests.forEach(name => {
    counts[name] = (counts[name] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const data = Object.values(counts);

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: 'Guest Check-Ins',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      }]
    },
    options: {
      animation: { duration: 1000, easing: 'easeOutBounce' },
      scales: type === 'bar' ? {
        y: { beginAtZero: true, ticks: { stepSize: 1 } }
      } : {},
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Guest Check-In Summary' }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  createGuestChart('bar');

  const switchBtn = document.getElementById('switch-chart-btn');
  switchBtn.addEventListener('click', () => {
    const currentType = chartInstance.config.type;
    const newType = currentType === 'bar' ? 'pie' : 'bar';
    createGuestChart(newType);
    switchBtn.textContent = newType === 'bar' ? 'Switch to Pie Chart' : 'Switch to Bar Chart';
  });
});
