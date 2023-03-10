import runningTextLineView from "./views/runningTextLineView";
import popupView from "./views/popupView";
import callbackFormView from "./views/callbackFormView";
import landCardsView from "./views/landCardsView";
import model from "./model";

const init = function () {
  console.log("Hello from app!");

  // runningTextLineView.startAnimation(); // TODO stop animation when not in focus
  popupView.addHandlers(); // TODO reconsider how to init popup
  callbackFormView.render();

  // console.log(model.loadLandplotsData());

  console.log("Render main land plots:");
  landCardsView.render(model.loadLandplotsData());
};

init();
