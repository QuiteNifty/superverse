import { MDCDialog, MDCDialogFoundation, util } from '@material/dialog';

var ethicalDialog = new MDCDialog(document.querySelector('#interest-dialog-ethical'));
var feesDialog = new MDCDialog(document.querySelector('#interest-dialog-fees'));
var strategiesDialog = new MDCDialog(document.querySelector('#interest-dialog-strategies'));

// ethicalDialog.listen('MDCDialog:accept', function() {
//   console.log('accepted');
// });

// ethicalDialog.listen('MDCDialog:cancel', function() {
//   console.log('canceled');
// });

document.getElementById('interest-button-ethical').addEventListener('click', (e) => {
  e.preventDefault();
  ethicalDialog.lastFocusedTarget = e.target;
  ethicalDialog.show();
});
document.getElementById('interest-button-fees').addEventListener('click', (e) => {
  e.preventDefault();
  feesDialog.lastFocusedTarget = e.target;
  feesDialog.show();
});
document.getElementById('interest-button-strategies').addEventListener('click', (e) => {
  e.preventDefault();
  strategiesDialog.lastFocusedTarget = e.target;
  strategiesDialog.show();
});
