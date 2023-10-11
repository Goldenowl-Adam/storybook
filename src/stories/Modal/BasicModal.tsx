import { useState } from 'react';
import './basicModal.scss';
import { Modal } from './components/Modal';

interface BasicModalProps {
    textHeader: string;
    title: string;
    description: string;
}

export const BasicModal = ({
    textHeader,
    title,
    description,
}: BasicModalProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="container-modal">
            {open && (
                <div
                    className="bg-cover "
                    onClick={() => {
                        setOpen(false);
                    }}
                ></div>
            )}
            {!open && (
                <button
                    className="button__open-modal"
                    onClick={() => setOpen(true)}
                >
                    Open Modal
                </button>
            )}

            {open && (
                <Modal
                    setOpen={setOpen}
                    textHeader={textHeader}
                    title={title}
                    description={description}
                />
            )}
        </div>
    );
};
