const GALLERY = [
  "/img/1767353207711.jpg",
  "/img/1767353234002.jpg",
  "/img/1767353248324.jpg",
  "/img/1767353216295.jpg",
];

export default function Group() {
  return (
    <section className="group">
      <div className="row">
        <div className="col content-col">
          <h4>Inovando as Engenharias com IAs</h4>

          <div className="line"></div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            soluta, placeat necessitatibus itaque, accusamus corrupti nesciunt
            voluptates eveniet perspiciatis aliquam enim adipisci hic. Odit
            harum aspernatur, blanditiis beatae voluptatibus laboriosam!
          </p>

          <a href="#" className="ctn">
            Ver mais
          </a>
        </div>

        <div className="col image-col">
          <div className="gallery">
            {GALLERY.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
