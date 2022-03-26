import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

interface IProps {
    items: any[] | any,
    title?: string,
    link?: string,
    unfold?: boolean
}

const Playlist: React.FC<IProps> = ({ items, title, link, unfold = true }) => {
    const playlist = unfold ? items : items.slice(0, 8);

    return (
        <section className="playlist">
            <div className="playlist__header">
                <div>
                    <h2 className="title">
                        <Link to={'/genre/' + link} state={items}>{title}</Link></h2>
                </div>
                {
                    link ?
                        <Link to={'/genre/' + link} state={items} className="link">ВСЕ</Link>
                        : ''
                }

            </div>
            <div className="playlist__content">
                {
                    playlist.length && playlist.map((item: any) => (
                        <Card img={item.images[0].url} title={item.name} description={item.description} url={item.uri.split(':').slice(1, 2) + '/' + item.id} key={item.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Playlist;