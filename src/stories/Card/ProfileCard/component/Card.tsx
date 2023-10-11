type CardProps = {
    name: string;
    role: string;
    avatar: string;
};

export function Card({ name, role, avatar }: CardProps) {
    return (
        <div className="card-profile">
            <div className="card-profile__image">
                <img className="card-profile__avatar" src={avatar} alt={name} />
            </div>

            <h2 className="card-profile__name">{name}</h2>
            <p className="card-profile__role">{role}</p>
            <div className="card-profile__social">
                <i className="card-profile__icon fa-brands fa-facebook-f"></i>
                <i className="card-profile__icon fa-brands fa-square-youtube"></i>
                <i className="card-profile__icon fa-brands fa-tiktok"></i>
                <i className="card-profile__icon fa-brands fa-github"></i>
            </div>
            <div className="card-profile__contact-me">
                <button className="card-profile__btn">Contact me</button>
            </div>
        </div>
    );
}
