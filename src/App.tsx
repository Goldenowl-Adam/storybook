import { useState } from 'react';
import './App.css';
import { Modal } from './stories/components/Modal/Modal';

function App() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <button
                onClick={() => {
                    setOpen(true);
                }}
            >
                click
            </button>
            <Modal textHeader="xin chao" open={open} onClose={handleClose} />
        </div>
    );
}

export default App;
