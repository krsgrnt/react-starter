import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const OnClickOutsideExample = () => {
    const ref = useRef();
    const [display, setDisplay] = useState(true);

    useOnClickOutside(ref, setDisplay);

    return (
        <div>
            <h2>OnClick Outside Example</h2>
            {display && (
                <Modal className='modal' ref={ref}>
                    I am a modal
                </Modal>
            )}
            <button onClick={() => setDisplay(true)}>Restore</button>
        </div>
    );
};

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(false);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
}

const Modal = styled.div`
    border: 2px solid black;
`;

export default OnClickOutsideExample;
