$(".skip").keyup(function () {
    if (this.value.length == this.maxLength) {
      var $next = $(this).next('.skip');
      if ($next.length)
          $(this).next('.skip').focus();
      else
          $(this).blur();
    }
});

$(".skip").attr("autocomplete", "off");