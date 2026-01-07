import React from 'react';
import '../../styles/Legal.css';

const TermsConditions = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="legal-modal-close" onClick={onClose}>&times;</button>
        <div className="legal-content">
          <h1>Terms and Conditions</h1>
          {/* <p className="last-updated">Last Updated: January 3, 2026</p> */}

          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to IMPRIMIS Construction. These Terms and Conditions govern your use of our services and website. By engaging with our construction services, you agree to these terms.</p>
          </section>

          <section>
            <h2>2. Services Offered</h2>
            <p>IMPRIMIS Construction provides:</p>
            <ul>
              <li>House Construction</li>
              <li>Building Construction</li>
              <li>Interior Design</li>
              <li>Renovation Services</li>
              <li>Project Planning and Management</li>
            </ul>
          </section>

          <section>
            <h2>3. Project Agreement</h2>
            <p>All construction projects require a formal written agreement that includes:</p>
            <ul>
              <li>Project scope and specifications</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and schedule</li>
              <li>Materials and quality standards</li>
              <li>Warranty and guarantee terms</li>
            </ul>
          </section>

          <section>
            <h2>4. Pricing and Payment</h2>
            <p>Package pricing starts from ₹1899/Sqft and may vary based on:</p>
            <ul>
              <li>Client requirements and customizations</li>
              <li>Location and site conditions</li>
              <li>Material selection and availability</li>
              <li>Project complexity and timeline</li>
            </ul>
            <p>Payment schedules will be outlined in individual project agreements.</p>
          </section>

          <section>
            <h2>5. Project Timeline</h2>
            <p>We strive to complete projects within agreed timelines. Delays may occur due to:</p>
            <ul>
              <li>Weather conditions</li>
              <li>Material availability</li>
              <li>Site conditions</li>
              <li>Client-requested changes</li>
              <li>Government regulations or permits</li>
            </ul>
          </section>

          <section>
            <h2>6. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate site information</li>
              <li>Obtaining necessary approvals and permits</li>
              <li>Timely payment as per agreement</li>
              <li>Clear communication of requirements</li>
              <li>Site access for construction activities</li>
            </ul>
          </section>

          <section>
            <h2>7. Changes and Modifications</h2>
            <p>Any changes to the original project scope must be:</p>
            <ul>
              <li>Requested in writing</li>
              <li>Reviewed for feasibility</li>
              <li>Quoted for additional costs</li>
              <li>Approved by both parties</li>
            </ul>
          </section>

          <section>
            <h2>8. Quality Assurance</h2>
            <p>We ensure quality through:</p>
            <ul>
              <li>Use of approved materials</li>
              <li>Skilled and experienced workforce</li>
              <li>Regular quality inspections</li>
              <li>Compliance with building codes</li>
            </ul>
          </section>

          <section>
            <h2>9. Warranty</h2>
            <p>We provide warranty coverage on:</p>
            <ul>
              <li>Structural work as per industry standards</li>
              <li>Workmanship quality</li>
              <li>Materials used (subject to manufacturer warranty)</li>
            </ul>
            <p>Specific warranty terms will be detailed in individual project agreements.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>IMPRIMIS Construction is not liable for:</p>
            <ul>
              <li>Delays due to force majeure events</li>
              <li>Damage caused by client-supplied materials</li>
              <li>Issues arising from inaccurate client information</li>
              <li>Third-party services or materials</li>
            </ul>
          </section>

          <section>
            <h2>11. Dispute Resolution</h2>
            <p>Any disputes will be resolved through:</p>
            <ul>
              <li>Direct negotiation between parties</li>
              <li>Mediation if negotiation fails</li>
              <li>Arbitration as per Indian Arbitration and Conciliation Act</li>
            </ul>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>For any questions regarding these terms:</p>
            <p>Email: imprimisbuilders@gmail.com</p>
            <p>Phone: +91 8310751011 / +91 7483183724 / +91 9113588865</p>
            <p>Address: 1st floor, sadha shivnagar, RG complex, BH Rd, Binnamangla, Sadashiva Nagara, Nagarur, Karnataka 562123</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
