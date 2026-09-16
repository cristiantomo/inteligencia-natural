(function () {
  const key = "in-theme-hank";
  const root = document.documentElement;
  const stored = localStorage.getItem(key);
  root.setAttribute("data-theme", stored === "light" ? "light" : "dark");

  const button = document.getElementById("theme-toggle");
  if (!button) return;

  button.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
  });
})();
