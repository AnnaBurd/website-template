import runningTextLineView from "./views/runningTextLineView";

const init = function () {
  console.log("Hello from app!");

  runningTextLineView.startAnimation(); // TODO stop animation when not in focus
};

init();
