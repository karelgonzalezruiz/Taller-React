type AvatarProps = {
    name: string;
    size?: 'sm' | 'lg';
};

function Avatar({ name, size = 'lg' }: AvatarProps) {
    const initials = name
        .split(' ')
        .filter((word) => word.length > 0)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');

    const sizeClass = size === 'sm' ? 'avatar-sm' : 'avatar';

    return (
        <div
            className={`${sizeClass} rounded-circle bg-primary-subtle text-primary-emphasis fw-semibold d-flex align-items-center justify-content-center flex-shrink-0`}
        >
            {initials}
        </div>
    );
}

export default Avatar;
