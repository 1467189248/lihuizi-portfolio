import { WorkGalleryItem } from "../../src/data/workGallery";

type WorkGalleryCardProps = {
  item: WorkGalleryItem;
  onOpen: (item: WorkGalleryItem) => void;
};

export function WorkGalleryCard({ item, onOpen }: WorkGalleryCardProps) {
  return (
    <button className="work-gallery-card" type="button" onClick={() => onOpen(item)}>
      <span className="work-gallery-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </span>
      <span className="work-gallery-meta">
        <small>{item.category}</small>
        <strong>{item.title}</strong>
        <em>{item.project}</em>
      </span>
    </button>
  );
}
