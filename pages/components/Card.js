function Card(props) {
    return (
        <div class="mwi-card">
            <div class="mwi-card-icon">
                <img src={props.image} alt={props.title} />
            </div>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <div class="mwi-toolbar"><a href="#" class="mwi-toolbar-link">Learn More</a></div>
        </div>
    );
}

export default Card;