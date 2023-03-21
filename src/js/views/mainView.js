import icons from "url:../../icons/icons.svg";

export class MainView {
  #parentElement = document.querySelector("main");

  render() {
    this.#parentElement.innerHTML = "";
    document.querySelector("header")?.remove();

    // TODO Launch circle render

    this.#parentElement.insertAdjacentHTML("afterbegin", this.#generateHTML());

    this.#parentElement.insertAdjacentHTML(
      "beforebegin",
      this.#generateHeaderHTML()
    );
  }

  #generateHeaderHTML() {
    let htmlHeader = `<header class="hero" id="hero">
      <div class="hero__image">
        <div class="container__padding">
          <div class="hero__text container">
            <h1 class="nice-h1">Nơi Hạnh Phúc Ngập Tràn</h1>
            <div class="nice-h1-p" id="hero-text">Noi Hạnh Phúc</div>
          </div>
        </div>
      </div>
    </header>`;

    return htmlHeader;
  }

  #generateHTML() {
    let htmlMain =
      `      <section class="projects container__padding">
        <div class="projects__intro-wrapper container">
          <div class="projects__intro">
            <h2 class="nice-h2">Dự án hiện tại đang bán</h2>
            <a href="search.html">
              <div class="nice-h2-p arrow">
                Công ty giới thiệu mấy dự án đất đang bán với tỷ giá và diện
                tích các loại.
                <span
                  class="arrow__icon arrow__icon--right material-symbols-outlined"
                  >trending_flat</span
                >
              </div>
            </a>
            <!-- <div class="nice-h2-p arrow">Công ty giới thiệu mấy dự án đất đang bán với tỷ giá và diện tích các loại. <span class="arrow__icon arrow__icon--right material-symbols-outlined">trending_flat</span></div> -->
          </div>
        </div>

        <div class="projects__cards container grid" id="projectCards">
        </div>
      </section>` + this.#generateAboutSectionHTML();

    // console.log(html);

    return htmlMain;
  }

  #generateAboutSectionHTML() {
    return `<div class="decorative">
        <svg class="decorative__top-left">
          <use href="${icons}#ladder-top-left"></use>
        </svg>
      </div>
      <section class="about-company container__padding">
        <div class="about-company__content container">
          <div class="about-company__intro">
            <h2 class="nice-h2">Tại sao mua đất từ ​​chúng tôi</h2>
            <div class="nice-h2-p">
              Chúng tôi cung cấp các lô đất có giấy tờ chứng minh đầy đủ thuộc
              quyền sở hữu của chúng tôi, vì vậy bạn không cần phải mất thời
              gian tìm kiếm và tốn tiền hoa hồng từ môi giới và đại lý.
            </div>
          </div>
          <div class="about-company__boxes grid">
            <div class="info-box">
              <div class="info-box__content">
                <div class="info-box__icon">
                  <span class="material-icons">house</span>
                </div>
                <h3 class="info-box__name nice-h3">Tìm đất tốt</h3>
                <div class="info-box__description nice-h3-p">
                  Tất cả các lô đất đã được các chuyên gia của chúng tôi kiểm
                  tra đầy đủ về mức độ tuân thủ pháp luật và cũng được bác sĩ
                  chuyên khoa tâm thần kiểm tra với những khuyến nghị tích cực.
                </div>
              </div>
            </div>
            <div class="info-box">
              <div class="info-box__content">
                <div class="info-box__icon">
                  <span class="material-icons">face_6</span>
                </div>
                <h3 class="info-box__name nice-h3">Mua ngay của chủ</h3>
                <div class="info-box__description nice-h3-p">
                  Các lô đất thuộc quyền sở hữu hoàn toàn của chúng tôi và sẵn
                  sàng giao dịch ngay hôm nay.
                </div>
              </div>
            </div>
            <div class="info-box">
              <div class="info-box__content">
                <div class="info-box__icon">
                  <span class="material-icons">description</span>
                </div>
                <h3 class="info-box__name nice-h3">Hồ sơ chuẩn bị đầy đủ</h3>
                <div class="info-box__description nice-h3-p">
                  Chúng tôi cung cấp tài liệu đầy đủ trên trang web để xem xét
                  trước khi giao dịch, cũng như bất kỳ thông tin bổ sung nào
                  theo yêu cầu.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="decorative">
        <svg class="decorative__bottom-right">
          <use href="${icons}#ladder-bottom-right"></use>
        </svg>
      </div>`;
  }

  addClickHandlers(handler) {}
}

export default new MainView();
