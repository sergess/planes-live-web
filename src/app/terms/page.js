import React from 'react';
import Link from 'next/link';

import LandingHeader from '@/components/Header/landingHeader';
import Footer from '@/components/Footer';
import ModalProvider from '@/contexts/modal/ModalContextProvider';

import styles from './page.module.scss';

export const metadata = {
  title: 'Terms of Service - Planes Live',
  description: 'These Terms explain the rules for using our website. By using the website, you confirm that you accept these Terms and that you agree to comply with them.',
  colorScheme: 'light dark',
};

export default function Home() {
  return (
    <ModalProvider>
      <div className={`${styles.wrapper} landingBanners`}>
        <LandingHeader />
        <main className={styles.main}>
          <p>
            Read the Privacy Policy
            {' '}
            <Link href="privacyPolicy">here</Link>
            .
          </p>
          <h1>Last Updated: November 11, 2022</h1>
          <div className={styles.content}>
            <p>
              These Terms of Service (the &quot;Terms&quot;) govern your access to and use of the services provided by
              Clime
              Weather Services, LLC (&quot;Clime Weather&quot;), a subsidiary of Apalon LLC (&quot;Apalon&quot; and
              together with Clime
              Weather, &quot;Clime&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), including its mobile
              applications, websites, email notifications,
              and any and all related services (collectively the &quot;Services&quot;). These Terms also govern your
              access to any
              information, text, graphics, photos, audio, video or other materials made available through the Services
              (the &quot;Content&quot;). PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE ACCESSING OR USING ANY OF
              THE
              SERVICES.
            </p>
            <h4>CONTENTS</h4>
            <div className={styles.menu}>
              <a href="#a">A. AGREEMENT</a>
              <a href="#b">B. AGE REQUIREMENT</a>
              <a href="#c">C. GRANT OF LICENSE</a>
              <a href="#d">D. DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS</a>
              <a href="#d1" className={styles.indent}>1. Restricted Use</a>
              <a href="#d2" className={styles.indent}>2. Apps Updates</a>
              <a href="#d3" className={styles.indent}>3. Access</a>
              <a href="#d4" className={styles.indent}>4. Purchases &amp; Cancellation Rights</a>
              <a href="#da" className={styles.doubleindent}>(A). Subscriptions.</a>
              <a href="#db" className={styles.doubleindent}>(B). Paid Applications</a>
              <a href="#d5" className={styles.indent}>5. Automatic Renewal</a>
              <a href="#e">E. FEATURES &amp; FUNCTIONALITY</a>
              <a href="#f">F. CONTENT on the SERVICES:</a>
              <a href="#f1" className={styles.indent}>1. User Content.</a>
              <a href="#f2" className={styles.indent}>2. Content Screening and Disclosure</a>
              <a href="#f3" className={styles.indent}>3. Third-Party Services and Content</a>
              <a href="#g">G. SECURITY</a>
              <a href="#h">H. REGISTRATION/PASSWORDS</a>
              <a href="#h1" className={styles.indent}>1. Registration.</a>
              <a href="#h2" className={styles.indent}>2. Passwords.</a>
              <a href="#h3" className={styles.indent}>3. Provided Information.</a>
              <a href="#i">I. UNINSTALL/REMOVAL OF AN APP</a>
              <a href="#j">J. CONSENT TO USE OF DATA AND USER REVIEWS</a>
              <a href="#k">K. INTELLECTUAL PROPERTY</a>
              <a href="#l">L. COPYRIGHT</a>
              <a href="#l1" className={styles.indent}>1. Copyright/Submissions.</a>
              <a href="#m">M. TERMINATION</a>
              <a href="#n">N. DISCLAIMER OF WARRANTY</a>
              <a href="#o">O. LIMITATION OF LIABILITY</a>
              <a href="#p">P. INDEMNIFICATION</a>
              <a href="#q">Q. EXPORT CONTROLS</a>
              <a href="#r">R. NOTICE TO US GOVERNMENT END USERS</a>
              <a href="#s">S. JURISDICTIONAL AVAILABILITY</a>
              <a href="#t">T. DISPUTE RESOLUTION AND OTHER MISCELLANEOUS TERMS</a>
              <a href="#u">U. HOW TO CONTACT US.</a>
              <a href="#v">V. SUPPLEMENTAL TERMS</a>
              <a href="#v1" className={styles.indent}>1. Weather Content and Attribution.</a>
              <a href="#v2" className={styles.indent}>2. Third Party Content or Images.</a>
              <a href="#v3" className={styles.indent}>3. Youtube.</a>
              <a href="#v4" className={styles.indent}>4. Apple App Store.</a>
              <a href="#v5" className={styles.indent}>5. Windows Phone Store</a>
            </div>
            <h4 id="a">
              A. AGREEMENT:
            </h4>
            <p>
              These Terms are a legal agreement between you and Clime. By using the Services, including installing
              and/or
              downloading any of our mobile applications (each an &quot;App&quot; and collectively
              the &quot;Apps&quot;), you: (a) agree to be
              bound by these Terms, (b) you represent and warrant that you have the right, authority and capacity to
              enter
              into these Terms just as if you had signed it; and (c) if you are accessing the Services through one of
              our
              Apps on a mobile device, you own or control such mobile device. These Terms also apply to any App updates,
              supplements, and services made available by Clime that are not provided under a separate license or other
              agreement with us.
              <strong>
                If you do not agree to these Terms, do not install or use any App or
                Services.
              </strong>
              {' '}
              We may amend these Terms from time to time and will notify you of any update to the
              Terms that materially impact your use of the Services or your rights or obligations. Such notification may
              be through an in-app notification or website notice. Your continued use of the Services after we post any
              amendments to these Terms will signify your acceptance of such amendments.
              <strong>
                If you do not agree with
                any amendment, you must discontinue using the Services (including any Apps).
              </strong>
              {' '}
              If you have any
              questions or concerns regarding these Terms, please contact support at the email provided in Section U
              below. Do not use the Services until your questions and concerns have been answered to your satisfaction
              and
              you agree to abide by these Terms.
            </p>
            <p>
              <strong>Notice to consumers</strong>
              : Depending on the laws of the jurisdiction where you live, you may
              have certain rights that are in addition to these Terms, and certain provisions of these Terms may be
              unenforceable as to you. To the extent that any term or condition of these Terms is unenforceable to you,
              the remainder of these Terms shall remain in full force and effect.
            </p>
            <p>
              Use of the Services is subject to our
              {' '}
              <Link href="privacyPolicy">Privacy Policy</Link>
              ,
              which is hereby incorporated into these Terms by reference. These Terms also include any additional
              payment
              terms and other requirements set forth on the download or purchase page through which you purchase or
              download any Apps. The Apps may be available through marketplaces that distribute mobile applications and
              that may have additional terms, conditions and usage rules that govern your use of the Apps if you
              download
              or install the Apps through such marketplaces.
            </p>
            <h4 id="b">
              B. AGE REQUIREMENT
            </h4>
            <p>
              <strong>You must be 13 years of age (or 16 in the EEA) or older to install or to use the Apps.</strong>
            </p>
            <h4 id="c">
              C. GRANT OF LICENSE
            </h4>
            <p>
              Subject to your compliance with these Terms, Clime grants you a limited, non-exclusive, revocable,
              non-sublicensable, non-transferable license, to access, download and/or install the most current generally
              available version of the software provided to you as part of the Services solely for your lawful,
              personal,
              and non-commercial use.
            </p>
            <h4 id="d">
              D. DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS
            </h4>
            <p>
              <strong id="d1">
                1. Restricted Use.
              </strong>
              {' '}
              You may not rent, sell, lease, sublicense, distribute,
              assign, copy (other than a single copy for your own backup purposes), or in any way transfer or grant any
              rights to the Services or use the Services for the benefit of any third party. Unless expressly authorized
              by Clime, you are prohibited from making the Apps available over a network where it could be downloaded or
              used by multiple users. You agree that you will not use any robot, spider, other automatic or manual
              device
              or process to interfere or attempt to interfere with the proper working of the Services, except to remove
              our Apps from a mobile device which you own or control. You may not violate or attempt to violate the
              security of our Services. You may not modify, reverse-engineer, decompile, disassemble, or otherwise
              tamper
              with any Services, or attempt to do so for any reason or by any means. You may not access, create or
              modify
              the source code of any Services in any way. You do not have the right to and may not create derivative
              works
              of any Services or any portions thereof. All modifications or enhancements to the Services remain the sole
              property of Clime.
            </p>
            <p>
              <strong id="d2">
                2. Updates
              </strong>
              {' '}
              We reserve the right to add or remove features or functions to
              existing Services. When installed on your mobile device, the Apps periodically communicate with our
              servers.
              We may require the updating of the Apps on your mobile device when we release a new version of the Apps,
              or
              when we make new features available. This update may occur automatically or upon prior notice to you, and
              may occur all at once or over multiple sessions. You understand that we may require your review and
              acceptance of our then-current Terms before you will be permitted to use any updated versions of the
              Services. You acknowledge and agree that any obligation we may have to support previous versions of the
              Services may be ended upon the availability of updates, supplements or subsequent versions. You
              acknowledge
              and agree that we have no obligation to make available to you any updates, supplements or updated versions
              of the Services.
            </p>
            <p>
              <strong id="d3">
                3. Access
              </strong>
              {' '}
              You must provide at your own expense the equipment, Internet
              connections, devices and service plans to access and use the Apps. If you access an App through a mobile
              network, your network or roaming provider&apos;s messaging, data and other rates and fees may apply. You are
              solely responsible for any costs you incur to access the Apps from your device. Downloading, installing or
              using certain Apps may be prohibited or restricted by your network provider and not all Apps may work with
              your network provider or device. Clime makes no representation that the Apps can be accessed on all
              devices
              or wireless service plans. Clime makes no representation that the Apps are available in all languages or
              that the Apps are appropriate or available for use in any particular location.
            </p>
            <strong id="d4">
              4. Purchases &amp; Cancellation Rights.
            </strong>
            <br />
            <br />
            <p id="da">
              (A). Subscriptions.
            </p>
            <p>
              You may purchase certain Services on a subscription basis. Some Services may offer different subscription
              levels (usually free or premium) or subscribption periods (e.g., monthly, yearly, etc.). Payment for a
              subscription may be processed in-App, through a third party mobile platform owner (e.g. Apple or Google)
              or directly through Clime and its third party payment processor.
            </p>
            <p>
              You may be offered a free trial of a subscription to our Services for a limited period of time. You are
              free to cancel a free-trial subscription at any time via the subscription setting in your iTunes or
              Android account, or if you went through one of our websites, by logging in on the applicable website to
              manage your subscriptions.
              <strong>
                Please note: your free-trial subscription will automatically renew as a
                paid subscription for the applicable subscription period unless you cancel at least 24 hours before the
                end of the free-trial subscription period or, if you purchased through Google, before the end of the
                trial period.
              </strong>
            </p>
            <p>
              If you subscribed for our Services by purchasing and installing an App through a third party mobile
              platform owner (either through the third party platform or in-app), you may cancel your subscription at
              any time by following the Apple App Store or Google Play Store instructions or via the subscription
              settings in your iTunes or Android account.
            </p>
            <p>
              If you subscribed for our Services directly through our website, you may cancel your subscription at any
              time by logging in to manage your subscriptions on the applicable website.
            </p>
            <p>
              All cancellations will take effect starting at the end of the then current billing period. For example,
              if you have a monthly subscription that began on the first of the month but cancel mid-month, your
              cancellation will be effective as of the end of that month. Sorry, there are no refunds on subscriptions
              once the charge has gone through for the billing period.
            </p>
            <p id="db">
              (B) Paid Applications
            </p>
            <p>
              Certain Apps are available for one-time purchase (no recurring subscription) through either the Apple App
              or Google Play store. European Union residents normally have a right to cancel online purchases within 14
              days of making them.
              <strong>
                Please note and acknowledge: if you are resident in the European Union and
                purchase an App from a mobile platform owner (e.g. Apple or Google), you may not be able to cancel your
                order or obtain a refund. Please review the mobile platform owner&apos;s terms in this regard before
                purchase.
              </strong>
            </p>
            <p>
              You may uninstall paid applications at any time at your discretion. All purchases of paid applications
              are non-refundable.
            </p>
            <p>
              <strong id="d4">
                5. Automatic Renewal; Recurring Charges.
              </strong>
              {' '}
              Paid subscriptions to the
              Services are auto-renewing. You will be charged the stated subscription amount for the subscription period
              upon completion of your registration and submission of your payment information or, if applicable, at the
              end of your free trial period if you have not canceled at least 24 hours in advance of the expiration of
              the trial period. You hereby agree to and authorize automatic and recurring billing, and you agree to pay
              the charges made to your account in connection therewith. You will be billed on a recurring basis at the
              then-current applicable subscription price plus any applicable taxes at the start of each new subscription
              period. Payments for renewal subscriptions are processed using the same billing cycle as your current
              subscription. Subscription fees may change at any time, to the fullest extent permitted under applicable
              law. Your subscription, and monthly billing of your account, will continue indefinitely until cancelled by
              you in accordance with the Cancellation section of this Agreement.
            </p>
            <h4 id="e">
              E. FEATURES &amp; FUNCTIONALITY
            </h4>
            <p>
              The various features and functionalities made available through the Services may change from time to time
              and are provided by Clime and third party suppliers (the &quot;
              <strong>Third Party Partners</strong>
              &quot;) who
              offer Content and/or services in conjunction with or through the Services and other users who may share
              Content on through their use of the Services. The Services may provide you with location data for basic
              navigational purposes only and are not intended to be relied upon in situations where precise location
              information is needed or where erroneous, inaccurate or incomplete location data may lead to death,
              personal injury, property or environmental damage. Neither Clime, nor any of its Third Party Partners,
              guarantee the availability, accuracy, completeness, reliability, or timeliness of location data displayed
              through the Services.
            </p>
            <h4 id="f">
              F. CONTENT ON THE SERVICES:
            </h4>
            <p>
              <strong id="f1">
                1. User Content.
              </strong>
              {' '}
              The Apps may allow users to submit and post Content
              that will be made public and available to other App users (&quot;User Content&quot;). You are responsible
              for your
              use of the Services and for any User Content you provide, including compliance with applicable laws,
              rules, and regulations. You should only provide User Content that you are comfortable sharing with others.
              Clime may also act to remove Objectionable Content. The decision to remove Objectionable Content shall be
              made at Clime&apos;s sole discretion. Clime may terminate a user&apos;s access to the Services if, under appropriate
              circumstances, the user is determined to be a repeat infringer.
            </p>
            <p>
              You agree that you shall not post or share User Content on the Services that Clime deems Objectionable
              Content. &quot;Objectionable Content&quot; includes, but it not limited to: 1. Is commercial in nature
              (including
              advertising or solicitations); 2. Infringes the intellectual property rights of others; 3. Is unlawful,
              defamatory, libelous or infringes the privacy rights of others; 4. Presents a risk to a person&apos;s security,
              health or safety, including minors; 5.Entices criminal or unlawful behavior; 6. falsely states or implies
              that such User Content is endorsed or sponsored by Clime or any of its Third Party Partners; 7. Is vulgar,
              threatening, or considered hate speech intended to offend or harass individuals or a group of individuals
              based on race, ethnicity, national origin, disability, religious affiliation, sexual orientation, sex, or
              gender identity; 9. contains software viruses or any other computer code, files or programs designed to
              interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications
              equipment and 10. is otherwise in contravention of these Terms.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights in and to the Content that you post,
              including the right to post or share the User Content publicly through the Services and to permit Clime to
              publish and use such User Content as contemplated by these Terms. By submitting User Content to Clime you
              are hereby granting Clime and its users an irrevocable, worldwide, perpetual, royalty-free, non-exclusive,
              sub-licensable and transferrable license to copy, distribute, use, print, publish, republish, reformat,
              translate, modify, revise and incorporate into other works, prepare derivative works of and display in
              public in the Apps or in any form of media or expression. The User Content you submit to Clime may be used
              by Clime commercially at Clime&apos;s sole discretion.
              <br />
              Clime makes no representations about the User Content that you or any user shares through the Services.
              You are responsible for obtaining all necessary permissions and rights before using any User Content not
              posted by you. You agree to accept all risks associated with the use of any User Content, including any
              reliance on the accuracy or completeness of such User Content. Under no circumstances will Clime be liable
              in any way for any User Content including, but not limited to, any errors or omissions in any such User
              Content, or for loss or damage of any kind incurred as a result of the transmission or posting of such
              User Content through the Services.
            </p>
            <p>
              <strong id="f2">
                2. Content Screening and Disclosure.
              </strong>
              {' '}
              We do not, and cannot, pre-screen
              or monitor all Content. However, our representatives may monitor Content submission through the Apps, and
              you hereby provide your irrevocable consent to such monitoring. You acknowledge and agree that you have no
              expectation of privacy concerning the submission of any Content. We have the right, but not the
              obligation, in our sole discretion to edit, refuse to post, or remove any Content.
              <br />
              We may access, preserve or disclose any of your information or Content (including without limitation chat
              text) if we are required to do so by law, or if we believe in good faith that it is reasonably necessary
              to (i) respond to claims asserted against us or to comply with legal process (for example, subpoenas or
              warrants), including those issued by courts having jurisdiction over us or you; (ii) enforce or administer
              our agreements with users, such as these Terms; (iii) for fraud prevention, risk assessment,
              investigation, customer support, providing the app services or engineering support; (iv) protect the
              rights, property or safety of Clime, its users, or members of the public or (v) to report a crime or other
              offensive behavior.
            </p>
            <p>
              <strong id="f3">
                3. Third-Party Services and Content.
              </strong>
              {' '}
              The Services may integrate, be
              integrated into, bundled, or be provided in connection with third-party services, advertising, feeds,
              and/or content. If you are installing an App that includes third party services and third party content,
              such services and content are subject to such third party&apos;s terms of services and privacy policies, which
              may be found on the relevant Third Party Partner&apos;s website. Our Services may provide access or links to
              Third Party Partner websites or resources. Clime has no control over such websites and resources, and you
              acknowledge and agree that Clime is not responsible for the availability of such external websites or
              resources, and does not endorse nor is responsible or liable for any content, advertising, products, or
              other materials on or available from such websites or resources. You further acknowledge and agree that
              Clime shall not be responsible or liable, directly or indirectly, for any Third Party Partner Content,
              including any damage or loss caused or alleged to be caused by or in connection with use of or reliance on
              any Third Party Partner content, goods or services available on or through the Services or any such Third
              Party Partner website or resource. Clime will not be a party to or in any way be responsible for
              monitoring any transaction between you and Third Party Partners.
            </p>
            <h4 id="g">
              G. SECURITY
            </h4>
            <p>
              The Services, like other consumer technologies, may not be 100% secure. By accepting these Terms you
              acknowledge and accept that the Services may be exposed to unauthorized access, interception, corruption,
              damage or misuse, and cannot be regarded as 100% secure. You accept all responsibility for such security
              risks and any damage resulting therefrom. Further, you are solely responsible for securing any device used
              to access the Services from unauthorized access, including by such means as using complex password
              protection and enabling device encryption when available through settings on your device. You agree that
              Clime shall not be liable for any unauthorized access to your account or devices.
            </p>
            <h4 id="h">
              H. REGISTRATION/PASSWORDS
            </h4>
            <p>
              <strong id="h1">
                1. Registration.
              </strong>
              {' '}
              Some Services may not require a registration: however,
              some Services will permit or require you to create an account to participate or access additional features
              or functionalities (&quot;
              <strong>Registration</strong>
              &quot;). If such Registration is required, it will be made
              known to you when you attempt to participate or access such additional features or functionalities. Any
              registration required by a Third Party Partner is not governed by these Terms and you should refer to the
              relevant Third Party Partner&apos;s website for their policies.
            </p>
            <p>
              <strong id="h2">
                2. Passwords.
              </strong>
              {' '}
              You are the sole and exclusive guardian of any password
              and ID combination issued or chosen by to you. Maintaining the confidentiality and security of your
              password(s) and ID(s) is solely your responsibility. You are fully responsible for all transactions
              undertaken by means of any account opened, held, accessed or used via your password and ID. You shall
              notify us immediately and confirm in writing any unauthorized use of accounts or any breach of security,
              including without limitation any loss, theft or unauthorized use of your password(s), and/or ID(s) or any
              related account. If we have reasonable grounds to suspect that the security of your password and/or ID has
              been compromised, we may suspend or terminate your account, refuse any and all current or future use of
              the services, and pursue any appropriate legal remedies. We shall not be responsible for any losses
              incurred in connection with any misuse of any password or ID.
            </p>
            <p>
              <strong id="h3">
                3. Provided Information.
              </strong>
              {' '}
              If you provide any information in connection
              with a Registration, you must provide and maintain accurate, complete and current information. If we have
              reasonable grounds to suspect that your information is inaccurate, not current or not complete, we may
              suspend or terminate your use of the Services, and pursue any appropriate legal remedies. You agree that
              we shall have the right to use the information you provide to us for the purposes described in these Terms
              and in furtherance of your use of the App our services, in accordance with the Privacy Policy located
              {' '}
              <Link href="privacyPolicy">here</Link>
              .
            </p>
            <h4 id="i">
              I. UNINSTALL/REMOVAL OF AN APP
            </h4>
            <p>
              Uninstallation and removal methods vary depending on your device. To uninstall and remove the Apps,
              please use the application manager provided with your device or consult your device manual for reference.
              Please remember if you have a paid subscription to an App, uninstalling will not cancel your recurring
              payments. See our cancellation instructions above for more information.
            </p>
            <h4 id="j">
              J. CONSENT TO USE OF DATA AND USER REVIEWS
            </h4>
            <p>
              You agree that we may collect and use technical data and related information, including but not limited
              to technical information about your device, system and application software, and peripherals, that is
              gathered periodically to facilitate the provision of software updates, product support and other services
              to you (if any) related to the Services. We may use this information in accordance with the Privacy Policy
              located
              {' '}
              <Link href="privacyPolicy">here</Link>
              .
            </p>
            <p>
              Additionally, if you choose to provide app store reviews or reviews via any social medial channel, or
              other similar communication or messaging features or services, such information may be made publicly
              available, including the public-facing username as it appears with the review. If you prefer that we do
              not use your app reviews for promotional purposes, you will be able to elect for us not to do so by
              contacting the support email in Section U below (please include your name, mailing address, and email
              address). For security purposes, please do not include any password, social security number, payment card
              or other sensitive information via these features. We have the right, but not the obligation to monitor
              messages and communications between and among users for security and training purposes. We may, but are
              not obligated to, remove any content we deem inappropriate.
            </p>
            <h4 id="k">
              K. INTELLECTUAL PROPERTY
            </h4>
            <p>
              The Services, including all Content, design, text, images, photographs, illustrations, audio-clips,
              video-clips, artwork, graphic material, code, content, protocols, software, and documentation provided to
              you by Clime are Clime&apos;s property or the property of Clime&apos;s licensors, and are protected by U.S. and
              international copyright, trademarks, patents and other proprietary rights and laws relating to
              Intellectual Property Rights. &quot;
              <strong>Intellectual Property Rights</strong>
              &quot; means, collectively, rights
              under patent, trademark, copyright and trade secret laws, and any other intellectual property or
              proprietary rights recognized in any country or jurisdiction worldwide, including, without limitation,
              moral or similar rights. You may not delete, alter, or remove any copyright, trademark, or other
              proprietary rights notice we or Third Party Partners have placed on or within the Services. All rights not
              expressly granted hereunder are expressly reserved to Clime and its licensors.
            </p>
            <p>
              Clime and Clime names, logos and affiliated properties, are the exclusive property of Clime or its
              affiliates. All other trademarks appearing through the Services, including in any App, are trademarks of
              their respective owners, and the use of such trademarks shall inure to the benefit of the trademark owner.
              Our partners or service providers may also have additional proprietary rights in the content which they
              make available through an Services. The trade names, trademarks and service marks owned by us, whether
              registered or unregistered, may not be used in connection with any product or service that is not ours, in
              any manner that is likely to cause confusion. Nothing contained in herein should be construed as granting,
              by implication, estoppel or otherwise, any license or right to use any of our trade names, trademarks or
              service marks without our express prior written consent.
            </p>
            <h4 id="l">
              L. COPYRIGHT
            </h4>
            <p>
              <strong id="l1">
                1. Copyright/Submissions.
              </strong>
              {' '}
              You are solely responsible for any Content
              you contribute, submit, display or for any adaptations of works made on or through your use of the App(s).
              It is your obligation to ensure that such Content, including photos, text, video and music files, does not
              violate any copyright or other Intellectual Property Rights. You must either own or have a license to use
              any Content that you contribute, submit or display.
            </p>
            <p>
              Clime respects and expects its users to respect the rights of copyright holders. On notice, Clime will
              act appropriately to remove content that infringes the copyright rights of others. Clime reserves the
              right to disable the access to Apps or other services by anyone who uses them to repeatedly infringe the
              Intellectual Property Rights of others. If you believe an App, or elements, infringe your copyright
              rights, Please contact Clime&apos;s Copyright Agent at:
            </p>
            <p>
              Clime Weather Services, LLC
              <br />
              555 West 18th Street,
              <br />
              New York, NY 10011
              <br />
              Attn: Copyright Agent/ Legal Dept.
              <br />
              Email:
              {' '}
              <a href="mailto:dmca@mosaic.co">dmca@mosaic.co</a>
              <br />
              For other support please see Section U below.
            </p>
            <p>Please ensure your communication includes the following:</p>
            <br />
            <ul className="list disc-type">
              <li>
                an electronic or physical signature of the person authorized to act on behalf of the owner of the
                copyright interest;
              </li>
              <li>a description of the copyrighted work that you claim has been infringed;</li>
              <li>a description of where the material that you claim is infringing is located on the App;</li>
              <li>your address, telephone number, and email address;</li>
              <li>
                a statement by you that you have a good faith belief that the disputed use is not authorized by the
                copyright owner, its agent, or the law;
              </li>
              <li>
                a statement by you that the above information in your notice is accurate and that you are the
                copyright owner or authorized to act on the copyright owner&apos;s behalf.
              </li>
            </ul>
            <br />
            <h4 id="m">
              M. TERMINATION
            </h4>
            <p>
              Your rights under these Terms will terminate immediately and automatically without any notice from Clime
              if you fail to comply with any of the terms and conditions of these Terms. You understand that Clime, in
              its sole discretion, may modify or discontinue or suspend your right to access any of our services or use
              of any Services at any time. Further, Clime, with or without any reason, may at any time suspend or
              terminate any license hereunder and disable the Services, including any Apps or any of the component
              features of the Services. You agree that Clime shall not be liable to you or any third-party for any
              termination or disabling of the Services. Promptly upon expiration or termination of these Terms, you must
              cease all use of the Services and destroy all copies of the Services, including any Apps in your
              possession or control. Termination will not limit any of Clime&apos;s other rights or remedies at law or in
              equity. Sections J-S, and any Supplemental Terms of these Terms shall survive termination or expiration of
              these Terms for any reason.
            </p>
            <h4 id="n">
              N. DISCLAIMER OF WARRANTY
            </h4>
            <p>
              TO THE EXTENT PERMITTED BY APPLICABLE LAW, ALL SERVICES ARE PROVIDED ON AN &quot;
              <strong>AS IS,</strong>
              &quot;
              &quot;WITH ALL FAULTS,&quot; AND &quot;
              <strong>AS AVAILABLE</strong>
              &quot; BASIS, AND YOU USE THEM AT YOUR SOLE RISK. SUBJECT
              TO APPLICABLE LAW, CLIME, ON BEHALF OF ITSELF, AND ITS PARENT, AFFILIATES, LICENSORS, DISTRIBUTORS,
              VENDORS, AGENTS AND SUPPLIERS, EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, NON-INFRINGEMENT, AND ANY OTHER WARRANTY ARISING UNDER THE SALE OF GOODS ACTS 1893 AND 1980,
              USAGE OF TRADE, COURSE OF CONDUCT OR OTHERWISE. WITHOUT LIMITATION, CLIME MAKES NO WARRANTY THAT THE
              SERVICES WILL MEET YOUR REQUIREMENTS, THAT THEY WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, THAT
              THE RESULTS OBTAINED FROM THE USE OF THE CLIME PRODUCTS AND SERVICES WILL BE ACCURATE OR RELIABLE, OR THAT
              THE QUALITY OF THE APPS WILL MEET YOUR EXPECTATIONS. CLIME ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY
              PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES; ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
              FINANCIAL INFORMATION STORED THEREIN; ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR
              SERVICES OR SERVERS; ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH
              THE SERVICES BY ANY THIRD PARTY; OR ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF
              ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE
              AVAILABLE VIA THE SERVICES.
            </p>
            <p>
              THE ENTIRE RISK ARISING OUT OF USE OR PERFORMANCE OF THE SERVICES REMAINS SOLELY WITH YOU. CLIME
              EXPRESSLY DISCLAIMS ALL WARRANTIES RELATING TO PRODUCTS AND/OR SERVICES PROVIDED BY THIRD PARTY
              PARTNERS.SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES. IN SUCH JURISDICTIONS, THE
              FOREGOING DISCLAIMERS MAY NOT APPLY TO YOU INSOFAR AS THEY RELATE TO IMPLIED WARRANTIES.THIS DISCLAIMER OF
              WARRANTY CONSTITUTES AN ESSENTIAL PART OF THIS AGREEMENT.
            </p>
            <h4 id="o">
              O. LIMITATION OF LIABILITY
            </h4>
            <p>
              TO THE EXTENT PERMITTED BY APPLICABLE LAWS, YOU EXPRESSLY UNDERSTAND AND AGREE THAT CLIME AND ITS
              PARENTS, AFFILIATES AND THIRD PARTY PARTNERS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS,
              GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF CLIME HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES), RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE SERVICES; (II) UNAUTHORIZED ACCESS TO OR
              ALTERATION OF YOUR TRANSMISSIONS OR DATA; (III) STATEMENTS OR CONDUCT OF ANY THIRD PARTY; OR (IV) ANY
              OTHER MATTER RELATING TO THE SERVICES. IN NO EVENT SHALL CLIME&apos;S TOTAL LIABILITY TO YOU FOR ALL DAMAGES,
              LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE), OR
              OTHERWISE) EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING THE SERVICES. THE FOREGOING LIMITATIONS
              WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </p>
            <p>
              IF ANY OF THE EXCLUSIONS SET FORTH IN THIS SECTION IS DETERMINED BY A COURT OF COMPETENT JURISDICTION TO
              BE UNENFORCEABLE, THEN ALL SUCH EXPRESS, IMPLIED AND STATUTORY WARRANTIES SHALL BE LIMITED IN DURATION FOR
              A PERIOD OF THIRTY (30) DAYS AFTER THE DATE ON WHICH YOU FIRST ACCESS THE SERVICES, AND NO WARRANTIES
              SHALL APPLY AFTER SUCH PERIOD.
            </p>
            <h4 id="p">
              P. INDEMNIFICATION
            </h4>
            <p>
              YOU AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS CLIME, ITS PARENTS, AFFILIATE AND SUBSIDIARY COMPANIES,
              OFFICERS, DIRECTORS, EMPLOYEES, CONSULTANTS AND AGENTS FROM ANY AND ALL THIRD PARTY CLAIMS, LIABILITY,
              DAMAGES AND/OR COSTS (INCLUDING, BUT NOT LIMITED TO, ATTORNEYS&apos; FEES) ARISING FROM YOUR USE OF THE
              SERVICES, YOUR VIOLATION OF THESE TERMS OR YOUR INFRINGEMENT, OR INFRINGEMENT BY ANY OTHER USER OF YOUR
              ACCOUNT, OF ANY INTELLECTUAL PROPERTY OR OTHER RIGHT OF ANY PERSON OR ENTITY. YOU AGREE TO IMMEDIATELY
              NOTIFY CLIME OF ANY UNAUTHORIZED USE OF YOUR ACCOUNT OR ANY OTHER BREACH OF SECURITY KNOWN TO YOU.
            </p>
            <h4 id="q">
              Q. EXPORT CONTROLS
            </h4>
            <p>
              The Services and the underlying information and technology are subject to US and international laws,
              restrictions and regulations that may govern the import, export, downloading and use of the Apps. You
              agree to comply with these laws, restrictions and regulations when downloading or using the apps.
            </p>
            <h4 id="r">
              R. NOTICE TO US GOVERNMENT END USERS
            </h4>
            <p>
              Any Services used or Apps installed for or on behalf of the United States of America, its agencies and/or
              instrumentalities (&quot;U.S. Government&quot;), is provided with Restricted Rights as &quot;commercial
              Items,&quot; as that
              terms is defined at 48 C.F.R. &sect;2.101, consisting of &quot;Commercial Computer
              Software&quot; and &quot;Commercial
              Computer Software Documentation,&quot; as such terms are used in 48 C.F.R. &sect;12.212 or 48
              C.F.R. &sect;227.7202, as applicable. Pursuant to Federal Acquisition Regulation 12.212 (48
              C.F.R. &sect;12.212), the U.S. Government shall have only those rights specified in the license contained
              herein. The U.S. Government shall not be entitled to (i) technical information that is not customarily
              provided to the public or to (ii) use, modify, reproduce, release, perform, display, or disclose
              commercial computer software or commercial computer software documentation except as specified herein.
              Use, duplication, or disclosure by the U.S. Government is subject to restrictions as set forth in
              subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 252.227-7013
              or subparagraphs (c)(1) and (2) of the Commercial Computer Software - Restricted Rights at 48 C.F.R.
              52.227-19, as applicable.
            </p>
            <h4 id="s">
              S. JURISDICTIONAL AVAILABILITY
            </h4>
            <p>
              Clime does not represent or warrant that the Services or any part thereof is appropriate or available for
              use in any particular jurisdiction. We may limit the availability of the Apps, in whole or in part, to any
              person, geographic area or jurisdiction we choose, at any time and in our sole discretion.
            </p>
            <h4 id="t">
              T. DISPUTE RESOLUTION AND OTHER MISCELLANEOUS TERMS
            </h4>
            <p>
              Except for members residing within the European Economic Area and elsewhere where prohibited by
              applicable law:
            </p>
            <p>
              The exclusive means of resolving any dispute or claim arising out of or relating to these Terms
              (including any alleged breach thereof) or the Services shall be BINDING ARBITRATION administered by the
              American Arbitration Association. The number of arbitrators shall be one. The seat, or legal place, of
              arbitration and the governing law shall be New York County in the State of New York. The language to be
              used in the arbitral proceedings shall be English.
            </p>
            <p>
              The one exception to the exclusivity of arbitration is that either party has the right to bring an
              individual claim against the other in a small-claims court of competent Jurisdiction or, if filed in
              arbitration, the responding party may request that the dispute proceed in a small claims court of
              competent jurisdiction if the party&apos;s claim is eligible for a small claims proceeding. If the responding
              party requests to proceed in small claims court before the appointment of the arbitrator, the arbitration
              shall be administratively closed, and if requested after the appointment of the arbitrator, the arbitrator
              shall determine if the dispute should be decided in arbitration or if the arbitration should be
              administratively closed and decided through a small claims court proceeding. Whether you choose
              arbitration or small-claims court, you may not under any circumstances commence or maintain against the
              Company any class action, class arbitration, or other representative action or proceeding.
            </p>
            <p>
              By using the Services in any manner, you agree to the above arbitration agreement. In doing so, YOU GIVE
              UP YOUR RIGHT TO GO TO COURT to assert or defend any claims between you and the Company (except for
              matters that may be undertaken through small claims court). YOU ALSO GIVE UP YOUR RIGHT TO PARTICIPATE IN
              A CLASS ACTION OR OTHER CLASS PROCEEDING. Your rights will be determined by a NEUTRAL ARBITRATOR, NOT A
              JUDGE OR JURY, and the arbitrator shall determine all issues regarding the arbitrability of the dispute.
              You are entitled to a fair hearing before the arbitrator. The arbitrator can grant any relief that a court
              can, but you should note that arbitration proceedings are usually simpler and more streamlined than trials
              and other judicial proceedings. Decisions by the arbitrator are enforceable in court and may be overturned
              by a court only for very limited reasons. Any proceeding to enforce this arbitration agreement, including
              any proceeding to confirm, modify, or vacate an arbitration award, may be commenced in any court of
              competent jurisdiction. In the event that this arbitration agreement is for any reason held to be
              unenforceable, any litigation against the Company (except for small-claims court proceedings) may be
              commenced only in the courts of New York. You hereby irrevocably consent to the jurisdiction of those
              courts for such purposes.
            </p>
            <p>
              Governing Law. The laws of New York, without regard to conflict of laws principles, shall govern all
              matters relating to or arising from these Terms, and the use (or inability to use) the Services.
            </p>
            <p>
              The online dispute settlement platform of the European Commission is available under
              http://ec.europa.eu/odr. Clime does not take part in dispute settlement procedures in front of a consumer
              arbitration entity for members residing in the EU or European Economic Area.
            </p>
            <p>
              No failure or delay by Clime in exercising any right, power or privilege under these Terms will operate
              as a waiver thereof, nor will any single or partial exercise of any right, power or privilege preclude any
              other or further exercise thereof or the exercise of any other right, power, or privilege under these
              Terms. If any provision of these Terms shall be found unlawful, void, or for any reason unenforceable,
              then that provision shall be deemed severable from these terms and shall not affect the validity and
              enforceability of any remaining provisions.
            </p>
            <p>
              YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN THREE
              (3) YEARS AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
            </p>
            <h4 id="u">
              U. HOW TO CONTACT US.
            </h4>
            <p>If you have any questions about these Terms, please contact us by email or postal mail as follows:</p>
            <p>
              Clime Weather Services, LLC
              <br />
              555 West 18th Street,
              <br />
              New York, NY 10011
              <br />
              ATTN: Legal Dept.
              <br />
              For Clime:
              {' '}
              <a href="mailto:support@climeradar.com">support@climeradar.com</a>
              <br />
              For Planes Live:
              {' '}
              <a href="mailto:support@planeslive.com">support@planeslive.com</a>
            </p>
            <h4 id="v">
              V. SUPPLEMENTAL TERMS
            </h4>
            <p>
              To the extent permitted by applicable law (and without limiting the above rights, remedies and
              obligations except the extent expressly in conflict with additional terms below), the following additional
              terms shall apply to your use of the Services, as applicable:
            </p>
            <p>
              <strong id="v1">
                1. Weather Content and Attribution.
              </strong>
              {' '}
              We may use content from third party
              weather sources.
            </p>
            <p>
              <strong>1.</strong>
              {' '}
              We use data products or imagery from the Land, Atmosphere Near real-time Capability
              for EOS (LANCE) system (including the use of data and imagery from LANCE FIRMS) operated by NASA&apos;s Earth
              Science Data and Information System (ESDIS), with funding provided by NASA Headquarters.
            </p>
            <p>
              <strong>2.</strong>
              {' '}
              Certain watches, warnings, advisories, and other similar products with meteorological
              and hydrological data, historical data, and written information are provided and generated by the National
              Weather Service (NWS). NOAA, https://www.weather.gov/ or received from other official U.S. government
              sources. The apps are not affiliated with or endorsed by either NWS, NOAA or any other official U.S.
              government source.
            </p>
            <p>
              <strong>3.</strong>
              {' '}
              Wildfire data provided by The National Interagency Fire Center&apos;s Wildfire Open Data
              Project (https://data-nifc.opendata.arcgis.com/) and is for information purposes only.
            </p>
            <p>
              <strong>4.</strong>
              {' '}
              Air quality and certain weather event data provided by AerisWeather.
            </p>
            <p>
              <strong>5.</strong>
              {' '}
              Rain radar and other weather radar data provided by Foreca.
            </p>
            <p>
              <strong>6.</strong>
              {' '}
              Nearest hour precipitation data is powered by Tomorrow.io.
            </p>
            <p>
              <strong>7.</strong>
              {' '}
              Location Search powered by OpenStreetMap contributors.
            </p>
            <p>
              <strong id="v2">
                2. Third Party Content or Images.
              </strong>
              {' '}
              Certain Services include content,
              footage and/or images (collectively &quot;Images&quot;) licensed to Clime by third parties such as Getty
              Images
              (US), Inc. By utilizing these Services, you specifically acknowledge and agree that:
            </p>
            <p>
              <strong>1.</strong>
              {' '}
              You may only use the Images as enabled by Services, for display in digital form.
            </p>
            <p>
              <strong>2.</strong>
              {' '}
              You may not sell or re-sell Images, and may not modify or re-use Images, except as
              enabled through features or technology available in the Services.
            </p>
            <p>
              <strong>3.</strong>
              {' '}
              Images may not be used:
            </p>
            <p>
              <strong>a.</strong>
              {' '}
              for pornographic, defamatory or other unlawful purposes;
            </p>
            <p>
              <strong>b.</strong>
              {' '}
              for the purpose of enabling file-sharing of the image file; or
            </p>
            <p>
              <strong>c.</strong>
              {' '}
              in logos, trademarks, services marks or any other branding or identifiers.
            </p>
            <p>
              <strong>4.</strong>
              {' '}
              If you use Images featuring an individual(s) in connection with a sensitive,
              unflattering or controversial subject, you must include a statement that the image is used for
              illustrative purposes only and the individual is a model.
            </p>
            <p>
              <strong>5.</strong>
              {' '}
              You may not remove any metadata in Images, or reverse engineer, decompile, or
              disassemble the Services or any technology available through the Services to enable the download or use of
              Images on a stand-alone basis.
            </p>
            <p>
              <strong>6.</strong>
              {' '}
              No ownership or copyrights to any Images are granted to you.
            </p>
            <p>
              <strong id="v3">
                3. Youtube.
              </strong>
              {' '}
              Certain Services may incorporate or provide you with access
              to Youtube content. By using such Services, you agree that you will comply with Youtube&apos;s Terms of Service
              available
              {' '}
              <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer">here</a>
              .
            </p>
            <p>
              <strong id="v4">
                4. Apple App Store.
              </strong>
              {' '}
              By accessing the Services through a device made by
              Apple, Inc. (&quot;Apple&quot;), you specifically acknowledge and agree that:
            </p>
            <p>
              <strong>1.</strong>
              {' '}
              These Terms are between Clime and you; Apple is not a party to these Terms.
            </p>
            <p>
              <strong>2.</strong>
              {' '}
              The license granted to you hereunder is limited to a personal, limited,
              non-exclusive, non-transferable right to install ourApps on the Apple device(s) authorized by Apple that
              you own or control for personal, non-commercial use, subject to the Usage Rules set forth in Apple&apos;s App
              Store Terms of Service.
            </p>
            <p>
              <strong>3.</strong>
              {' '}
              Apple is not responsible for our Apps or the content therein and has no obligation
              whatsoever to furnish any maintenance or support services with respect to any of our Apps.
            </p>
            <p>
              <strong>4.</strong>
              {' '}
              In the event of any failure of an App to conform to any applicable warranty, you may
              notify Apple, and Apple will refund the purchase price for the App, if any, to you. To the maximum extent
              permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the
              App.
            </p>
            <p>
              <strong>5.</strong>
              {' '}
              Apple is not responsible for addressing any claims by you or a third party relating
              to the App, our Services or your possession or use of the App and Services, including without limitation
              (a) product liability claims; (b) any claim that an App fails to conform to any applicable legal or
              regulatory requirement; and (c) claims arising under consumer protection or similar legislation.
            </p>
            <p>
              <strong>6.</strong>
              {' '}
              In the event of any third party claim that an App or your possession and use of the
              App infringes such third party&apos;s intellectual property rights, Apple is not responsible for the
              investigation, defense, settlement or discharge of such intellectual property infringement claim.
            </p>
            <p>
              <strong>7.</strong>
              {' '}
              You represent and warrant that (a) you are not located in a country that is subject
              to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist
              supporting&quot; country; and (b) you are not listed on any U.S. Government list of prohibited or
              restricted
              parties.
            </p>
            <p>
              <strong>8.</strong>
              {' '}
              Apple and its subsidiaries are third party beneficiaries of these Terms and upon your
              acceptance of the terms and conditions of these Terms, Apple will have the right (and will be deemed to
              have accepted the right) to enforce these Terms against you as a third party beneficiary hereof.
            </p>
            <p>
              <strong>9.</strong>
              {' '}
              Clime expressly authorizes use of the Apps by multiple users through the Family
              Sharing or any similar functionality provided by Apple.
            </p>
            <p>
              <strong id="v5">
                5. Windows Phone Store:
              </strong>
              {' '}
              By downloading on of ourApps from the Windows
              Phone Store, you specifically acknowledge and agree that:
            </p>
            <p>
              <strong>1.</strong>
              {' '}
              You may install and use one copy of the App on up to five (5) Windows Phone enabled
              devices that are affiliated with the Microsoft account you use to access the Windows Phone Store. Beyond
              that, we reserve the right to apply additional conditions or charge additional fees.
            </p>
            <p>
              <strong>2.</strong>
              {' '}
              You acknowledge that Microsoft Corporation, your phone manufacturer and network
              operator have no obligation whatsoever to furnish any maintenance and support services with respect to the
              App.
            </p>
            <p><strong>END OF DOCUMENT.</strong></p>
          </div>
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}
