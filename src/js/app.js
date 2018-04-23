import { MDCDialog, MDCDialogFoundation, util } from '@material/dialog';

const ethicalConfig = {
  label: 'Awesome :) We\'d love to help you find funds that match your values.',
  description: 'Subscribe for updates about new features.'
};
const feesConfig = {
  label: 'A savvy shopper! We\'re also very fee conscious.',
  description: 'Subscribe for updates about new features.'
};
const strategiesConfig = {
  label: 'Your money invested your way! We\'ll make it easier to find options you want.',
  description: 'Subscribe for updates about new features.'
};

const dialog = new MDCDialog(document.querySelector('#interest-dialog'));
// const feesDialog = new MDCDialog(document.querySelector('#interest-dialog-fees'));
// const strategiesDialog = new MDCDialog(document.querySelector('#interest-dialog-strategies'));

// dialog.listen('MDCDialog:accept', function() {
//   console.log('accepted');
// });

dialog.listen('MDCDialog:cancel', function() {
  document.querySelector('#mce-EMAIL').classList.remove('mce_inline_error');
  document.querySelector('#mce-EMAIL + .mce_inline_error').style.display = 'none';
});

function setDialog(config) {
  document.getElementById('interest-dialog-label').textContent = config.label;
  document.getElementById('interest-dialog-description').textContent = config.description;
}
function setCheckboxes(checkedId) {
  const checkboxes = document.getElementById('interest-dialog__interest').querySelectorAll('input[type=checkbox]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkboxes[i].id === checkedId ? true : false;
  }
}
function sendEvent(label) {
  window.gtag && window.gtag('event', 'click', {
    'event_category': 'interest-click',
    'event_label': label
  });
}

document.getElementById('interest-button-ethical').addEventListener('click', (e) => {
  sendEvent('ethical');
  e.preventDefault();
  dialog.lastFocusedTarget = e.target;
  setCheckboxes('mce-group[169]-169-0');
  setDialog(ethicalConfig);
  dialog.show();
});
document.getElementById('interest-button-fees').addEventListener('click', (e) => {
  sendEvent('fees');
  e.preventDefault();
  dialog.lastFocusedTarget = e.target;
  setCheckboxes('mce-group[169]-169-1');
  setDialog(feesConfig);
  dialog.show();
});
document.getElementById('interest-button-strategies').addEventListener('click', (e) => {
  sendEvent('strategies');
  e.preventDefault();
  dialog.lastFocusedTarget = e.target;
  setCheckboxes('mce-group[169]-169-2');
  setDialog(strategiesConfig);
  dialog.show();
});
