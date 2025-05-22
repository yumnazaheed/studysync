import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Auth = () => {
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <>
      <div class="header-spacer"></div>
      <header class="header">
        <div class="container header-container">
          <div class="header-content">
            <a href="#top" class="logo">
              <i class="fas fa-graduation-cap"></i>
              <span class="logo-text">StudySync</span>
            </a>
            <nav class="main-nav">
              <ul>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#community" class="nav-link">Community</a></li>
                <li><a href="#faqs" class="nav-link">FAQs</a></li>
              </ul>
              <div class="hover-indicator"></div>
            </nav>
            <div class="auth-links">
              <button style={styles.signInButton} onClick={handleSignIn}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" style={styles.googleLogo} />
                Sign in with Google
               </button>
            </div>
            <button class="mobile-menu-btn">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <main>
          {/* Hero secton. */}
          <section id="top" class="hero">
              <div class="container">
                  <div class="hero-content">
                      <div class="hero-text">
                          <h1>
                              Meet, match, and thrive
                              <div class="hero-second-line">together at UNSW</div>
                          </h1>
                          <p>Connect with fellow students, form study groups, and build lasting friendships.</p>
                      </div>
                      <div class="hero-image">
                          {/* TODO: Placeholder for image. */}
                      </div>
                  </div>
                  <div class="scroll-arrow-container">
                      <a href="#about" class="scroll-arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                      </a>
                  </div>
              </div>
          </section>

          {/* Problem Section. */}
          <section id="about" class="problem">
              <div class="container">
                  <div class="problem-content">
                      <div class="problem-text">
                          <span class="badge">The Problem</span>
                          <h2>Breaking out of social bubbles</h2>
                          <p>Many UNSW students, especially internationals, struggle to break out of social bubbles and meet new people, even though they want to. It's easy to feel isolated.</p>
                      </div>
                      <div class="problem-cards">
                          <div class="card">
                              <i class="fas fa-users"></i>
                              <h3>Social Isolation</h3>
                              <p>Many students feel alone despite being surrounded by peers</p>
                          </div>
                          <div class="card">
                              <i class="fas fa-comments"></i>
                              <h3>Language Barriers</h3>
                              <p>International students face additional challenges connecting</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Solution section. */}
          <section id="solution" class="solution">
              <div class="container">
                  <div class="solution-content">
                      <div class="solution-steps">
                          <div class="step-box">
                              <div class="step">
                                  <div class="step-number">1</div>
                                  <h3>Sign Up</h3>
                              </div>
                              <p>Create your profile with your interests and study areas</p>
                              <div class="divider"></div>
                              <div class="step">
                                  <div class="step-number">2</div>
                                  <h3>Match</h3>
                              </div>
                              <p>Get matched with compatible study partners and friends</p>
                              <div class="divider"></div>
                              <div class="step">
                                  <div class="step-number">3</div>
                                  <h3>Connect</h3>
                              </div>
                              <p>Meet up on campus and form lasting connections</p>
                          </div>
                      </div>
                      <div class="solution-text">
                          <span class="badge">The Solution</span>
                          <h2>But making friends shouldn't be hard.</h2>
                          <p class="tagline">That's where we come in.</p>
                          <p>studysync makes it easy to connect with like-minded students, find study partners, and build a supportive community at UNSW.</p>
                          <a href="#signup" class="btn btn-primary btn-lg">Get Started</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* Community section. */}
          <section id="community" class="community">
              <div class="container">
                  <div class="community-content">
                      <div class="section-header">
                          <span class="badge">Join Our Community</span>
                          <h2>Connect with hundreds of UNSW students</h2>
                          <p>Whether you're looking for study partners, friends with similar interests, or just want to expand your social circle, studysync has you covered.</p>
                      </div>
                      <div class="feature-cards">
                          <div class="feature-card">
                              <div class="icon-circle">
                                  <i class="fas fa-graduation-cap"></i>
                              </div>
                              <h3>Study Groups</h3>
                              <p>Form study groups with students in your courses to ace your exams together</p>
                          </div>
                          <div class="feature-card">
                              <div class="icon-circle">
                                  <i class="fas fa-users"></i>
                              </div>
                              <h3>Social Events</h3>
                              <p>Join campus events and meetups organized through our platform</p>
                          </div>
                          <div class="feature-card">
                              <div class="icon-circle">
                                  <i class="fas fa-comments"></i>
                              </div>
                              <h3>Language Exchange</h3>
                              <p>Practice languages and help others learn yours in a supportive environment</p>
                          </div>
                      </div>
                      <a href="#signup" class="btn btn-primary btn-lg">Join Now</a>
                  </div>
              </div>
          </section>

          {/* FAQ section. */}
          <section id="faqs" class="faqs">
            <div class="container">
              <div class="faqs-content">
                <div class="section-header">
                  <span class="badge">FAQs</span>
                  <h2>Frequently Asked Questions</h2>
                  <p>Got questions? We've got answers.</p>
                </div>
                  <div class="faq-grid">
                    <div class="faq-card">
                      <h3>Is studysync only for UNSW students?</h3>
                      <p>Yes, studysync is exclusively for UNSW students. You'll need a valid UNSW email to sign up.</p>
                    </div>
                    <div class="faq-card">
                      <h3>How does the matching system work?</h3>
                      <p>Our algorithm matches you based on your courses, interests, study habits, and availability.</p>
                    </div>
                    <div class="faq-card">
                      <h3>Is studysync free to use?</h3>
                      <p>Yes, studysync is completely free for all UNSW students.</p>
                    </div>
                    <div class="faq-card">
                      <h3>How do I report inappropriate behavior?</h3>
                      <p>You can report any concerns through the app, and our moderation team will review them promptly.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA (Call to Action) section. */}
          <section class="cta">
            <div class="container">
              <div class="cta-content">
                <h2>Ready to connect?</h2>
                <p>Join hundreds of UNSW students already using studysync to make meaningful connections.</p>
                <a href="#signup" class="btn btn-secondary btn-lg">Sign Up Now</a>
              </div>
            </div>
          </section>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <i class="fas fa-graduation-cap"></i>
              <span>studysync</span>
            </div>
            <p class="copyright">© 2025 studysync. All rights reserved.</p>
            <div class="footer-links">
              <a href="#terms">Terms</a>
              <a href="#privacy">Privacy</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>


    // <div style={styles.container}>
    //   <div style={styles.card}>
    //     <h2 style={styles.title}>Welcome to StudySync</h2>
    //     <p style={styles.subtitle}>Sign in with your Google account to continue</p>
    //     <button style={styles.signInButton} onClick={handleSignIn}>
    //       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" style={styles.googleLogo} />
    //       Sign in with Google
    //     </button>
    //   </div>
    // </div>
  );
};

const styles = {
  // styles here
};

export default Auth;
