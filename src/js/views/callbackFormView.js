class CallbackFormView {
  #parentElement = document
    .getElementById("popupForm")
    .querySelector(".popup__content");

  #generateHTML() {
    // Convert path to image in src folder to path to image in dist bundle (Parcel)
    let imgsrc = new URL("../../img/popup.jpg", import.meta.url);

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
            <form class="form-callback__input">
              <div class="nice-input">
                <input
                  class="nice-input__input"
                  type="text"
                  placeholder="Full name"
                  id="cf-name-input"
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
                />
                <label class="nice-input__label" for="cf-phone-input"
                  >Phone number</label
                >
              </div>
              <div class="nice-input">
                <textarea
                  id="cf-message-input"
                  name="field"
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
  }
}

export default new CallbackFormView();
