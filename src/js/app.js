import runningTextLineView from "./views/runningTextLineView";
import popupView from "./views/popupView";

const init = function () {
  console.log("Hello from app!");

  //   runningTextLineView.startAnimation(); // TODO stop animation when not in focus
  popupView.addHandlers(); // TODO reconsider how to init popup
};

init();
