class Model {
  #landplots = [];

  /// Temporary -> should load data from backend
  loadLandplotsData() {
    let item1 = {
      id: "plot-1",
      title: "3,3 Sào Hoà Long",
      briefDescription:
        "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần.",
      longDescription: [
        {
          paragraph:
            "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công .",
        },
        {
          paragraph:
            "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
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
            "Cần Bán Gấp 7828m2 Kế Công An Hắc Dịch. Đối Diênn Khu Công Nghệ Cao 450ha Chủ Cần Bán Nhanh Để Mở Trang Trại Heo. Nên Cần Bán Gấp m Thổ Cư. Khu Dân Cư. Kế Công An Hắc Dịch. Cần Bán Gấp 7828m2 Kế Công.",
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
      title: "Kẹt tiền ngân hàng cần ra gấp lô đất",
      briefDescription:
        "lô đất 23x45/67(1151m2) 50 thổ cư ngay vòng xoay Bà Rịa chỉ 13,2 tỷ.",
      longDescription: [
        {
          paragraph:
            " Là một lô đất có vị trí siêu đẹp nằm trên trục đường chính 4 làn có vỉa hè rộng 40m ngay cạnh vòng xoay lớn trung tâm của thành phố bà rịa. Đây được xem là tuyến được thông thương thuân lợi của cảng và khu Công Nghiệp Sonadzi.",
        },
        {
          paragraph:
            "Với diện tích (1151m²) 23x45/67 và có 50 thổ cư, lô đất có sổ hồng pháp lý đầy đủ rõ ràng để sang tên đang được chào bán với mức giá không tưởng là 13,2 tỷ đồng",
        },
        {
          paragraph:
            "Rõ ràng nếu anh chị đã từng đầu tư hoặc tìm hiểu bất động sản bà rịa vũng tàu khu vực trên thì có lẻ sẽ biết đây là một cơ hội béo bỡ để đầu tư.",
        },
        {
          paragraph:
            "Với diện tích và vị trí quá tốt lô đất thích hợp để đầu tư một số dịch vụ như nhà hàng, trạm dừng chân, công ty, văn phòng... Vv. Là một lô đất cực kì tâm huyết nhưng vì tình hình không mấy lạc quan chủ cần trả gấp nợ ngân hàng nên sẽ nhượng lại với mức giá này để bán nhanh.",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "1151",
      height: "120",
      width: "140",
      papers: "Sổ đỏ/ Sổ hồng",
      direction: "Đông Nam",
      price: "13.2 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 6,
      videos: 1,
    };

    let item3 = {
      id: "plot-3",
      title: "Bán đất tại đường Cao Triều Phát",
      briefDescription:
        "Chính chủ bán lô đất đường Cao Triệu Phát view công viên 100m2 thổ cư 100% sau uỷ ban P.Long Tâm",
      longDescription: [
        {
          paragraph:
            "hính chủ gửi bán lô đất mặt tiền đường Cao Triều Phát, khu Gò Cát 6, phường Long Tâm, TP Bà Rịa.",
        },
        {
          bulletPoints: [
            "Vị trí rất đẹp view công viên mát mẻ, thoáng mát. Ngay sát trường học cấp 1 - 2 - 3, chợ, bệnh viện.",
            "Diện tích: 5x20m full tc. Sổ hồng riêng chính chủ.",
            "Giá bán: 2tỷ9 bớt lộc.",
          ],
        },
      ],
      location: "Bán đất tại phường Long Tâm, thành phố Bà Rịa",
      area: "100",
      height: "120",
      width: "5",
      papers: "Đã có sổ",
      direction: "Đông Nam",
      price: "2.9 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
      link: "", //TODO LINK TO THIRD PARTY SITE WITH MAP,
      images: 6,
      videos: 1,
    };

    let item4 = {
      id: "plot-4",
      title: "Bán đất tại đường Phan Thanh Giản",
      briefDescription:
        "Bà Rịa xả lỗ 400triệu cho lô đất mặt tiền ngay phố đi bộ và công viên 30/4 Bà Rịa",
      longDescription: [
        {
          paragraph: "Xá lỗ 400triệu cho lô đất tái định cư 30/4",
        },
        {
          paragraph:
            "Đất tọa lạc tại mặt tiền đường Phan Thanh Giản, đường nhựa vỉa hè, cách trục chính Phạm Hùng 50m, đối diện cổng công viên 30/4 lớn nhất tỉnh BRVT. Cách phố đi bộ 500m.. Cách bệnh viện Bà Rịa 1km",
        },
        {
          paragraph:
            "Nơi đây được cho là nơi đáng sống nhất khu vực Bà Rịa. Diện tích: 5x18 m(full thổ cư).",
        },
      ],
      location:
        "Võ Văn Kiệt, Phường Hắc Dịch, Thị xã Phú Mỹ, Bà Rịa - Vũng Tàu",
      area: "90",
      height: "120",
      width: "5",
      papers: "Sổ đỏ/ Sổ hồng",
      direction: "Tây - Bắc",
      price: "3.5 tỷ (200 triệu/m&sup2)", // TODO 2 superscript, tỷ (200 triệu/m&sup2) <- automatically calculate
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

  getLandplotsData() {
    return this.#landplots;
  }

  getLandplotData(landPlotID) {
    return this.#landplots.find((landplot) => landplot.id === landPlotID);
  }
}

export default new Model();