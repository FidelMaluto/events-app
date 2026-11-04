const EVENTS = [
  { img: "/img/1767353454810.jpg", title: "Novas Techs" },
  { img: "/img/1767353499302.jpg", title: "Novas Engenharias" },
];

const TEXT =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta, placeat necessitatibus itaque, accusamus corrupti nesciunt voluptates eveniet perspiciatis aliquam enim adipisci hic. Odit harum aspernatur, blanditiis beatae voluptatibus laboriosam!";

export default function Events() {
  return (
    <section className="events">
      <div className="title">
        <h1>UpComing Events</h1>
        <div className="line"></div>
      </div>

      <div className="row">
        {EVENTS.map((event) => (
          <div className="col" key={event.title}>
            <img src={event.img} />

            <h4>{event.title}</h4>
            <p>{TEXT}</p>
            <br />

            <a href="#" className="ctn">
              Ver mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
