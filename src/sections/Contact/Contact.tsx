import { ContactCard } from './ContactCard';
import { SocialLinks } from '../../components/SocialLinks';
import contact from '../../data/contact.json';
import type { Contact as ContactType } from '../../types/portfolio';

const contactData = contact as ContactType[];

/**
 * Contact section with contact cards and social links
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or just to say hi!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactData.map((item) => (
            <ContactCard key={item.id} contact={item} />
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect with me
          </h3>
          <SocialLinks className="justify-center" />
        </div>
      </div>
    </section>
  );
}
