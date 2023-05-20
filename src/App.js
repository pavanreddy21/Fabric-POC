import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "./styles.css";

export default function App() {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };

  // console.log(editor?.canvas?._objects);
  const onSubmit = () => {
    const items = editor?.canvas?._objects || [];
    console.log(items);
    const textEditable = new fabric.Textbox("Editable Textbox", {
      width: 500,
      editable: true,
      fill: "black"
    });

    editor?.canvas.add(textEditable);
    // editor?.canvas?.renderAll();

    const positions = items.map((item) => {
      return {
        top: item.top,
        radius: item.radius,
        width: item.width,
        height: item.height,
        left: item.left
      };
    });
    console.log(positions);
  };
  return (
    <div className="App">
      <h1>FabricJS React Sample</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
