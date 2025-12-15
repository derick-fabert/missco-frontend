import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="space-y-6">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <div className="space-y-4 text-base leading-relaxed sm:text-lg">
            <p className="font-semibold">
              Kenneth J. Bouckaert &amp; Mark Hammerschmidt 
            </p>
            <div>
              <p>P.O. Box 22466</p>
              <p>St. Louis, MO 63126</p>
            </div>
            <p className="font-medium">(314) 270-3184</p>
          </div>
        </section>

        <section className="mt-16 border-t border-black pt-10 md:mt-20 md:pt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed sm:text-lg">
              <p>
                Reach out with any questions about the Hi-Ball Switch Heater,
                order assistance, or replacement parts. Fill out the form and
                we’ll get back to you as soon as possible.
              </p>
              <p className="font-semibold">
                Prefer to call? (314) 270-3184
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

