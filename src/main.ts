import "./style.css";

const menuButton = document.getElementById("menuButton") as HTMLButtonElement;
const span_1 = document.getElementById("span_1") as HTMLSpanElement;
const span_2 = document.getElementById("span_2") as HTMLSpanElement;
const overlay = document.getElementById("overlay");
let toggle = false;

menuButton.onclick = () => {
  toggle = !toggle;

  if (toggle) {
    span_1.classList.add("translate-y-1", "rotate-45");
    span_2.classList.add("-translate-y-1", "-rotate-45");
    overlay?.classList.add(
      "opacity-100",
      "-translate-x-0",
      "w-[75dvw]",
      "sm:w-[65dvw]",
      "md:w-[50dvw]"
    );
    overlay?.classList.remove("opacity-0", "-translate-x-full", "w-0");
  } else {
    span_1.classList.remove("translate-y-1", "rotate-45");
    span_2.classList.remove("-translate-y-1", "-rotate-45");
    overlay?.classList.remove("opacity-100", "-translate-x-0", "w-[70dvw]");
    overlay?.classList.add("opacity-0", "-translate-x-full", "w-0");
  }
};
