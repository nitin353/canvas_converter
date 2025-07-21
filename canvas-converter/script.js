const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');
const codeBox = document.getElementById('codeBox');

fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  const fileType = file.type;

  if (fileType.startsWith('image/')) {
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        generateCanvasJSCode(canvas.toDataURL("image/png"));
      };
      img.src = event.target.result;
    };

    if (fileType === 'image/svg+xml') {
      reader.readAsText(file); // SVG is XML text
    } else {
      reader.readAsDataURL(file);
    }

  } else if (fileType === 'application/pdf') {
    reader.onload = async function (event) {
      const pdf = await pdfjsLib.getDocument({ data: event.target.result }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      const imgData = canvas.toDataURL("image/png");
      generateCanvasJSCode(imgData);
    };
    reader.readAsArrayBuffer(file);

  } else {
    alert("Unsupported file type.");
  }
}

function generateCanvasJSCode(imgSrc) {
  const code = `
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "${imgSrc}";
  `.trim();
  codeBox.value = code;
}

function copyCode() {
  codeBox.select();
  document.execCommand('copy');
  alert("Code copied to clipboard!");
}
