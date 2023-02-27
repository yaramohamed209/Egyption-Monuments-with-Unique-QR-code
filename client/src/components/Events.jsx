import React from 'react';
function Events() {
  React.useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        // eslint-disable-next-line no-undef
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      'google_translate_element'
    );
  };
  return (
    <center>
    <div class="events" >
    <div id="google_translate_element"></div>
        </div>
        
        </center>
  );
}

export default Events;
