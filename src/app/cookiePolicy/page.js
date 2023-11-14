import React from 'react';
import Link from 'next/link';

import LandingHeader from '@/components/Header/landingHeader';
import Footer from '@/components/Footer';
import ModalProvider from '@/contexts/modal/ModalContextProvider';

import styles from './page.module.scss';

export const metadata = {
  title: 'Cookie Policy - Planes Live',
  description: 'Explore our Cookie Policy to understand what cookies are, what types of cookies are placed on your device when you visit our website and how we use them.',
  colorScheme: 'light dark',
};

export default function Home() {
  return (
    <ModalProvider>
      <div className={`${styles.wrapper} landingBanners`}>
        <LandingHeader />
        <main className={styles.main}>
          <h1>Last Updated: November 23, 2022</h1>
          <div className={styles.content}>
            <p>
              Weather Content and Attribution, LLC is a subsidiary of Apalon LLC, hereinafter referred to as (&quot;Clime&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We have created this Cookie Policy to explain what cookies are, what types of cookies
              are placed on your device when you visit our website and how we use them. This Cookie Policy does not
              address how we deal with your personal information generally. To learn more about how we process your
              personal information, please see our
              <Link href="privacyPolicy">Privacy Policy</Link>
              .
            </p>
            <h4>WHAT ARE COOKIES</h4>
            <p>
              Cookies and other online tracking technologies are small bits of data or code that are used to identify
              your devices when you use and interact with our websites and other services. They are often used for
              remembering your preferences. A cookie also may contain information about your device, such as user
              settings, browsing history and activities conducted while using our website.
            </p>
            <p>
              Other technologies such as web beacons (also called pixel tags or clear gifs) or tracking URLs are used for
              similar purposes. Web beacons are tiny graphics files that contain a unique identifier that enable us to
              recognise when someone has visited our service or opened an e-mail that we have sent them. Tracking URLs are
              custom generated links that help us understand where the traffic to our webpages comes from.
            </p>
            <h4>OUR LEGAL BASIS FOR COOKIES AND SIMILAR TECHNOLOGIES</h4>
            <p>
              <strong>Placing cookies</strong>
              : We want to ensure that you are aware of the cookies, tags and other
              technologies placed on your browser or device. We do this by providing a clear notice in the form of this
              Policy that we only deploy
              {' '}
              <strong>strictly necessary cookies</strong>
              {' '}
              on our website.
            </p>
            <p>
              <strong>Using information collected from cookies</strong>
              : Where we want to use the information that
              cookies and similar technologies collect, we either obtain your consent or we maintain a legitimate interest
              in doing so.
            </p>
            <h4>WHAT COOKIES DO WE USE AND WHY?</h4>
            <p />
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      Category
                      of Cookie
                    </strong>
                  </td>
                  <td>
                    <strong>Purpose</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Strictly
                      <br />
                      Necessary
                      <br />
                      Cookies
                    </strong>
                  </td>
                  <td>
                    These cookies are necessary for the
                    website to function and cannot be switched off in our systems. They are usually only set in response to
                    actions made by you which amount to a request for services, such as setting your privacy preferences,
                    logging in or filling in forms. You can set your browser to block or alert you about these cookies, but
                    some parts of the site will not then work.
                  </td>
                </tr>
              </tbody>
            </table>
            <p />
            <h4>HOW WE USE COOKIES AND SIMILAR TECHNOLOGIES</h4>
            <p>
              <strong>Protect our networks</strong>
              : cookies and similar technologies help us identify and prevent
              threats to our sites. They are necessary to protect your information and our business from outside threats.
            </p>
            <p>
              <strong>Allow you to access our services</strong>
              : cookies and similar technologies permit your connection
              to our websites: our servers receive and record information about your computer, device, and browser,
              including potentially your IP address, browser type, other software or hardware information, and your
              geographic location.
            </p>
            <p>
              <strong>Access usage of services</strong>
              : we use information about your usage of our services and
              websites, such as the pages you have visited and content you have viewed to assess how our services are
              used. For more about how we use information see our
              {' '}
              <Link href="privacyPolicy">
                Privacy
                Policy
              </Link>
              .
            </p>
            <h4>COOKIE CONTROLS</h4>
            <p>
              Most modern browsers are set to accept cookies by default, but you can change your settings to notify you
              when a cookie is being set or updated, or to block cookies altogether. Please consult the &quot;Help&quot; section of
              your browser to learn more about this.
            </p>
            <h4>RETENTION OF PERSONAL INFORMATION</h4>
            <p>
              We will retain your information as set forth in our
              <Link href="privacyPolicy">
                Privacy
                Policy
              </Link>
              . If you ask us to delete your information before that time, we may not be able to do so due to
              legal, regulatory or contractual constraints. For example, we would need to retain your name and contact
              details for suppression purposes if you do not want to receive direct marketing from us.
            </p>
            <h4>CHANGES TO POLICY</h4>
            <p>
              From time to time we make changes to this Policy. This may be in relation to changes in the law, best
              practice, changes in our services or treatment of your personal information. Where necessary, we will notify
              you of these changes through a conspicuous notice on our website.
            </p>
            <h4>CONTACT US</h4>
            <p>
              You may contact us with questions, comments, or concerns about our services and this Policy or our privacy
              practices, or to request access to or correction of your information by submitting your requests or
              inquiries as detailed below:
            </p>
            <p>
              &bull; European users, please contact us
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/85ba16a2-9811-439f-a163-e40c176cbc14.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              &bull; California Residents, please contact us
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/d1a38f12-c4a3-412c-907a-4c1b2d5237f4.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              For users worldwide, our support team can be contacted
              <br />
              For Clime:
              {' '}
              <a href="mailto:support@climeradar.com">support@climeradar.com</a>
              <br />
              For Planes Live:
              <a href="mailto:support@planeslive.com">support@planeslive.com</a>
            </p>
            <h4>OR</h4>
            <p>
              Weather Content and Attribution, LLC
              <br />
              555 West 18th Street, New York, NY 10011
              <br />
              Attention: Privacy Officer/Legal Dept.
            </p>
            <p>END OF DOCUMENT.</p>
          </div>
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}
