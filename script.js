var fetch = function () {
    $('.json').empty();
    var ISBNvalue = $('.ISBN-number').val();
    $.ajax({
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=isbn:" + ISBNvalue,
      success: function(data) {
        console.log(data)
        
        var books = {
            allbooks : [
                {title : data.items[0].volumeInfo.title},
                {description : data.items[0].volumeInfo.description},
                {authors : data.items[0].volumeInfo.authors},
                {image : data.items[0].volumeInfo.imageLinks.smallThumbnail}
            ]
        };
        var source = $('#store-template').html();
        var template = Handlebars.compile(source)
        var newHTML = template(books);
        $('.json').append(newHTML);


        // $('.json').append('<h1>' + data.items[0].volumeInfo.title + '</h1>');
        // $('.json').append('<span>' + data.items[0].volumeInfo.description + '</span>');
        // $('.json').append('<h2>' + 'Written by: ' + data.items[0].volumeInfo.authors + '</h2>')
        // $('.json').append('<img src=' + data.items[0].volumeInfo.imageLinks.smallThumbnail +  '/>')
 

 
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };


  $('.btn-search').click(fetch);