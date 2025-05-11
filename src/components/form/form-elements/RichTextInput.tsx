import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextEditor from "../input/TextEditor";

export default function RadioButtons() {
  const [editorValue, setEditorValue] = useState<string>('');

  const handleEditorChange = (content: string) => {
    setEditorValue(content);
    console.log('Editor content:', content);
  };
  return (
    <ComponentCard title="Rich Text Editor">
      <TextEditor value={editorValue} onChange={handleEditorChange} />
      </ComponentCard>
  );
}
