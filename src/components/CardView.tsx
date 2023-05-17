interface Props {
  items: string[][];
}

const CardView = ({ items }: Props) => {
  return (
    <>
      <div className="CardsWrapper" id="CardsWrapper">
        {items.map((item) => (
          <div key={item[0]} className="card" id="card">
            <div className="card-body">
              <h5 className={"card-title"}>{item[0]}</h5>
              <img
                src={`/assets/images/${item[1]}`}
                className="card-img-top"
                id="card-img-top"
                alt={item[0] + " picture"}
              ></img>
              <br></br>
              <a
                href={`https://www.google.com/search?q=${item[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardView;
