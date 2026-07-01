import "./styles.css";

const primaryButton = document.querySelector(".primary");
const ghostButton = document.querySelector(".ghost");

primaryButton?.addEventListener("click", () => {
  primaryButton.textContent = "已经可以批注";
});

ghostButton?.addEventListener("click", () => {
  document.querySelector(".board")?.scrollIntoView({ behavior: "smooth" });
});
