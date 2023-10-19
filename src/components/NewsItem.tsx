import React from "react";

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
    url?: string;
    urlToImage: string;
}

interface INewsItem {
    item: IItem;
}

function NewsItem({ item }: INewsItem) {
    const websiteUrl = item.url;
    const website = websiteUrl?.split("/")?.pop()?.split("/")[0];

    const date = item.publishedAt;
    const formatDate = date.replace("T", " ");
    const fromatTime = formatDate.replace("Z", " ");

    return (
        <a href={websiteUrl} className="article">
            <div className="article-image">
                <img src={item.urlToImage} alt={item.title} />
            </div>
            <div className="article-content">
                <div className="article-source">
                    <img
                        src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
                        alt={item.source.id}
                    />
                    <span>{item.source.name}</span>
                </div>
                <div className="article-title">
                    <h2>{item.title}</h2>
                </div>
                <p className="article-description">{item.description}</p>
                <div className="article-details">
                    <small>
                        <b>Published At: {fromatTime}</b>
                    </small>
                </div>
            </div>
        </a>
    );
}

export default NewsItem;
