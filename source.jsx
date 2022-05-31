const Source = ({key, source, deleteSource,}) => {
    return (
        <div>
            <div className = "entree">
            <div className = "number">{source.id}:</div>
            <div className = "name">{source.name}</div>
            <div className = "empty"></div>
            <div className = "email">{source.email}</div>
            <button className="red" onClick={() => deleteSource(source.id)}>Delete</button>
            </div>
        </div>
    )
};

export default Source;
