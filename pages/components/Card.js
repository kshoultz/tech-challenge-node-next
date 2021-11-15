function Card(props) {
    return (
        <div className="mwi-card">
            <div className="mwi-card-icon">
                <img src={props.image} alt={props.title} />
            </div>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <div className="mwi-toolbar"><a href="#" className="mwi-toolbar-link">Learn More</a></div>
        </div>
    );
}

export default Card;