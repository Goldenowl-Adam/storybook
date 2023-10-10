import './productCard.scss';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
}

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card__header">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="card__header__icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="card__header__icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </div>

                <div className="card__content">
                    <img src={image} alt={name} />
                    <h1>{name}</h1>
                    <div className="card__content__price">${price}</div>
                </div>
                <div className="card__feature">
                    <div className="card__feature__option-size">
                        <div>Size:</div>
                        <div className="card__box">6</div>
                        <div className="card__box">7</div>
                        <div className="card__box">8</div>
                        <div className="card__box">9</div>
                    </div>
                    <div className="card__feature__option-color">
                        <div>Color:</div>
                        <div className="card__circle color_lime"></div>
                        <div className="card__circle color_red"></div>
                        <div className="card__circle color_gray"></div>
                    </div>
                    <div className="card__feature__btn">
                        <div>Buy now</div>
                        <div>Add cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
