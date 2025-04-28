async function fetchGuests() {
    const resp = await fetch('/api/guests');
    return resp.json();
  }
  
  async function renderGuestList() {
    const listEl = document.getElementById('guest-list');
    listEl.innerHTML = '';
    const guests = await fetchGuests();
    guests.forEach(guest => {
      const li = document.createElement('li');
      li.textContent = guest;
      listEl.appendChild(li);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderGuestList();
  
    document.getElementById('checkin-btn').addEventListener('click', async () => {
      const input = document.getElementById('guest-name-input');
      if (!input.value.trim()) return;
      await fetch('/api/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: input.value.trim() })
      });
      input.value = '';
      renderGuestList();
    });
  
    document.getElementById('remove-btn').addEventListener('click', async () => {
      await fetch('/api/guests', { method: 'DELETE' });
      renderGuestList();
    });
  });
