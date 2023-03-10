import runningTextLineView from "./views/runningTextLineView";
import popupView from "./views/popupView";
import callbackFormView from "./views/callbackFormView";

const init = function () {
  console.log("Hello from app!");

  runningTextLineView.startAnimation(); // TODO stop animation when not in focus
  popupView.addHandlers(); // TODO reconsider how to init popup
  callbackFormView.render();
};

init();
