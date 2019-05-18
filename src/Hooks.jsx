import React from 'react';

import EffectExample from './EffectExample';
import ReducerExample from './ReducerExample';
import RefExample from './RefExample';
import ContextExample from './ContextExample';
import MemoExample from './MemoExample';
import DebugValueExample from './DebugValueExample';
import LayoutEffectExample from './LayoutEffectExample';
import OnClickOutsideExample from './OnClickOutsideExample';
import ThirdPartyExample from './ThirdPartyExample';
import ReactSpringExample from './ReactSpringExample';

const Hooks = () => {
    return (
        <div>
            <h1>Hooks Playground</h1>
            <ReactSpringExample />
            <LayoutEffectExample />
            <OnClickOutsideExample />
            <EffectExample />
            <ReducerExample />
            <RefExample />
            <ContextExample />
            <ThirdPartyExample />
            <MemoExample title={'Memo Example'} />
            <DebugValueExample />
        </div>
    );
};

export default Hooks;
