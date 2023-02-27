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
    <img className='event-background' src='./images/event1.jpg' alt=''/>
    <div id="google_translate_element"></div>
    <div class="l-grid">
        <div class="item-container">
            <div class="img-container">
                <img src="./images/event1.jpg" alt=" "/>
            </div>
            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">Bubbe's Book Club</p>
                    <div class="separator"></div>
                    <p class="info">Bellmore, NY</p>
                    <p class="price">Free</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            Grand Central Terminal
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p class="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
        </div>
        <div className="Login">
            Click her to post an event <a href="/Login">sign in?</a>
          </div>
        </div>
        
        </center>
  );
}

export default Events;
