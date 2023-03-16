class CallbackFormView {
  #parentElement = document
    .getElementById("popupForm")
    .querySelector(".popup__content");

  #generateHTML() {
    // Convert path to image in src folder to path to image in dist bundle (Parcel)
    let imgsrc = new URL("../../img/popup.jpg", import.meta.url);
    // loader.load(imgsrc);

    // console.log(imgsrc);

    return `<div class="form-callback">
          <div class="form-callback__left">
            <div class="form-callback__intro">
              <h2 class="form-callback__heading nice-h2">
                Chúng tôi rất mong nhận được hồi âm từ bạn
              </h2>
              <div class="form-callback__text nice-h2-p">
                Vui lòng để lại tin nhắn và chúng tôi sẽ gọi lại sớm
              </div>
            </div>
            <form class="form-callback__input" data-netlify="true" method="post" id="callbackForm">
            <input type="hidden" name="form-name" value="callbackForm" />
              <div class="nice-input">
                <input
                  class="nice-input__input"
                  type="text"
                  placeholder="Full name"
                  id="cf-name-input"
                  name="name"
                />
                <label class="nice-input__label" for="cf-name-input"
                  >Full name</label
                >
              </div>
              <div class="nice-input">
                <input
                  class="nice-input__input"
                  type="tel"
                  placeholder="Phone number"
                  id="cf-phone-input"
                  pattern="(\+?84|0[3|5|7|8|9])+([0-9]{8})"
                  required
                  name="phone"
                />
                <label class="nice-input__label" for="cf-phone-input"
                  >Phone number</label
                >
              </div>
              <div class="nice-input">
                <textarea
                  id="cf-message-input"
                  name="message"
                  maxlength="5000"
                  data-name="field"
                  placeholder="Message"
                  required=""
                  class="nice-input__input"
                ></textarea>
                <label class="nice-input__label" for="cf-message-input"
                  >Message</label
                >
              </div>
              <button class="nice-btn nice-btn--accent">Nhập thông tin</button>
            </form>
          </div>
          <div class="form-callback__right">
            <img
              src="${imgsrc.pathname}"
              loading="lazy"
              alt=""
              class="form-callback__image"
            />
          </div>
        </div>`;
  }

  render() {
    let html = this.#generateHTML();
    this.#parentElement.insertAdjacentHTML("afterbegin", html);

    // Sumbit dynamic form to netlify
    const handleSubmit = (event) => {
      event.preventDefault();

      console.log("CLICKED SUBMIT", event);

      const myForm = event.target;
      const formData = new FormData(myForm);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then((response) => {
          console.log(response);

          if (response.ok) {
            console.log("Form successfully submitted");
            // TODO success and failure form behavior ->
          } else {
            console.log(
              "Sorry error happend on submission - the service does not accept form?"
            );
          }
        })
        .catch((error) =>
          console.log(
            "Sorry the subscription service is not awailiable (netlify is down?)",
            error
          )
        );
    };

    document
      .querySelector("#callbackForm")
      .addEventListener("submit", handleSubmit);
  }
}

export default new CallbackFormView();
