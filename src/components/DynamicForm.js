import { useState } from "react";

export default function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { id: Date.now(), value: "" }]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, newValue) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, value: newValue } : field)));
  };

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h2 className="text-lg mb-4">Dynamic Form</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-2 flex gap-2">
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder={`Field ${index + 1}`}
            className="p-2 bg-gray-800 border border-gray-700 rounded"
          />
          <button onClick={() => handleRemoveField(field.id)} className="p-2 bg-red-600 rounded">X</button>
        </div>
      ))}
      <button onClick={handleAddField} className="p-2 bg-green-600 rounded">Add Field</button>
    </div>
  );
}
