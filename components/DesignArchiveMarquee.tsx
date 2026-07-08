import { designArchiveRows } from "../src/data/designArchive";

export function DesignArchiveMarquee() {
  return (
    <div className="slice-wall" aria-label="设计切片图片墙">
      {designArchiveRows.map((row, rowIndex) => (
        <div className={`slice-row ${rowIndex === 1 ? "is-reverse" : ""}`} key={`archive-row-${rowIndex}`}>
          {[...row, ...row].map((image, index) => (
            <figure className="slice-tile" key={`${image.src}-${rowIndex}-${index}`}>
              <img src={image.src} alt={image.title} loading="lazy" decoding="async" />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
