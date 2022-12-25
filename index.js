(function() {
  function addProperty(property, content) {
    var meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }

  function setMetadatas() {
    var name = document.querySelector('.breadcrumb-item:last-child');
    if (name) {
      addProperty('og:type', 'website');
      addProperty('og:title', name.textContent);
    }
  }

  window.addEventListener('load', function () {
    setTimeout(setMetadatas, 5000);
  });
}());
