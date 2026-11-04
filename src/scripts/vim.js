let mode = "normal";

function isInputFocused() {
  const el = document.activeElement;
  return (
    el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.isContentEditable
  );
}

function scrollByAmount(x, y) {
  globalThis.scrollBy({ left: x, top: y, behavior: "smooth" });
}

document.addEventListener("keydown", (e) => {
  // Ignore when typing
  if (isInputFocused()) return;

  if (mode === "normal") {
    switch (e.key) {
      case "j":
        scrollByAmount(0, 150);
        break;
      case "k":
        scrollByAmount(0, -150);
        break;
      case "h":
        scrollByAmount(-150, 0);
        break;
      case "l":
        scrollByAmount(150, 0);
        break;
      case "g":
        globalThis.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "G":
        globalThis.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        break;
      case "i":
        mode = "insert";
        console.log("-- INSERT --");
        break;
    }
  } else if (mode === "insert") {
    if (e.key === "Escape") {
      mode = "normal";
      console.log("-- NORMAL --");
    }
  }
});
