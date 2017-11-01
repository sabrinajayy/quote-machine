$(document).ready(function () {
    // $.ajax({
    //     url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand"
    // }).then(function(data) {
    //    $('.quote-text').append(data[0].content);
    //    $('.quote-author').append(data[0].title);
    // });



  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
    var html = "";
    html += "<div class = 'quote-text text-center'>";
    html += json[0].content;
    html += "</div>";
    html += "<div class = 'quote-author text-right'>";
    html += json[0].title;
    html += "</div>";

    $(".quote-content").html(html);
  });



});

