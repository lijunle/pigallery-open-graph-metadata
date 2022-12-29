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
      var description = date + "，共" + count + "张图片（视频）"

      addProperty('og:type', 'website');
      addProperty('og:title', title);
      addProperty('og:description', description);

      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        var canvas = document.createElement('Canvas');
        var ctx = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL();
        addProperty('og:image', dataURL);
      };
      img.src = document.querySelector('app-gallery-grid-photo img').src;
    }
  }

  window.addEventListener('load', function () {
    setTimeout(setMetadatas, 5000);
  });
}());
