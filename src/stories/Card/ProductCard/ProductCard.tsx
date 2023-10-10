import './productCard.scss';
import { HeartIcon, CartIcon } from './icon.tsx';

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
                    <HeartIcon />
                    <CartIcon />
                </div>
                <div className="card__content">
                    <div className="card__image">
                        <img src={image} alt={name} />
                    </div>
                    <h2 className="card__content-title">{name}</h2>
                    <div className="card__content-price">${price}</div>
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
                        <div className="card__circle card__circle--lime"></div>
                        <div className="card__circle card__circle--red"></div>
                        <div className="card__circle card__circle--gray"></div>
                    </div>
                    <div>
                        <button className="card__btn">Buy now</button>
                        <button className="card__btn">Add cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
