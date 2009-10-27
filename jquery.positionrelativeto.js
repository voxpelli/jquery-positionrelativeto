// $Id$
// Created by Pelle Wessman, Good Old, http://goodold.se/

/*global jQuery */
/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, regexp: true, undef: true, white: true, indent: 2*/

//Position defines where from the top, right, bottom or left of the relative element the position of the element should be placed
//Offset defines the position of the element that is going to be placed there.
jQuery.fn.positionRelativeTo = function (relativeTo, position, offset) {
  var relativeOffset = relativeTo.offset(), posX = 0, posY = 0, offsetRight, offsetBottom, tmp;

  if (position) {
    if (position.left !== undefined) {
      posX = Number(position.left);
    }
    else if (position.right !== undefined) {
      posX = relativeTo.outerWidth() - Number(position.right);
    }
    if (position.top !== undefined) {
      posY = Number(position.top);
    }
    else if (position.bottom !== undefined) {
      posY = relativeTo.outerHeight() - Number(position.bottom);
    }

    if (isNaN(posX)) {
      posX = 0;
    }
    if (isNaN(posY)) {
      posY = 0;
    }
  }

  if (offset) {
    if (offset.left !== undefined) {
      tmp = Number(offset.left);
      if (!isNaN(tmp)) {
        posX += tmp;
      }
    }
    else if (offset.right !== undefined) {
      offsetRight = Number(offset.right);
      if (isNaN(offsetRight)) {
        offsetRight = 0;
      }
    }
    if (offset.top !== undefined) {
      tmp = Number(offset.top);
      if (!isNaN(tmp)) {
        posY += tmp;
      }
    }
    else if (offset.bottom !== undefined) {
      offsetBottom = Number(offset.bottom);
      if (isNaN(offsetBottom)) {
        offsetBottom = 0;
      }
    }
  }

  this.each(function () {
    var $this, parentOffset, left, top;

    $this = jQuery(this);
    parentOffset = $this.offsetParent().offset();

    left = relativeOffset.left - parentOffset.left + posX;
    top  = relativeOffset.top  - parentOffset.top  + posY;

    if (offsetRight !== undefined) {
      left -= $this.outerWidth() + offsetRight;
    }
    if (offsetBottom !== undefined) {
      top -= $this.outerHeight() + offsetBottom;
    }

    $this.css({
      left : left + 'px',
      top  : top  + 'px'
    });
  });
};
