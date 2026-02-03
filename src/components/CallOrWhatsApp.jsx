import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
function CallOrWhatsApp({ phone = "+59894466583", className = "" }) {
  const { t } = useTranslation();
  const handleClick = (e) => {
    e.preventDefault();

    const ua = navigator.userAgent || "";
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);

    if (isMobile) {
      // En móvil, abrir el marcador
      window.location.href = `tel:${phone}`;
    } else {
      // En escritorio, abrir WhatsApp Web
      // wa.me redirige a WhatsApp Web en desktop y a la app en móvil
      window.open(
        `https://wa.me/${phone.replace(/\D/g, "")}`,
        "_blank",
        "noopener",
      );
    }
  };

  return (
    <a
      href={`tel:${phone}`} // fallback razonable si JS no carga
      onClick={handleClick}
      className={className}
      aria-label={`Contactar al ${phone} (móvil llama, escritorio abre WhatsApp)`}
    >
      <FaPhone className="text-xl mr-4 md:mr-0" />
      <span> {t("about.call_me")}</span>
    </a>
  );
}

export default CallOrWhatsApp;
