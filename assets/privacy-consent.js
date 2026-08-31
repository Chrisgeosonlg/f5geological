(() => {
  const storageKey = 'f5g_privacy_consent';
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) {}
  if (saved) return;

  const banner = document.createElement('aside');
  banner.className = 'privacy-consent is-visible';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Privacy consent');
  banner.innerHTML = `
    <div class="privacy-consent__copy">
      <strong>Your privacy matters</strong>
      <p>We use essential browser storage to remember your preference and support reliable site operation. Learn more in our <a href="privacy-policy.html">Privacy Policy</a>.</p>
    </div>
    <div class="privacy-consent__actions">
      <button class="privacy-consent__button" type="button" data-consent="declined">Decline</button>
      <button class="privacy-consent__button privacy-consent__button--accept" type="button" data-consent="accepted">Accept</button>
    </div>`;

  banner.addEventListener('click', event => {
    const button = event.target.closest('[data-consent]');
    if (!button) return;
    try { localStorage.setItem(storageKey, button.dataset.consent); } catch (_) {}
    banner.classList.remove('is-visible');
    banner.remove();
  });
  document.body.appendChild(banner);
})();
