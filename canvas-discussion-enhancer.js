// IIFE
(document => {
  function execute() {
    injectStyling();
    collapseAllEntries();
  }

  function injectStyling() {
    const css = `
      #discussion_subentries > .discussion-entries {
        margin-left: 0;
        border-left: 0;
      }
  
      .discussion-entries {
        margin-left: 20px;
        border-left: solid 2px grey;
      }
  
      .entry-content {
        padding-left: 0 !important;
      }

      /* make threads full width; hide right column that is empty */
      .with-right-side #right-side-wrapper {
        display: none;
      }
    `;
  
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
  
  function collapseAllEntries() {
    const collapseButton = document.getElementById('collapseAll');
    collapseButton.click();
  }

  // exposed members
  return {
    execute
  };
})(document).execute();
