/**
 * OpenSeadragon auto-initializer.
 * Finds every element with [data-osd-src] and creates a viewer.
 * Requires OpenSeadragon to be loaded first (CDN or local).
 */
(function () {
  if (typeof OpenSeadragon === 'undefined') return;

  document.querySelectorAll('[data-osd-src]').forEach(function (el) {
    var src = el.getAttribute('data-osd-src');
    if (!src) return;

    OpenSeadragon({
      element: el,
      prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/',
      tileSources: { type: 'image', url: src },
      showNavigationControl: true,
      navigationControlAnchor: OpenSeadragon.ControlAnchor.TOP_RIGHT,
      minZoomImageRatio: 0.8,
      maxZoomPixelRatio: 5,
      visibilityRatio: 0.5,
      constrainDuringPan: true,
      animationTime: 0.3,
      gestureSettingsMouse: { scrollToZoom: true, clickToZoom: true, dblClickToZoom: true },
      gestureSettingsTouch: { pinchToZoom: true, flickEnabled: true }
    });
  });
})();
