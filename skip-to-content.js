(() => {
  if (document.getElementById('kisuke-skip-link')) return;

  const link = document.createElement('a');
  link.id = 'kisuke-skip-link';
  link.href = '#page-title';
  link.textContent = 'Skip to main content';

  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    // Resolve the current article after Mintlify's client-side navigation.
    const heading = document.getElementById('page-title');
    if (!heading) return;

    event.preventDefault();
    if (!heading.hasAttribute('tabindex')) {
      heading.setAttribute('tabindex', '-1');
      heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true });
    }
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: 'start' });
  });

  document.body.prepend(link);
})();
