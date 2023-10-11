type ModalProps = {
    setOpen: (value: boolean) => void;
    textHeader: string;
    title: string;
    description: string;
};

export function Modal({ setOpen, textHeader, title, description }: ModalProps) {
    return (
        <div className="modal">
            <div className="modal__header">
                <p className="modal__header-text">{textHeader}</p>
                <i
                    className="modal__icon-close fa-solid fa-xmark"
                    onClick={() => setOpen(false)}
                ></i>
            </div>
            <div className="modal__body">
                <h2 className="modal__title">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="modal__footer">
                <button className="modal__btn" onClick={() => setOpen(false)}>
                    Close
                </button>
            </div>
        </div>
    );
}
