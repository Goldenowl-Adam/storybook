import { useState } from 'react';
import './searchBox.scss';

export const SearchBox = () => {
    const [isOpenInput, setIsOpenInput] = useState(false);

    return (
        <div className="container-search-box">
            <div
                className={
                    'search-box ' +
                    (isOpenInput ? 'search-box--show-input' : '')
                }
            >
                <input className="search-box__input" type="text" />
                <button
                    className="search-box__btn"
                    onClick={() => {
                        setIsOpenInput(!isOpenInput);
                    }}
                >
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </div>
    );
};
