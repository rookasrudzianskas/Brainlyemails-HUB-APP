import React, {useCallback} from 'react';
// Import React dependencies.
import { useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate';
import CodeIcon from '@mui/icons-material/Code';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
import { Editor, Transforms } from 'slate';
import {CustomEditor} from "../SubjectSection/utils/CustomEditor";


const EmailBodySection = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])



    return (
        <div className="px-10 py-5 h-[10rem]">
            <div className="flex flex-row items-center">
                <Slate editor={editor} value={value} onChange={value => setValue(value)}>
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2">
                            <button
                                onMouseDown={event => {
                                    event.preventDefault()
                                    CustomEditor.toggleBoldMark(editor)
                                }}
                            >
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-sm mb-3">
                                    <p className="text-xl font-semibold">
                                        B
                                    </p>
                                </div>
                            </button>
                            <button
                                onMouseDown={event => {
                                    event.preventDefault()
                                    CustomEditor.toggleCodeBlock(editor)
                                }}
                            >
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-sm mb-3">
                                    <CodeIcon />
                                </div>
                            </button>
                        </div>
                        <div>
                            <Editable
                                editor={editor}
                                renderElement={renderElement}
                                renderLeaf={renderLeaf}
                                onKeyDown={event => {
                                    if (!event.ctrlKey) {
                                        return
                                    }

                                    switch (event.key) {
                                        case '`': {
                                            event.preventDefault()
                                            CustomEditor.toggleCodeBlock(editor)
                                            break
                                        }

                                        case 'b': {
                                            event.preventDefault()
                                            CustomEditor.toggleBoldMark(editor)
                                            break
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </Slate>
            </div>
        </div>
    );
};

export default EmailBodySection;

// Define a React component renderer for our code blocks.
export const CodeElement = props => {
    return (
        <pre {...props.attributes}>
        <code>{props.children}</code>
    </pre>
    )
}

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

const Leaf = props => {
    return (
        <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
      {props.children}
    </span>
    )
}
