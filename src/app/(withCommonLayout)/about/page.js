import styles from './about.module.css';

export const metadata = {
  title: 'About Us',
  description: 'This is about us page',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className={styles.text_color}>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
