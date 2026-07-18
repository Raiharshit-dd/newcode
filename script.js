const $ = (selector) => document.querySelector(selector);
const summary = $('#summary');
const preview = $('#previewSummary');
const wordCount = $('#wordCount');
const toast = $('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function updatePreview() {
  preview.textContent = summary.value;
  const words = summary.value.trim().split(/\s+/).filter(Boolean).length;
  wordCount.textContent = `${words} / 80 words`;
}

summary.addEventListener('input', updatePreview);

$('#enhanceButton').addEventListener('click', () => {
  summary.value = 'Product designer and creative strategist with 6+ years of experience turning complex problems into clear, useful digital experiences. I partner with ambitious cross-functional teams to take thoughtful products from first sketch to successful launch.';
  updatePreview();
  $('#score').textContent = '89';
  $('#completion').textContent = '84%';
  $('#progressFill').style.width = '84%';
  showToast('Your profile has been enhanced.');
});

$('#addKeyword').addEventListener('click', () => {
  if (!summary.value.toLowerCase().includes('cross-functional')) {
    summary.value = summary.value.replace(/I partner/i, 'I partner with cross-functional teams');
    if (!summary.value.includes('cross-functional')) summary.value += ' I thrive in cross-functional teams.';
  }
  updatePreview();
  showToast('“Cross-functional” added to your profile.');
});

$('#addMetric').addEventListener('click', () => showToast('Suggestion added: include adoption or conversion results.'));
$('#saveButton').addEventListener('click', () => showToast('Draft saved successfully.'));
$('#downloadButton').addEventListener('click', () => showToast('Your resume PDF is ready to download.'));
