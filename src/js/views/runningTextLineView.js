class RunningTextLineView {
  #data = [
    "Hanh phuc la cai gi nua.",
    "Hanh phuc la cai gi nua - 12.",
    "Lorem ipsum :)",
    "Any line you want to say",
    "Rather long line line line tatadaadad yey",
    "Văn bản góp ý của Quý Cơ quan gửi về Cục Thu thập dữ liệu và Ứng",
  ];
  #parentElement = document.getElementById("hero-text");

  #currLine = 0; // Index of current text line from #data
  #running = false;

  #pauseBetweenLineAnimations = 1; // Seconds
  #pauseBetweenCharacterAnimations = 0.1; // Seconds

  async #sleep(sec) {
    return new Promise((_) => setTimeout(_, sec * 1000));
  }

  async #eraseLine() {
    let prevText = this.#data[this.#currLine];

    for (let i = prevText.length; i >= 0; i--) {
      this.#parentElement.innerHTML = prevText.slice(0, i) + "︳";
      await this.#sleep(this.#pauseBetweenCharacterAnimations / 3);
    }
  }

  async #printLine() {
    if (++this.#currLine >= this.#data.length) {
      this.#currLine = 0;
    }
    let newText = this.#data[this.#currLine];

    for (let i = 0; i <= newText.length; i++) {
      this.#parentElement.innerHTML = newText.slice(0, i) + "︳";
      await this.#sleep(this.#pauseBetweenCharacterAnimations);
    }
  }

  async startAnimation() {
    this.#parentElement = document.getElementById("hero-text");
    this.#running = true;

    while (this.#running) {
      await this.#eraseLine();
      await this.#sleep(this.#pauseBetweenLineAnimations / 3);
      await this.#printLine();
      await this.#sleep(this.#pauseBetweenLineAnimations);
    }
  }

  async stopAnimation() {
    this.#running = false;
  }
}

export default new RunningTextLineView();
