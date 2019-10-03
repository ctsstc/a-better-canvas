// IIFE
(document => {
  const source = 'https://cdn.jsdelivr.net/gh/ctsstc/a-better-canvas@master/canvas%20discussion%20enhancer.js';

  function execute() {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', source);
    document.head.appendChild(scriptTag);
  }

  return {
    execute
  };
})(document).execute();
