import React, { useEffect, useState } from 'react'

import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const Draft = () => {
    const [state, setState] = useState<EditorState>(() => EditorState.createEmpty())

    return <Editor editorState={state} onChange={setState} />
}

export default Draft
