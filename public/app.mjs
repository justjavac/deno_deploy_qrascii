import qr from "https://cdn.skypack.dev/qr.js?dts";

function qrascii(qrstr, ch = "M") {
  const white = ch;
  const black = " ";

  function toCell(isBlack) {
    return isBlack ? black : white;
  }

  const qrcode = qr(qrstr);
  const cells = qrcode.modules;

  let str = "";
  const border = white.repeat(qrcode.moduleCount + 2).repeat(2);

  str += border + "\n";
  for (const row of cells) {
    str += [false, ...row, false]
      .map(toCell)
      .map((x) => x.repeat(2))
      .join("");
    str += "\n";
  }
  str += border;
  return str;
}

const $ = (s) => document.querySelector(s);
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = $("#text").value.trim();
  const ch = $("#ch").value.trim();
  $("#result").innerHTML = qrascii(text, ch);
});

$("#result").innerHTML = qrascii("https://qrascii.deno.dev");
