import { Card } from './component/Card';
import './profileCard.scss';

interface ProfilesCardProps {
    userList: { id: number; name: string; role: string; avatar: string }[];
}

export const ProfilesCard = ({ userList }: ProfilesCardProps) => {
    return (
        <div className="container">
            {userList.map(({ id, name, role, avatar }) => (
                <Card key={id} name={name} role={role} avatar={avatar} />
            ))}
        </div>
    );
};
