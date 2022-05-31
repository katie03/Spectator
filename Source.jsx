function Source({number, name, email}) {
    return (
        <div className = "entree">
            <div className="number">{number}:</div>
            <div className="name">{name}</div>
            <div className="empty"></div>
            <div className="email">{email}</div>
            <div className="red">Delete</div>
        </div>
    )
}

export default Source;
