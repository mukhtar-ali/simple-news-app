import NewsItem from "./NewsItem";

interface IItem {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

interface INewsItem {
    items: IItem[];
}

function NewsGrid({ items }: INewsItem) {
    return (
        <div className="news-grid">
            {items.map((item, i) => (
                <NewsItem key={i} item={item} />
            ))}
        </div>
    );
}

export default NewsGrid;
