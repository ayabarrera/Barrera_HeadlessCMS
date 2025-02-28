import styles from './page.module.css';
import HeaderFooter from '../HeaderFooter';

export default function About() {
  return (
    <HeaderFooter>
    <div className={styles.pageStyle} id="aboutStyle">
      <style>
        {`
          @keyframes colorChange {
            0% {
              color: #A7D8D8; 
            }
            33% {
              color: #F5A7B8; 
            }
            66% {
              color: #F5D29A;
            }
            100% {
              color: #A7D8D8;
            }
          }
        `}
      </style>

      <section className={styles.sectionStyle} id="aboutSection">
        <div className={styles.textStyle}>
          <h1 className={styles.titleStyle}>Hi, I'm Aya!</h1>
          <p>
            I’m currently a second-year student in Website Design & Development
            at SAIT. My journey into this field comes after working in the
            kitchen for a while, but my passion for the arts has always driven
            me to pursue something beyond the culinary world.
          </p>

          <p>
            I’m also a huge animal lover with 3 cats and 2 dogs back home in the
            Philippines! When I’m not immersed in tech, you’ll find me outdoors
            (snowboarding, camping, or just being out there), traveling, trying
            new cuisines, or capturing moments through photography. In the past
            years I have been focusing on career growth but I am trying to take
            a step back and have been focusing on staying present and fully
            enjoying each experience.
          </p>

          <p>
            While what I do is still a work in progress, I’m excited to share it
            with you, and I hope you enjoy it as much as I do creating it!
          </p>
        </div>
      </section>
    </div>
    </HeaderFooter>
  );
}