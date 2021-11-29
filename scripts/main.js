let hash;

$( document ).ready(() =>  {

	//console.log(is_safari);

  //let details = null;
	hash = location.hash;

	if (hash != '' && !is_safari) $('#main').load('sections.html ' + hash + '_', null, () => checkHear());
	else if (hash != '' && hash != '#see' && is_safari) $('#main').load('sections.html ' + hash + '_', null, () => checkHear());
	else if (hash == '#') $('#main').load('sections.html ' + '#home' + '_');
	else if (hash == '#see' && is_safari) $('#main').load('sections.html ' + '#seeSafari_');
	else $('#main').load('sections.html ' + '#home' + '_');



	$(window).on( 'hashchange',(e) => {

    hash = location.hash;
		//FadeOut contentFader container

		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$('#contentFader').fadeOut('slow', () => {
			//load flexbox see page because user isn't on safari
			if (hash != '' && !is_safari) $('#main').load('sections.html ' + hash + '_', () => {
          $('html').animate({ scrollTop: 0 }, 'slow', () => {
			    	$('#contentFader').fadeIn('slow', 'swing', checkHear());
			    });
			});
			else if (hash == '#') $('#main').load('sections.html ' + '#home' + '_', () => {
				$('html').animate({ scrollTop: 0 }, 'fast');
				$('#contentFader').fadeIn('slow', 'swing');
			});
			//Loads different see page for safari users that doesn't use flexbox
			else if (hash != '#see' && hash != '' && is_safari){
				 $('#main').load('sections.html ' + hash + '_', () => {
				    $('html, body').animate({ scrollTop: 0 }, 'slow', () => {
				    	$('#contentFader').fadeIn('slow', 'swing');
				    });
				});
			}
			else if (hash == '#see' && is_safari) $('#main').load('sections.html ' + '#seeSafari_', () => {
				console.log('safari see');
			    $('html').animate({ scrollTop: 0 }, 'slow', () => {
			    	$('#contentFader').fadeIn('slow', 'swing');
			    });
			});
			else $('#main').load('sections.html ' + '#home' + '_', () => {
				$('html').animate({ scrollTop: 0 }, 'fast');
				$('#contentFader').fadeIn('slow', 'swing');
			});
		});

	 });

	 $('#contentFader').on('DOMSubtreeModified', () => {
		  $('[data-toggle="tooltip"]').tooltip();
	 });

	 if ('scrollRestoration' in history) {
	   history.scrollRestoration = 'manual';
	 }

});



var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf('Safari') > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf('op') > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}
if ((is_chrome)&&(is_opera)) {is_chrome=false;}

function checkHear(){

  if (hash == "#hear"){
    console.log('HEAR');
    //Fetch all the details element.
    let details = document.querySelectorAll("details");
    //console.log(details);
    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", (e) => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
          // Scroll to detail
          targetDetail.scrollIntoView({behavior: "smooth", block: "start"});
      });
    });
  }
}
