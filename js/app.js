$(document).ready(function () {

  function getQuote() {
      $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(json) {
      var html = "";
      var randomIndex = Math.floor(Math.random() * json.length + 1);
      html += "<div class = 'quote-text text-center'>";
      html += json[randomIndex].content;
      html += "</div>";
      html += "<div class = 'quote-author text-right'>";
      html += json[randomIndex].title;
      html += "</div>";

      $(".quote-content").html(html);
    });
  }

  getQuote();

  $(".quote-actions a").click(function (e){
    getQuote();
  });





});

