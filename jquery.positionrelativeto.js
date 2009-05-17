// $Id$
// Created by Pelle Wessman, Good Old, http://goodold.se/

/*global jQuery */
/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, regexp: true, undef: true, white: true, indent: 2*/

jQuery.fn.positionRelativeTo = function (relativeTo, offsetX, offsetY) {
  var relativeOffset = relativeTo.offset();

  offsetX = Number(offsetX);
  offsetY = Number(offsetY);

  if (isNaN(offsetX)) {
    offsetX = 0;
  }
  if (isNaN(offsetY)) {
    offsetY = 0;
  }
  this.each(function () {
    var $this, parentOffset;

    $this = jQuery(this);
    parentOffset = $this.offsetParent().offset();

    $this.css({
      left : (relativeOffset.left - parentOffset.left + offsetX) + 'px',
      top  : (relativeOffset.top  - parentOffset.top  + offsetY) + 'px'
    });
  });
};
