var backgrounds = ["#a426ff", "#54e568", "#fced44", "#ff4747", "#65c6ed"];

$(document).ready(function () {
  getQuote();

   function getQuote() {
        $.ajax({
        type: 'GET',
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40',
        data: { get_param: 'value' },
        dataType: 'json',
        crossDomain: true,
        success: function (json) {
                  var html = "";
                  var randomIndex = Math.floor(Math.random() * json.length + 1);
                  var currentQuote = json[randomIndex].content.slice(3, -4);
                  var currentAuthor = "- " + json[randomIndex].title
                  html += "<div class = 'quote-text text-center'>";
                  html += json[randomIndex].content;
                  html += "</div>";
                  html += "<div class = 'quote-author text-right'>";
                  html += currentAuthor;
                  html += "</div>";

                  $('.quote-content').fadeTo('slow', 0.3, function() {
                      $(this).html(html);
                  }).fadeTo('slow', 1);

                  //encode quote and author text
                  var encodedQuote = encodeURIComponent(currentQuote);
                  var encodedAuthor = encodeURIComponent(currentAuthor);

                  $(".tweet-btn").fadeTo('slow', 0.3, function() {
                      $(this).html("<a href='https://twitter.com/intent/tweet?text=" + encodedQuote + encodedAuthor + "' target='_blank'><i class='fa fa-twitter-square fa-4x' aria-hidden='true'></i></a>");
                  }).fadeTo('slow', 1);
        }
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




