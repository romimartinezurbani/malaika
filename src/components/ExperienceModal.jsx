import "../styles/ExperienceModal.css";

export default function ExperienceModal({ open, onClose, title, images = [] }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-full">

        {/* Header */}
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Contenido */}
        <div className="modal-scroll">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} ${index + 1}`}
              className="modal-image-full"
            />
          ))}
        </div>

        {/* WhatsApp sticky */}
        <div className="modal-whatsapp-sticky">
          <a
            href="https://wa.me/543584856527"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Consultar
          </a>
        </div>

      </div>
    </div>
  );
}

