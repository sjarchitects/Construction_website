import React from 'react';
import '../../styles/Legal.css';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="legal-modal-close" onClick={onClose}>&times;</button>
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          {/* <p className="last-updated">Last Updated: January 3, 2026</p> */}

          <section>
            <h2>1. Introduction</h2>
            <p>IMPRIMIS Construction ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Postal address</li>
              <li>Project requirements and specifications</li>
              <li>Site location and property details</li>
              <li>Payment information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and manage construction services</li>
              <li>Process your inquiries and requests</li>
              <li>Communicate project updates and information</li>
              <li>Send invoices and process payments</li>
              <li>Improve our services and website</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Contractors, suppliers, and professionals involved in your project</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your information:</p>
            <ul>
              <li>Secure data storage systems</li>
              <li>Encrypted data transmission</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
            </ul>
            <p>However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain warranty and project records</li>
            </ul>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2>8. Cookies and Tracking</h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul>
              <li>Enhance user experience</li>
              <li>Analyze website traffic and usage</li>
              <li>Remember your preferences</li>
            </ul>
            <p>You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2>9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.</p>
          </section>

          <section>
            <h2>10. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2>11. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes by:</p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending email notifications for material changes</li>
            </ul>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices:</p>
            <p><strong>Email:</strong> imprimisbuilders@gmail.com</p>
            <p><strong>Phone:</strong> +91 8310751011 / +91 7483183724 / +91 9113588865</p>
            <p><strong>Address:</strong> 1st floor, sadha shivnagar, RG complex, BH Rd, Binnamangla, Sadashiva Nagara, Nagarur, Karnataka 562123</p>
          </section>

          <section>
            <h2>13. Consent</h2>
            <p>By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
