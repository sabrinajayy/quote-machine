var backgrounds = ["#a426ff", "#54e568", "#fced44", "#ff4747", "#65c6ed"];

$(document).ready(function () {
  getQuote();

  function getQuote() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(json) {
      var html = "";
      var randomIndex = Math.floor(Math.random() * json.length + 1);
      html += "<div class = 'quote-text text-center'>";
      html += json[randomIndex].content;
      html += "</div>";
      html += "<div class = 'quote-author text-right'>";
      html += "- " + json[randomIndex].title;
      html += "</div>";

      // $(".quote-content").html(html);

      $('.quote-content').fadeTo('slow', 0.3, function() {
          $(this).html(html);
        }).fadeTo('slow', 1);
      });
  }

  function changeBackground() {
    var bkgrdColor = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    $('.page-wrapper').fadeTo('slow', 0.3, function() {
        $(this).css('background-color', bkgrdColor);
    }).fadeTo('slow', 1);
  }

  $(".quote-btn").click(function (e){
    changeBackground();
    getQuote();
  });

});




