$(document).ready(function(){

    function readNasaWelcome() {
        var urlNasa = "https://images-api.nasa.gov/search?description=earth&title=earth";
        $.ajax({
          url:urlNasa,
          success: function(r) {

              var random = Math.floor(Math.random() * r.collection.items.length);

               var obrazek = r.collection.items[random].links[0].href;

               var splitedUrl = obrazek.split("thumb");
               var mediumUrl = splitedUrl[0] + "medium" + splitedUrl[1];

               $.get(mediumUrl, function() {
                   $(".welcome").css('background-image', 'url(' + mediumUrl + ')');

               }).fail(function() {
                   $(".welcome").css('background-image', 'url(' + obrazek + ')');
                })
            }
        });
    }
    readNasaWelcome();

        // <ul>
        //     <li><img src=link[i]></li>
        // </ul>

    function readNasaGallery() {
        var urlNasa = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=V9gWebdHpzxi0cpx5xQqMM8LbHRzIN1jGBqIw7wY";
        $.ajax({
            url:urlNasa,
            success: function(r) {
                var marsImg = r.photos;
                var gallery = $('.gallery ul');
                var button = $('.gallery button');
                var n = 0;
                function loadImages() {
                    for (var i = n; i < n + 6; i++) {
                        var li = $('<li>');
                        var img = $('<img src=' + marsImg[i].img_src + '></img>');
                        gallery.append(li);
                        li.append(img);
                    }
                    n = n + 6;
                }
                loadImages();
                button.on('click', function() {

                    loadImages();
                })
            }
        })
    }

    readNasaGallery();

});

// https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

//r.collection.items[43].links[0].href

// https://api.nasa.gov/planetary/apod?api_key=V9gWebdHpzxi0cpx5xQqMM8LbHRzIN1jGBqIw7wY
// Account Email: lukasz992@gmail.com
// Account ID: e44ff87c-3318-40a2-bd13-9e11c470173f
