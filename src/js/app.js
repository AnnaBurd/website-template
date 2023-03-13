import runningTextLineView from "./views/runningTextLineView";
import popupView from "./views/popupView";
import callbackFormView from "./views/callbackFormView";
import landCardsView from "./views/landCardsView";
import landPageView from "./views/landPageView";
import mainView from "./views/mainView";
import model from "./model";

const gotoLandPage = function (landPlotID) {
  let plotData = model.getLandplotData(landPlotID);

  if (!plotData) {
    console.log(
      "TODO ERROR -> did not find plot by ID so can not render plot's page"
    );
    return;
  }

  // TODO Can pop state from history later to implement arrow back functionality
  console.log("Going to page", landPlotID);
  window.history.pushState(
    { page_id: "index" }, // TODO ID of current page to store in window history states -> curr page should be stored in state
    "",
    urlSlug(plotData.title) // new URL to add into the address line: domain/urlSlug
  );

  let suggestions = model.getSuggestionsForPLot(landPlotID);

  console.log("Render land page sceleton");
  landPageView.render(
    plotData,
    suggestions,
    model.getNumberOfSuggestionsPages()
  ); // Render land plot page
  if (suggestions.length) {
    // And include render of suggested pages if any
    console.log("Render and link similar land plots suggestions", suggestions);
    landCardsView.render(suggestions, "suggestionsGrid");
    landCardsView.addClickHandlers(gotoLandPage);
    landPageView.addClickArrowSuggestionsHandler(model.state);
  }
};

const urlSlug = (title) => {
  return title
    .toLowerCase()
    .replace(
      /[^a-z0-9_,àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ ]/gu,
      ""
    )
    .replaceAll(" ", "-");
};

// console.log(urlSlug("Jel-sdf:dsf sdf dsf"));

const init = function () {
  console.log("Hello from app!");

  // TODO read address -> if there is already link to some page load it

  mainView.render();
  // console.log("Render main land plots:");
  landCardsView.render(model.loadLandplotsData());
  landCardsView.addClickHandlers(gotoLandPage);

  runningTextLineView.startAnimation(); // TODO stop animation when not in focus

  popupView.addHandlers(); // TODO reconsider how to init popup
  callbackFormView.render();

  // console.log(model.loadLandplotsData());

  window.addEventListener("popstate", function (event) {
    // console.log(event);
    if (!event.state || event.state.page_id === "index") {
      mainView.render();
      // console.log("Render main land plots:");
      landCardsView.render(model.getLandplotsData());
      landCardsView.addClickHandlers(gotoLandPage);
      // runningTextLineView.stopAnimation(); // TODO fix animation when returned on page
      // runningTextLineView.startAnimation();
      // console.log("RENDER INDEX");
    }
  });
};

init();
// console.log(model.getSuggestionsForPLot("plot-1"));
