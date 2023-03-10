class Model {
  #landplots = [];

  loadLandplotsData() {
    let item1 = {
      id: "plot-1",
      title: "3,3 Sào Hoà Long",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Par1 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Par2 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
        {
          bulletPoints: [
            "Vi tri o cho she phat trien",
            "Tai sao lallala",
            "sdfsdfsdf",
          ],
        },
        {
          paragraph:
            "Par3 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "100",
      height: "120",
      width: "140",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "10 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 7,
      videos: 1,
    };

    let item2 = {
      id: "plot-2",
      title: "Name of land",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Par1 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Par2 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
        {
          bulletPoints: [
            "Vi tri o cho she phat trien",
            "Tai sao lallala",
            "sdfsdfsdf",
          ],
        },
        {
          paragraph:
            "Par3 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "100",
      height: "120",
      width: "140",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "10 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 6,
      videos: 1,
    };

    let item3 = {
      id: "plot-3",
      title: "Name of land",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Par1 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Par2 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
        {
          bulletPoints: [
            "Vi tri o cho she phat trien",
            "Tai sao lallala",
            "sdfsdfsdf",
          ],
        },
        {
          paragraph:
            "Par3 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "100",
      height: "120",
      width: "140",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "10 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 6,
      videos: 1,
    };

    let item4 = {
      id: "plot-4",
      title: "Name of land",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Par1 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Par2 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
        {
          bulletPoints: [
            "Vi tri o cho she phat trien",
            "Tai sao lallala",
            "sdfsdfsdf",
          ],
        },
        {
          paragraph:
            "Par3 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "100",
      height: "120",
      width: "140",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "10 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 1,
      videos: 0,
    };

    let item5 = {
      id: "plot-5",
      title: "Name of land",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Par1 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Par2 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
        {
          bulletPoints: [
            "Vi tri o cho she phat trien",
            "Tai sao lallala",
            "sdfsdfsdf",
          ],
        },
        {
          paragraph:
            "Par3 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "100",
      height: "120",
      width: "140",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "10 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 1,
      videos: 0,
    };

    let item6 = {
      id: "plot-6",
      title: "Name of land",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Par1 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Par2 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
        {
          bulletPoints: [
            "Vi tri o cho she phat trien",
            "Tai sao lallala",
            "sdfsdfsdf",
          ],
        },
        {
          paragraph:
            "Par3 Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "100",
      height: "120",
      width: "140",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "10 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 1,
      videos: 0,
    };

    this.#landplots.push(item1);
    this.#landplots.push(item2);
    this.#landplots.push(item3);
    this.#landplots.push(item4);
    this.#landplots.push(item5);
    this.#landplots.push(item6);

    return this.#landplots;
  }
}

export default new Model();
