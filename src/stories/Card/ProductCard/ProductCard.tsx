import './productCard.scss';
import { heartIcon, cartIcon } from './icon.tsx';
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
                    {heartIcon()}
                    {cartIcon()}
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
                        <div className="card__circle color-lime"></div>
                        <div className="card__circle color-red"></div>
                        <div className="card__circle color-gray"></div>
                    </div>
                    <div className="card__feature__btn">
                        <button>Buy now</button>
                        <button>Add cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
