import jQuery from "jquery/dist/jquery";

class SVGModifierClass {
  transform = function() {
    jQuery("img.svg").each(function() {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");

      jQuery.get(
        imgURL,
        function(data) {
          var $svg = jQuery(data).find("svg");

          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }

          $svg = $svg.removeAttr("xmlns:a");

          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  };
}

export default SVGModifierClass;
