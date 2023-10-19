interface ILink {
    id: number;
    name: string;
    value: string;
}

interface IProps {
    active: number;
    setActive: (id: number) => void;
    setCategory: (value: string) => void;
}

function Menu({ active, setActive, setCategory }: IProps) {
    const links: ILink[] = [
        { id: 1, name: "General", value: "general" },
        { id: 2, name: "Business", value: "business" },
        { id: 3, name: "Entertainment", value: "entertainment" },
        { id: 4, name: "Health", value: "health" },
        { id: 5, name: "Science", value: "science" },
        { id: 6, name: "Sports", value: "sports" },
        { id: 7, name: "Technology", value: "technology" },
    ];

    const handleClick = (id: number) => {
        setActive(id);
        setCategory(links[id - 1].value);
    };

    return (
        <nav className="menu">
            {links.map((link) => (
                <li
                    key={link.id}
                    className={active === link.id ? "active" : "inactive"}
                    onClick={() => handleClick(link.id)}
                >
                    <span>{link.name}</span>
                </li>
            ))}
        </nav>
    );
}

export default Menu;
