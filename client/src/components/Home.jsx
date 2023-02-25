import React from 'react';

function Home() {
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
    
    <div className="home">
      <div id="google_translate_element"></div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-20">
            <img
              src="./images/header-img.jpg"
              className="image-header"
              alt=""
            />

            <div className="images ">
              <div className="image ">
                <img src="./images/t4.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>Tample of isis at philae</strong>
                  </p>
                </div>
              </div>
              <div className="image ">
                <img src="./images/t2.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>
                      The tomp of queen Nefertary the wife of ramses - Luxer -
                      Egypt
                    </strong>
                  </p>
                </div>
              </div>
              <div className="image ">
                <img src="./images/t3.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>Karnak Tample</strong>
                  </p>
                </div>
              </div>
              <div className="image ">
                <img src="./images/t6.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>King Amenhotep</strong>
                  </p>
                </div>
              </div>
              <div className="image ">
                <img src="./images/t7.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>Abu Simble</strong>
                  </p>
                </div>
              </div>
              <div className="image ">
                <img src="./images/t8.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>Pyramids - Giza</strong>
                  </p>
                </div>
              </div>
              <div className="image ">
                <img src="./images/t9.jpg" className="egypt-image " alt="" />
                <div className="image-text ">
                  <p>
                    <strong>The Tample of Luxer</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
