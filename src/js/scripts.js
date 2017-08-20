      $(document).ready(function() {
        $("a").on("click", function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top
              },
              1000,
              function() {
                window.location.hash = hash;
              }
            );
          }
        });
      });

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById("myBtn").style.display = "block";
          } else {
              document.getElementById("myBtn").style.display = "none";
          }
      }

      $('#myBtn').each(function(){
          $(this).click(function(){
              $('html,body').animate({ scrollTop: 0 }, 'slow');
              return false;
          });
      });