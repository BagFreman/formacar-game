document.addEventListener('DOMContentLoaded', () => {

   Fancybox.bind("[data-fancybox]", {
   });

   document.addEventListener('DOMContentLoaded', function () {
      var fancyboxElements = document.querySelectorAll('.fancybox');
      if (fancyboxElements.length) {
         Fancybox.bind(fancyboxElements, {
            type: 'iframe',
            iframe: {
               preload: false,
               css: {
                  width: '100%',
                  height: '100%',
                  'max-width': '800px',
                  'max-height': '600px'
               },
               attr: {
                  allowfullscreen: true
               }
            }
         });
      }
   });

})