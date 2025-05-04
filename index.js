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
      var parts = name.textContent.split('_');
      var date = parts[0];
      var title = parts[1];

      var count = Number(document.querySelector('.photos-count').firstChild.textContent);
      var description = date + "，共" + count + "张图片（视频）";
      var image = document.querySelector('app-gallery-grid-photo img').src.split('/thumbnail/')[0] + '/thumbnail/300' + document.location.search;

      addProperty('og:type', 'website');
      addProperty('og:title', title);
      addProperty('og:description', description);
      addProperty('og:image', image);
    }
  }

  window.addEventListener('load', function () {
    setTimeout(setMetadatas, 5000);
  });
}());
