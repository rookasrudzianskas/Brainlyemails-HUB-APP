import React from 'react';
// Import React dependencies.
import { useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
const EmailBodySection = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])



    return (
        <div className="px-10 py-5">
            <div className="flex flex-row items-center">
                <Slate
                    editor={editor}
                    value={value}
                    onChange={newValue => setValue(newValue)}
                >
                    <Editable />
                </Slate>
            </div>
        </div>
    );
};

export default EmailBodySection;
