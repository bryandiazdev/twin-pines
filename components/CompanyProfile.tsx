// components/CompanyProfile.tsx
import React from 'react';
import styles from './CompanyProfile.module.css';

const CompanyProfile: React.FC = () => {
  return (
    <div className={styles.companyProfile}>
      <h2>About Us</h2>
      <p>
      For over a decade, Twin Pines Landscaping has been creating beautiful outdoor environments for our clients. Our designer's ability to create a master landscaping plan and carry that vision through the entire construction phase has helped us become one of the premier landscaping contractors in Mid-Michigan.

Our Chief Designer has over 11 years experience in both landscape design/construction and in residential construction. Such a broad knowledge base allows him to incorporate design ideas into your master landscaping plan that compliment your home's architecture and the overall elevation of your property. In fact, Twin Pines Landscaping is often called upon to coordinate the efforts of the excavating contractor, builder, and other various subcontractors.

Twin Pines Landscaping has formed strong working relationships with a group of specialized subcontractors who share our goals of providing quality workmanship, cost efficiency and timely execution. These relationships allow us to execute all aspects of any landscape design-build environment.

Business Philosophy 

From the start of our working relationship, Twin Pines Landscaping wants to understand your landscaping goals, your likes and dislikes, and any unique requirements or situations of your project. By incorporating this information into the development of a master landscaping plan, we can assure you a unique, yet comprehensive design you will be completely satisfied with for years to come.

      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default CompanyProfile;
