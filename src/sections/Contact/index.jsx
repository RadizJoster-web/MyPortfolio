import Header from "./Header";
import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Header />
        {/* KOLOM KIRI: FORMULIR */}
        <div className="space-y-8">
          <Form />
        </div>
      </div>
    </section>
  );
}
