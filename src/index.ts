function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = src;
  });
}

// https://stackoverflow.com/a/16599668
function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

async function main() {
  const $canvas = document.getElementById("melog_canvas") as HTMLCanvasElement;
  const ctx = $canvas.getContext("2d")!;

  const $melog = await loadImage("melog.png");
  const $text = document.getElementById("melog_text") as HTMLInputElement;

  $canvas.width = $melog.width;
  $canvas.height = $melog.height;

  // Please excuse me for all the hard-coded numbers you're about to see.
  function drawMelog(text: string) {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    ctx.drawImage($melog, 0, 0);
    ctx.font = "16px Comic Sans MS";
    ctx.fillStyle = "black";
    const x = 26;
    const lines = getLines(ctx, text, 60);
    let y = 68 + 10;
    lines.forEach((line) => {
      ctx.fillText(line, x, y);
      y += 16;
    });
  }

  drawMelog("type text here vv");

  $text.addEventListener("input", function () {
    drawMelog(this.value);
  });
}

main();
