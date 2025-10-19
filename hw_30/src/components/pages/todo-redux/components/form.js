import {memo, useState} from "react";

function TodoInput ({onAdd}) {

    const [text, setText] = useState("");

    const submit = () => {
        if (text.trim()) {
            onAdd(text);
            setText("");
        }
    };

    console.log("Render Form");
    return (
        <div className="flex mb-4">
            <input
                className="flex-1 p-2 border rounded"
                placeholder="Add a new task..."
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submit()}
            />
            <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={submit}
            >
                Add
            </button>
        </div>
    );
};

export default memo(TodoInput);