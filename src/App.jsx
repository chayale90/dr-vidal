import "./style.css"; // Your custom styles
import "./scroll.css";
import "./general.css";

const App = () => {
  return (
    <div className="App" dir="rtl">
      {/* Header Section */}
      <header className="container-fluid">
        <div className="container align-items-center p-0">
          <div className="d-flex justify-content-md-between justify-content-center flex-wrap-reverse pt-md-4 pt-3">
            <div className="me-3 me-md-0">
              <div className="d-flex align-items-end">
                <div className="me-0 me-md-2 ms-4 ms-md-0 text-center" style={{ color: "white" }}>
                  <h4 className="name">ד&quot;ר וידאל ברצילון</h4>
                  <h5 className="details">רופא מומחה בכירורגיה אורטופדית<br />מנהל מכפים ומרפקים</h5>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <a href="#odot" className="odot">
                  <button className="btn btn-header d-md-flex d-none shadow">אודות</button>
                </a>
              </div>
            </div>
            <div>
              <button className="btn btns-header shadow btn-tel">
                <a href="tel:09-7408811" type="tel">
                  09-7408811
                </a>
                <img className="iconPhone" src="/icons/phone.png" alt="phone" />
              </button>
              <button className="btn btns-header shadow btn-location">
                כפר-סבא
                <img className="iconLocation" src="/icons/location.png" alt="location" />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Moto Section */}
      <div className="container-fluid strip">
        <div className="container p-0">
          <div className="row">
            <div className="moto mt-md-5 mt-xl-0">
              <h3 className="title mx-2">
                <span className="blue">ניתוחים מתקדמים</span>
                <br />
                <span> בהתאמה אישית</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center" id="doctors">
        <img src="/images/clinic.jpg" alt="doctor" id="doctors-img" style={{ borderRadius: "5px" }} />
        <div className="d-none d-xl-block">
          <a href="tel:053-3900313" type="tel">
            <button id="btn-contact" className="btn shadow">
              יצירת קשר
            </button>
          </a>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className="iconWhatsapp">
        <a href="whatsapp://send?text=שלום, אני מתעיינ/ת בשירותי המרפאה.&phone=+972533900313">
          <img src="/icons/whatsapp-circle.svg" alt="whatsappIcon" width="60" />
        </a>
      </div>

      {/* About Section */}
      <aside className="container-fluid" id="odot">
        <div className="container p-0">

        </div>
      </aside>

      {/* Footer Section */}
      <footer className="container-fluid p-0">

      </footer>
    </div>
  );
};

export default App;
