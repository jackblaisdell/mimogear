/* ================
// Main Site Function
// ============= */

site();

function site() {

  drawer({
    trigger: '.drawer-trigger'
  });

  harmonica({
    container: '.harmonica',
    header: '.harmonica-header',
    content: '.harmonica-content'
  });

  lantern({
    container: '.lantern',
    prevSymbol: '#arrow-back',
    nextSymbol: '#arrow-forward',
    closeSymbol: '#close'
  });

  sail();

}