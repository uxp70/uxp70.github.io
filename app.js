(function () {
  "use strict";

  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-cat]"));
  var status = document.getElementById("filter-status");
  var year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var kind = button.getAttribute("data-filter");
      var shown = 0;

      filters.forEach(function (other) {
        other.setAttribute("aria-pressed", String(other === button));
      });

      items.forEach(function (item) {
        var match = kind === "all" || item.getAttribute("data-cat") === kind;
        item.hidden = !match;
        if (match) shown += 1;
      });

      if (status) {
        status.textContent =
          kind === "all"
            ? "Showing all " + shown + " projects"
            : "Showing " + shown + (shown === 1 ? " project" : " projects");
      }
    });
  });
})();
