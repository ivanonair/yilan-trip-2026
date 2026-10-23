(() => {
  const key = 'mike-yilan-2026-packing';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch {}
  const items = document.querySelectorAll('.checklist input');
  items.forEach(item => {
    item.checked = saved[item.id] === true;
    item.addEventListener('change', () => {
      const state = {};
      items.forEach(input => { state[input.id] = input.checked; });
      try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
    });
  });
})();
