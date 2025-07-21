
# 🖼️ Canvas.js Converter

A simple, powerful web-based tool that converts **PNG, JPG, PDF, and SVG files** — including **Figma SVG exports** — into **Canvas.js JavaScript code** for use in HTML5 canvas rendering.

🎯 Whether you're building certificate generators, design tools, or automation workflows, this tool helps you visually convert files to clean JavaScript Canvas code.

---

## 📺 Demo Video

🎥 Watch the full walkthrough & code explanation on YouTube:  
👉 [https://youtu.be/vPlO17Bqi_E](https://youtu.be/vPlO17Bqi_E)

> _Includes: live demo, code walkthrough, and real-world use cases._

---

## 🛠️ Features

✅ Upload files: **PNG, JPG, PDF, SVG**  
✅ Real-time canvas preview  
✅ Auto-generates `Canvas.js` drawing code  
✅ One-click **copy-to-clipboard**  
✅ Renders PDFs (first page) using `pdf.js`  
✅ Handles **Figma SVG exports** smoothly  
✅ Works entirely in the browser (no backend required)

---

## 📁 Project Structure

```
canvasjs-converter/
├── index.html           # UI layout and canvas
├── script.js            # File handling, rendering, and code generation
├── style.css            # Optional: extra styles (inline styling used by default)
├── README.md            # Project documentation
└── assets/              # (Optional) Sample PDFs, images, or SVGs
```

---

## 📄 Supported File Types

| File Type     | Status | Notes                                |
|---------------|--------|--------------------------------------|
| `.png`        | ✅     | Full support                         |
| `.jpg/.jpeg`  | ✅     | Full support                         |
| `.pdf`        | ✅     | Renders **first page** using `pdf.js` |
| `.svg`        | ✅     | Renders using `<img>` + `readAsText` |
| `.fig` (Figma)| ❌     | Not supported natively — use SVG export |

> 💡 For Figma: Export as `.svg` from your Figma design and upload it here.

---

## 🧪 How to Use

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/canvasjs-converter.git
```

2. **Open `index.html`** in any modern browser (Chrome, Edge, Firefox, etc.)

3. **Upload** a supported file (PNG, JPG, PDF, or SVG)

4. **Preview** is rendered on the canvas

5. The **Canvas.js code** is generated and shown below the canvas

6. Click “📋 Copy Code” to copy it to your clipboard

---

## 🧾 Example Output

Here’s a sample of the generated Canvas.js code:

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "data:image/png;base64,...";
```

You can use this snippet in your own web page with a `<canvas>` element.

---

## 🌐 Live Use Cases

- Dynamic certificate/image generation
- Web-based design → code converters
- HTML5 game/editor tools
- Low-code/No-code exports for canvas-based platforms
- Static asset to Canvas.js transformation for developers

---

## 🧠 Behind the Scenes

- Uses **HTML5 Canvas API** to render image/PDF/SVG
- PDF support powered by `pdf.js`
- SVG rendering via `<img>` with blob URLs
- Canvas output is converted to base64 and embedded in generated code

---

## 📦 Optional Improvements (Pull Requests Welcome!)

- 🔄 Drag-and-drop support
- 📥 Save code as `.js` or `.txt`
- 📤 Export final canvas as PNG or PDF
- 🌈 Color filters, overlays, or branding layers
- 🌐 Figma API integration (load via file ID or access token)

---

## 🤝 Contributing

Contributions are welcome! Open an issue or fork the repo and make a pull request.

If you’d like to add more features like full Figma API import or multi-page PDF rendering, feel free to build on top of this.

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 🔗 Links

- 🔥 **Live Demo Video**: [YouTube](https://youtu.be/vPlO17Bqi_E)
- 📁 **GitHub Repo**: [https://github.com/yourusername/canvasjs-converter](https://github.com/yourusername/canvasjs-converter)
- 📚 **Docs & Tutorial**: *(coming soon)*

---

Built with 💻 by [Nitin Nanda] — Empowering low-code creativity!
