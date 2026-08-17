import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA, Footer, Header, MobileBar, ServiceCards } from "../../components";
import { clinic, doctorBySlug, doctors } from "../../content";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doctor = doctorBySlug(params.slug);
  if (!doctor) {
    return {};
  }

  return {
    title: `${doctor.name} | ${doctor.role} в Бишкеке`,
    description: `${doctor.experience}. ${doctor.specialty}. Запись к врачу через WhatsApp.`,
    openGraph: {
      title: `${doctor.name} | ${doctor.role} в Бишкеке`,
      description: `${doctor.experience}. ${doctor.specialty}. Запись к врачу через WhatsApp.`,
      images: [{ url: doctor.photo }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doctor.name} | ${doctor.role} в Бишкеке`,
      description: `${doctor.experience}. ${doctor.specialty}. Запись к врачу через WhatsApp.`,
      images: [doctor.photo],
    },
  };
}

export default function DoctorPage({ params }: { params: { slug: string } }) {
  const doctor = doctorBySlug(params.slug);
  if (!doctor) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <span className="eyebrow">Врач</span>
          <h1>{doctor.name}</h1>
          <p>{doctor.role}, {doctor.experience}. {doctor.specialty}.</p>
          <div className="hero-actions">
            <a className="primary-button" href={clinic.whatsapp}>Записаться к врачу</a>
            <a className="ghost-button" href="/#doctors">Все врачи</a>
          </div>
        </section>
        <section className="section content-split">
          <img className="wide-photo" src={doctor.photo} alt={`Врач ${doctor.name}`} />
          <div className="content-panel">
            <h2>Подход к пациентам</h2>
            <p>Врач объясняет диагноз и план лечения человеческим языком, отвечает на вопросы и помогает выбрать понятный вариант без давления.</p>
            <h2>Образование и сертификаты</h2>
            <p>{doctor.education}</p>
            <h2>Отзывы</h2>
            <p>Здесь можно добавить реальные отзывы пациентов из 2ГИС, Google или внутренних анкет клиники.</p>
          </div>
        </section>
        <section className="section alt">
          <div className="section-heading">
            <span className="eyebrow">Услуги врача</span>
            <h2>Направления приема</h2>
          </div>
          <ServiceCards compact />
        </section>
        <CTA title={`Записаться к врачу ${doctor.name}`} />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
