function loadTableau(vizDivId, tableauUrl) {
  const vizDiv = document.getElementById(vizDivId);
  const options = {
    width: "100%",
    height: "600px"
  };
  new tableau.Viz(vizDiv, tableauUrl, options);
}
