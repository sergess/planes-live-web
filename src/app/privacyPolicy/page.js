import React from 'react';
import Link from 'next/link';

import LandingHeader from '@/components/Header/landingHeader';
import Footer from '@/components/Footer';
import ModalProvider from '@/contexts/modal/ModalContextProvider';

import styles from './page.module.scss';

export const metadata = {
  title: 'Privacy Policy - Planes Live',
  description: 'Explore our Privacy Policy to understand how we prioritize and protect your data. Learn about the information we collect, how it’s used, and your rights.',
  colorScheme: 'light dark',
};

export default function Home() {
  return (
    <ModalProvider>
      <div className={`${styles.wrapper} landingBanners`}>
        <LandingHeader />
        <main className={styles.main}>
          <p>
            Read the Terms of Service
            {' '}
            <Link href="terms">here</Link>
            .
          </p>
          <h1>Last Updated: 18 November, 2022</h1>
          <div className={styles.content}>
            <p>
              We at Clime Weather Services, LLC have created this Privacy Policy to explain how we collect, use, disclose
              and otherwise process personal information in connection with operating our business. Clime Weather
              Services, LLC is a subsidiary of Apalon, LLC. (&quot;Apalon&quot;, &quot;we&quot;, &quot;us&quot; and &quot;our&quot;). Apalon is the controller of
              your personal data. This Privacy Policy describes the practices concerning the information collected by us
              through the use of our websites and applications on which this Privacy Policy is posted.
            </p>
            <p>
              This Privacy Policy applies to our websites and mobile applications, email notifications and any and all
              related services we may provide on which this Privacy Policy is posted, and our collection of information
              from our corresponding social media features and pages (each a &quot;Service&quot; and collectively,
              the &quot;Services&quot;). In addition to describing how we collect, use, disclose and otherwise process
              personal information, this Privacy Policy explains the rights and choices available to individuals with
              respect to their personal information.
            </p>
            <p>
              We may provide additional privacy notices to you at the time we collect your data. This type of
              an &quot;in-time&quot; notice will govern how we may process the information you provide at that time.
            </p>
            <p>
              California residents, please see
              {' '}
              <strong>section 8</strong>
              {' '}
              for more information on Your California Privacy
              Rights.
              <br />
              Mainland China residents, please see
              {' '}
              <strong>section 9</strong>
              {' '}
              for more information on Your Privacy Rights.
            </p>
            <p><strong>Click on the links below to jump directly to sections of the Privacy Policy:</strong></p>
            <div className={styles.menu}>
              <a href="#a">1. Information We Collect</a>
              <a href="#b">2. Sources of Information and Purposes of Use</a>
              <a href="#c">3. How We May Use Your Personal Information</a>
              <a href="#d">4. How We May Share Information about You with Others</a>
              <a href="#e">5. Do Not Track Disclosures</a>
              <a href="#f">6. Social Media and other Communications</a>
              <a href="#g">7. Information for Individuals in the European Economic Area</a>
              <a href="#h">8. Information for Residents of California</a>
              <a href="#i">9. Information for Residents of Mainland China</a>
              <a href="#ii">10. Online Privacy Choices and Rights</a>
              <a href="#j">11. Data Retention</a>
              <a href="#k">12. How We Protect Personal Information</a>
              <a href="#l">13. Links to Websites and Third-Party Content</a>
              <a href="#m">14. Information Relating to Children</a>
              <a href="#n">15. Updates to Our Privacy Policy</a>
              <a href="#o">16. How to Contact Us</a>
            </div>
            <h4 id="a">
              1. Information We Collect
            </h4>
            <p>
              We may obtain information about you in a variety of ways, including through your use of our Services, when
              you call, email or otherwise communicate with us (including through social media), or when you participate
              in events or other promotions.
            </p>
            <p>
              The information that we collect, whether from you directly or automatically, may be considered personal
              information in certain jurisdictions or personal data under the European General Data Protection Regulation
              (the &quot;
              <strong>GDPR</strong>
              &quot;). Whenever we refer to personal information in this Privacy Policy,
              it means personal information or personal data as defined by applicable laws in the relevant jurisdiction.
            </p>
            <p>Categories of personal information we collect, which may vary based on the Service being used:</p>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td><strong>Category</strong></td>
                  <td><strong>Specific Examples</strong></td>
                </tr>
                <tr>
                  <td>A. Identifiers.</td>
                  <td>
                    A real name, alias, unique personal identifier, online identifier, IP address,
                    email address, account or other similar identifiers.
                  </td>
                </tr>
                <tr>
                  <td>B. Personal Records.</td>
                  <td>
                    Name, Email address and username. Some personal information included in this
                    category may overlap with other categories.
                  </td>
                </tr>
                <tr>
                  <td>C. Internet or other similar network activity.</td>
                  <td>
                    Information on a consumer&apos;s interaction with a website, application, or
                    advertisement. See Information collected by Automated Means below for further details.
                  </td>
                </tr>
                <tr>
                  <td>D. Geolocation data.</td>
                  <td>Physical location or movements.</td>
                </tr>
                <tr>
                  <td>E. Sensory data.</td>
                  <td>Audio, electronic, visual, or similar information.</td>
                </tr>
                <tr>
                  <td>F. Commercial information.</td>
                  <td>
                    Information on a consumer&apos;s interaction with a website, application, or
                    advertisement. See Information collected by Automated Means below for further details.
                  </td>
                </tr>
                <tr>
                  <td>G. Inferences drawn from other personal information.</td>
                  <td>Profile reflecting a person&apos;s preferences, characteristics, and behavior.</td>
                </tr>
              </tbody>
            </table>
            <h4 id="b">
              2. Sources of Information and Purposes of Use
            </h4>
            <p>
              Some of this information you provide to us and some we collect when you use our Services. We also may
              obtain information about you (including personal information) from our business partners, such as vendors,
              and others.
            </p>
            <p>
              You may choose not to provide some or all of your personal information to us but doing so may prevent us
              from providing our Services to you or limit our ability to provide you with the level of service that you
              would otherwise expect from us.
            </p>
            <p><strong>Information collected from you</strong></p>
            <p>The following are examples of the types of information we may collect directly from you: </p>
            <p />
            <ul>
              <li>
                <strong>Feedback:</strong>
                {' '}
                From time to time, we may request your opinions, suggestions, or modification
                and improvement ideas (&quot;Feedback&quot;) through surveys, or other similar requests. Any responses you provide
                are voluntary.
              </li>
              <li>
                <strong>Name:</strong>
                {' '}
                We require your name to personalize your user experience.
              </li>
              <li>
                <strong>Telephone number:</strong>
                {' '}
                We may require your phone number for the technical provision of our
                Services to you.
              </li>
              <li>
                <strong>Email address:</strong>
                {' '}
                We use your email address to communicate with you about the products and
                Services we offer, responding to requests, inquiries, comments, and suggestions and updating you with
                information about your account.
              </li>
              <li>
                <strong>Username and/or PIN:</strong>
                {' '}
                Certain of our Services use this information to facilitate your
                access to our website or mobile application and validate your login for your security.
              </li>
              <li>
                <strong>Other User Information:</strong>
                {' '}
                When using certain Services, you may choose to input or provide
                access to certain information about yourself, such as photographs, physical and health related
                information, or other information to enhance your experience of the Services we provide. This information
                will be stored on your device and will not be transmitted to us unless we notify you otherwise at the time
                of entering the information or granting access to the information.
              </li>
              <li>
                <strong>Location Information:</strong>
                {' '}
                When you use our Apps, we and our third party partners may detect
                your general location (e.g., city and state). Additionally, we may also collect precise location data
                (e.g., longitude/latitude) but only when you consent within the app to sharing your precise location.
                Failure to provide such information will only prevent you from using the features of the app that require
                your precise location, or obtaining results that the service intends to provide you with based on your
                location information, but will not affect your use of other features. You authorize us and our third party
                partners to collect and use your location information. We may use location information to operate and
                enhance our service as well as customize the content, weather alerts, and advertising we provide to you.
                For Apps with advertisements, if you have enabled location tracking, our trusted third-party partners may
                also collect and use location data to customize advertisements shown to you. See Marketing Opt-Outs in
                Section 9 of this Privacy Policy for more information on how to opt-out of receiving relevant advertising.
              </li>
              <li>
                <strong>Payment Information:</strong>
                {' '}
                In the event you purchase products or Services directly from us,
                we, or a third party on our behalf, may collect payment card and other payment information, solely as
                required to process payment for such purchase. If you pay for Services directly through our website, you
                authorize us to have our payment processor collect this information. Your failure to provide such
                information may prevent you from using our Services.
              </li>
              <li>
                <strong>Photograph:</strong>
                {' '}
                Photograph or photographs you may provide to the Services.
              </li>
            </ul>
            <p />
            <p><strong>Information collected by automated means (&quot;Automated Information&quot;)</strong></p>
            <p>
              We may collect Automated Information through the use of cookies, and other technologies. Please see our
              {' '}
              <Link
                href="cookiePolicy"
              >
                Cookies Policy
              </Link>
              {' '}
              for more information on cookies. In addition to
              cookies, such other technologies may include:
            </p>
            <p />
            <ul>
              <li>
                &quot;Pixel tags&quot; (also known as a &quot;clear GIFs&quot; or &quot;web beacons&quot;) which are
                tiny images (in most cases, typically just one-pixel) that can be placed on a Web page or in our
                electronic communications to you in order to help us measure the effectiveness of our content by, for
                example, counting the number of individuals who visit us online or verifying whether you&apos;ve opened one of
                our emails or seen one of our Web pages.
              </li>
              <li>
                &quot;HTML5&quot; (the language some websites, such as mobile websites, are coded in) may be used to
                store information on your computer or device about your website usage activities and to help determine how
                our Services are being used by our visitors, how the services can be improved and to customize our
                Services for our users.
              </li>
            </ul>
            <p />
            <p>
              The above tracking technologies may be deployed by us or our service providers on our behalf. You can find
              more information on our third-party service providers in
              <a href="#d">Section 4</a>
              {' '}
              of this Privacy Policy.
            </p>
            <p>Automated Information includes information such as:</p>
            <p />
            <ul>
              <li>IP address</li>
              <li>Operating system used (for example: iOS)</li>
              <li>Internal resolution of the browser window</li>
              <li>Device type</li>
              <li>Country code</li>
              <li>
                Identifiers associated with technologies that may uniquely identify your device or browser (e.g.,
                IMEI/UDID and MAC address)
              </li>
              <li>Dates and times of access</li>
              <li>IDFA</li>
              <li>Subscription information</li>
              <li>Latitude/longitude (if you allow location tracking)</li>
              <li>
                AdvertisingID (such as Google&apos;s AdvertisingID and Apple&apos;s IDFA, both of which are randomly generated
                numbers that you can reset by going into your device&apos;s settings)
              </li>
              <li>
                Adjust ID (this identifier lets us know where our users found our Services online, record user app
                events and optimize our advertising efforts)
              </li>
            </ul>
            <p />
            <p>
              We or our third-party service provider may assign you a unique identifier through automated means in order
              to match information collected from you through different means or at different times, (including both
              personal information and Automated Information) and to use such information as described in this Privacy
              Policy.
            </p>
            <p>This Automated Information is generally used for the following purposes:</p>
            <p />
            <ul>
              <li>
                for the technical provision of our Services in order to be able to provide you with a functioning
                user-friendly experience
              </li>
              <li>
                to provide you with a secure experience and to take measures to protect our website and mobile
                applications from cyber risks
              </li>
              <li>
                to uncover insights about your use of our website and mobile applications in order to improve our
                Services and features, including developing new products and features
              </li>
              <li>to facilitate your access to our website or mobile application</li>
              <li>to customize our Services for you</li>
              <li>
                to help us better understand our current and potential customers so that we may market our Services
                accordingly
              </li>
              <li>
                events and usage data are captured for our internal business analytics in order to understand how our
                users interact with our mobile applications and use our Services. For example, we may capture when a user
                visits a screen, taps a button, permits notifications, upgrades, or otherwise interacts with the app
              </li>
              <li>
                Monitoring and analyzing the effectiveness of our communications (including by identifying when emails
                sent to you have been received and read)
              </li>
              <li>Serving relevant advertising (where applicable)</li>
            </ul>
            <p />
            <p><strong>Information collected from integrated services.</strong></p>
            <p>
              We may obtain information, including personal information from third parties and sources that we integrate
              into our Services either for the provision of our Services or to facilitate your access to our Services such
              as described below.
            </p>
            <p>
              You may be given the option to access or register for our Services through the use of your third-party
              social media account, such as Facebook or Google. If you select this option, your social media provider may
              make certain of your personal information available to us, such as your email address or other unique
              identifier or we may be asked to share certain information with such social media provider. If you choose to
              sign on through your third party social media provider, you authorize us to collect your information from
              such provider and process it in accordance with this Privacy Policy and you also authorize us to share your
              information with your social media provider as necessary to permit you to access our Services using your
              social media account. We recommend that you review your social media provider&apos;s privacy policies carefully
              before using their service to connect to our Services.
            </p>
            <p><strong>Email marketing </strong></p>
            <p>
              We may send you marketing emails to tell you about our products (including promotions, offers, discounts
              and new features), and about products of our affiliates. Where we require your consent to send you marketing
              emails, we will ask for and keep a record of your consent. We will also provide you with an easy way to
              opt-out of receiving future marketing emails at any time.
            </p>
            <p>
              In our marketing emails to you, we may use pixel tags to help us learn how to improve our email delivery
              and engagement. Data collected in this way is used for aggregated analytics and may include the browser and
              email clients you use, coarse location derived from your IP address and details about how you engage with
              the email (eg, whether or not the email was read or forwarded).
            </p>
            <h4 id="c">
              3. How We May Use Your Personal Information
            </h4>
            <p>
              In addition to the purposes described above, we may use the information we collect for the purposes set out
              below:
            </p>
            <p />
            <ul>
              <li>
                Performing Our Services
                <br />
                &bull; Maintaining or servicing accounts, providing customer service, operation our website and mobile
                applications; processing or fulfilling orders and transactions, verifying user information, processing
                payments
                <br />
                &bull; Communicating about the products and Services we offer, and responding to requests, inquiries,
                comments, and suggestions
              </li>
              <li>
                Internal Research
                <br />
                &bull; Understanding and evaluating how our Services and features perform with our users
                <br />
                &bull; Uncovering insights about usage in order to improve the services and provide customers with
                enhanced features as well as inform our development of new features and products.
                <br />
                &bull; Development of customized or personalized experiences of our Services, such as remembering your
                information, so you do not have to re-enter it each time you use one of our Services
              </li>
              <li>
                Auditing Interactions with Consumers
                <br />
                &bull; measuring usage of our websites and mobile applications
                <br />
                &bull; measuring our advertising and marketing activity (e.g., measuring how a user was acquired)
              </li>
              <li>
                Security
                <br />
                &bull; To provide you with a secure experience and to take measures to protect our website and mobile
                applications from cyber risks
                <br />
                &bull; Protecting against, identifying, investigating, preventing, and responding to fraud, illegal
                activity (such as incidents of hacking or misuse of our websites and mobile applications), and claims and
                other liabilities, including by enforcing the terms and conditions that govern the Services we provide
              </li>
              <li>
                Debugging/Repair
                <br />
                &bull; identification and repair of impairments to intended, existing functionality of our Services
              </li>
              <li>
                Advertising/Marketing
                <br />
                &bull; Understanding our customer in order to more effectively market our Services
                <br />
                &bull; If applicable, serving you relevant advertising
              </li>
              <li>
                Quality and Safety Maintenance and Verification
                <br />
                &bull; activities related to improving the quality of the Services we provide, including upgrade or
                enhancement of the Services
                <br />
                &bull; verification or maintenance of the quality or safety of Services
                <br />
                &bull; Tracking and responding to quality and safety matters
                <br />
                &bull; Protecting our rights and property
              </li>
              <li>
                Complying with legal or regulatory requirements, judicial process, industry standards and our company
                policies
              </li>
              <li>Other purposes that may be described at the time you choose to provide personal information to us</li>
            </ul>
            <p />
            <p>
              To perform the above functions, we may match information collected from you through different means or at
              different times, including both personal information and Automated Information, and use such information
              along with information obtained from other sources. We may also aggregate and/or de-identify any information
              that we collect, such that the information no longer identifies any specific individual. We may use,
              disclose and otherwise process such information for our own legitimate business purposes – including
              historical and statistical analysis and business planning – pursuant to this Privacy Policy and applicable
              privacy laws.
            </p>
            <p>
              We will inform you if it is necessary for us to use your personal information for any purpose other than
              those stated in this Privacy Policy, and obtain your consent (where required by applicable privacy laws)
              before using your information for such other purpose.
            </p>
            <h4 id="d">
              4. How We May Share Information about You with Others
            </h4>
            <p>
              We may share information about you for the purposes described in this Privacy Policy or pursuant to a
              specific &quot;in-time&quot; privacy notice we may provide at the time we collect the information.
            </p>
            <p><strong>Corporate Affiliates</strong></p>
            <p>
              Clime Weather Services, LLC (and its parent company Apalon) are part of the IAC Group family of businesses.
              We share your information with other parts of IAC for legitimate business purposes, including:
            </p>
            <p />
            <ul>
              <li>
                to assist us in technical processing operations, such as data hosting and maintenance, finance, legal,
                HR and accounting assistance, securing our data and systems and fighting against spam, abuse, fraud,
                infringement and other wrongdoings; and
              </li>
              <li>
                for corporate audit, analysis and consolidated reporting as well as compliance with applicable laws.
              </li>
            </ul>
            <p />
            <p><strong>Third Party Service Providers</strong></p>
            <p>
              We may share information about you with the following categories of third-party providers for a variety of
              business purposes:
            </p>
            <p />
            <ul>
              <li>
                <strong>Customer Communications and Insights Platforms.</strong>
                {' '}
                We may share phone number, email, app
                usage and interactions with our third-party customer communications platform provider for the following
                business purposes: performing services that allow us to communicate with you and administer your account
                as well as track your usage for our internal analytics.
              </li>
              <li>
                <strong>Internal Business Insights Platforms.</strong>
                {' '}
                Our third-party internal business analytics
                platform provides us with the tools to help us understand app usage and interactions and uncover insights
                that allow us to improve our product and features. We may share or make available unique user identifiers,
                IDFA, deviceID, IP address and app usage and events (such as when you subscribed to our Services) with
                these providers for the following business purposes: performing services that allow us to (i) monitor and
                understand usage in order to enhance existing Services or develop new products and features and (ii)
                better understand our customers in order to market our products more effectively.
              </li>
              <li>
                <strong>Customer Support</strong>
                {' '}
                – When you contact us through our one of our support emails indicated
                in the How to Contact Us section at the bottom of this Privacy Policy, your email may be directed through
                our third party customer support platform which will have access to your personal information, the content
                of your email as well as date and time your request came into our system. We use this provider to allow us
                to communicate with you about your account and to receive reports from users about the quality or safety
                of our products.
              </li>
              <li>
                <strong>Measurement and Attribution.</strong>
                {' '}
                These service providers offer tools that allow us to
                measure and attribute the source of new subscription sign ups and that allow us to uncover insights about
                usage and app events. We may use unique user identifiers made available to us from these third-party
                providers to help us measure the effectiveness of our ads (e.g., where and how a user is acquired) and to
                uncover information about how our customers are using our apps in order to improve their quality and
                safety. We may also share and/or store unique user identifiers, deviceIDs, IDFA or IP addresses with these
                providers for the same purpose.
              </li>
              <li>
                <strong>Other technology providers necessary to provide our Services</strong>
                {' '}
                (including cloud storage
                and web hosting providers). We may make certain Automated Information and/or aggregate or non-personally
                identifiable information available for various purposes including monitoring network traffic to detect
                malicious actors and to protect against malware, fraud or other unlawful uses or activity.
              </li>
              <li>
                <strong>Payment Processors.</strong>
                {' '}
                If you purchase our Services outside of the Apple, Google or Huawei
                stores, we will process your payment through our third-party provider. When you pay in this manner, you
                authorize and direct us to process your payment through our payment processor. An example of this is our
                payment partner, Braintree (https://www.braintreepayments.com/). Please note we will share certain
                information such as your email address with our payment processor to facilitate the provision of receipts
                to you from the payment processor and to address any issues that may arise with your payment.
              </li>
              <li>
                <strong>Advertising/Marketing providers.</strong>
                {' '}
                We, or the third-party service providers we use to
                assist us with marketing our own products to you and with third party in-app advertising, may use some of
                the information we collect from you to provide you with relevant advertisements and offers. Additionally,
                in connection with marketing our own products, we may share certain information with companies like
                Facebook, Pinterest or Snapchat that allow us to create Custom or Lookalike Audiences. You may learn more
                about your off-Facebook activity and how to opt out of having such activity sent to Facebook click
                {' '}
                <a
                  href="https://www.facebook.com/off-facebook-activity"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . You can also visit
                your
                {' '}
                <a href="https://pinterest.com/settings/privacy" target="_blank" rel="noreferrer">Pinterest Settings</a>
                {' '}
                and
                {' '}
                <a
                  href="https://support.snapchat.com/en-US/a/advertising-preferences"
                  target="_blank"
                  rel="noreferrer"
                >
                  Snapchat Advertising
                  Preferences
                </a>
                {' '}
                to learn more about your privacy options on those platforms. We also use Google Ads to
                advertise our products. You may opt-out of the use of this tracking technology by visiting
                {' '}
                <a
                  href="http://www.google.com/privacy_ads.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google&apos;s Advertising
                </a>
                {' '}
                and Privacy page.
                Additionally, if we obtain your information in connection with a contest, sweepstakes, event, offering or
                other promotional activity that is jointly offered by us and any third parties. By entering such contest
                or sweepstakes, you authorize and direct us to share your information with our co-sponsor. We may also
                share your information with a third-party service provider who administers the promotion, contest and/or
                sweepstakes. We may also share aggregate information to third party providers and platforms that help us
                understand our user demographic, including user demographic interests, habits and usage patterns for
                certain of our Services so that we may market our products more effectively.
              </li>
            </ul>
            <p />
            <p><strong>Corporate Transactions:</strong></p>
            <p>
              We may share information about you in connection with (including during the evaluation or negotiation of) a
              corporate change or dissolution, including for example a merger, acquisition, reorganization, consolidation,
              bankruptcy, liquidation, sale of assets or wind-down of a business (each a &quot;Corporate
              Transaction&quot;). Unless prohibited by applicable law, we reserve the right to transfer the information we
              maintain in the event we engage in any Corporate Transaction (including, selling or transferring all or a
              portion of our business or assets). If we engage in such a sale or transfer, we will where feasible - direct
              the recipient to use the information in a manner that is consistent with this Privacy Policy. After such a
              sale or transfer, you may contact the recipient with any inquiries concerning the processing of your
              personal information.
            </p>
            <p><strong>Legal, Regulatory, Compliance and Similar reasons.</strong></p>
            <p>
              In addition, we may disclose and/or share your information to comply with legal or regulatory requirements
              (including to comply with a court order, judicial subpoena or other subpoena or warrant), industry
              standards, judicial process, and our company policies, as well as to protect against, identify, investigate,
              prevent and respond to fraud, illegal activity (such as identifying and responding to incidents of hacking
              or misuse of our websites and mobile applications), adverse event reporting, and claims and other
              liabilities.
            </p>
            <p>
              We also reserve the right to disclose your information (i) when we believe in good faith that disclosure is
              appropriate or necessary to take precautions against liability, (ii) to protect our rights or property or
              the legal and property rights of others and (iii) investigate and defend third party claims or allegations
              against us.
            </p>
            <p>
              In addition, we may collect, use and disclose your personal information as required or permitted by
              applicable law, or as directed by you, in accordance with this Privacy Policy.
            </p>
            <h4 id="e">
              5. Do Not Track Disclosures
            </h4>
            <p>
              Some web browsers may transmit &quot;do-not-track&quot; signals to the websites with which the user
              communicates. Because of differences in how web browsers incorporate and activate this feature, it is not
              always clear whether users intend for these signals to be transmitted, or whether they even are aware of
              them. Because there currently is no industry standard concerning what, if anything, websites should do when
              they receive such signals, our Sites do not currently process or respond to &quot;do-not-track&quot; (DNT)
              settings in your web browser. If and when a final standard is established and accepted, we will reassess how
              to respond to these signals.
            </p>
            <p>
              Certain third parties, such as ad networks, web analytics companies and social media and networking
              platforms, collect information about your online activities over time and across websites. These third
              parties may not change their tracking practices in response to DNT settings in your web browser and we do
              not obligate these parties to honor DNT settings. Information about how to opt out from your data being used
              by third parties can be found above under &quot;Information collected by automated means.&quot;
            </p>
            <h4 id="f">
              6. Social Media and Other Communications
            </h4>
            <p>
              We maintain a presence on several social networking and blogging platforms, such as Facebook, Instagram,
              Google, LinkedIn, Twitter, Snap, Tik Tok and Pinterest. We may incorporate some third-party social
              networking features into our Services (including, allowing users to interact with others and share certain
              content and information on social media platforms) or utilize third-party provided platforms to publish or
              manage the Services or portions thereof. Through these platforms and features, we receive or may share
              information about you, and this Privacy Policy applies to that information as well. In addition, some
              providers of third-party social media or blogging platforms we utilize have their own privacy policies which
              explain how the third parties that provide them may collect, use and protect your information (e.g., if you
              establish an account with such platform providers directly). By using social features, you agree to those
              third parties&apos; privacy policies and terms of use.
            </p>
            <p>
              If you choose to communicate with us or another user through social features available on our websites or
              mobile applications or through our social media pages, or other similar communication or messaging features
              or services, such information may be made publicly available.
              <strong>
                For security purposes, please do not
                include any password, social security number, payment card or other sensitive information via these
                features.
              </strong>
              {' '}
              We have the right, but not the obligation to monitor messages and communications
              between and among users for security and training purposes. We may, but are not obligated to, remove any
              content we deem inappropriate.
            </p>
            <h4 id="g">
              7. Information for Individuals in the European Economic Area (EEA)
            </h4>
            <p><strong> &bull; Your Choices and Rights.</strong></p>
            <p>
              As a resident of the EEA, you may have some or all of the following rights in relation to how we use your
              personal information:
            </p>
            <p />
            <ul>
              <li>Access: you may request access to your personal information and receive copies of it;</li>
              <li>Correction: you may have inaccurate/incomplete personal information corrected and updated;</li>
              <li>
                Object to, or Limit or Restrict, Use of Data: you can ask us to stop using all or some of your personal
                information or to limit our use of it;
              </li>
              <li>
                Deletion: in certain circumstances, you can request a right &quot;to be forgotten&quot; (this is a right
                to have your information deleted or our use of your data restricted). We will honor such requests unless
                we have to retain this information to comply with a legal obligation or unless we have an overriding
                interest to retain it;
              </li>
              <li>
                Portability: in certain circumstances, exercise the right to data portability (this is a right to obtain
                a transferable version of your personal information to transfer to another provider); and
              </li>
              <li>
                Consent Management: where we rely on consent to process your personal data, you may withdraw consent at
                any time. You do not have to provide a reason for your withdrawal where processing is based on consent.
              </li>
            </ul>
            <p />
            <p>
              If you are a resident of the EEA and you wish to access, change or delete personal information we hold
              about you, you may contact us by completing this
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/85ba16a2-9811-439f-a163-e40c176cbc14.html"
                target="_blank"
                rel="noreferrer"
              >
                form
              </a>
              . If we change or delete your personal information or if you decline to actively
              share certain personal information with us, we may not be able to provide you with our Services or some of
              the features and functionality of our Services. In addition, you may contact us
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/85ba16a2-9811-439f-a163-e40c176cbc14.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              {' '}
              to request that we not disclose your personal information to third parties (other
              than those that are acting as our agent to perform tasks on our behalf, such as data processors). Keep in
              mind, we may reject requests for certain reasons, including if the request is unlawful or if it may infringe
              on the rights and freedoms of another person. For example, we may not be able to accommodate certain
              requests to object to the processing of personal information, notably where such requests would not allow us
              to provide our service to you anymore.
            </p>
            <p>
              For your protection, we may require proof of identity and verification before we can answer the above
              requests.
            </p>
            <p><strong>Legal basis for processing data</strong></p>
            <p>In this section, we identify the legal grounds on which we rely to process personal information.</p>
            <p>
              In some cases, we have a legitimate interest to process the personal information that we collect, such as
              to develop, administer and support our products and services; to operate, evaluate and improve our business;
              to facilitate and manage engagement programs; to promote research; to support our recruitment activities; or
              to facilitate a Corporate Transaction (including a sale of assets or merger or acquisition).
            </p>
            <p>
              In other cases, we process personal information to fulfill our contracts with business partners, such as
              third parties that distribute our products.
              {' '}
            </p>
            <p>
              It may also be necessary for us to process personal information to establish, exercise or defend against
              fraud, illegal activity, and claims and other liabilities, including by enforcing the terms and conditions
              that govern the services we provide.
            </p>
            <p>
              Our processing of certain information may be necessary to comply with our legal obligations, and for
              reasons of public interest, such as with respect to adverse event and product safety reporting.
              {' '}
            </p>
            <p>We may also process personal information as specifically permitted by applicable legal requirements.</p>
            <p>
              If we rely on consent for the processing of your personal information, we will seek such consent at the
              time we collect your personal information.
            </p>
            <p><strong>International data transfers</strong></p>
            <p>
              We may transfer your personal information to countries other than the country in which the data was
              originally collected for the purposes described in this Privacy Notice. For example, if you are located
              outside of the United States, we may transfer your personal information to the United States. The countries
              to which we transfer personal information may not have the same data protection laws as the country in which
              you initially provided the information. When we transfer personal information across borders, we consider a
              variety of requirements that may apply to such transfers.
            </p>
            <p>Specifically, we may transfer personal information from the European Economic Area to:</p>
            <p />
            <ul>
              <li>Countries that the European Commissions has deemed to adequately safeguard personal information,</li>
              <li>
                Pursuant to the recipient’s compliance with standard contractual clauses (also known as Model Clauses),
                or Binding Corporate Rules,
              </li>
              <li>Pursuant to the consent of the individual to whom the personal information pertains, or</li>
              <li>As otherwise permitted by applicable EEA requirements.</li>
            </ul>
            <p />
            <h4 id="h">
              8. Information for Residents of California
            </h4>
            <p>
              If you are a California resident, the California Consumer Privacy Act (&quot;
              <strong>CCPA</strong>
              &quot;)
              may provide you with rights that are in addition to those set forth elsewhere in this Privacy Policy
              regarding our use of your personal information. The CCPA Notice applies to &quot;Consumers&quot; as defined
              by the law. This section describes your CCPA rights as a California Consumer and explains how to exercise
              those rights. See
              <a href="#a">Sections 1 - 4</a>
              {' '}
              above to learn what information we collect from you and
              how it is collected, used and shared.
            </p>
            <p><strong>Access to Information and Data Portability Rights</strong></p>
            <p>
              You have the right to send us a request, no more than twice in a twelve-month period, for any of the
              following for the period that is twelve months prior to the request date:
            </p>
            <p />
            <ul>
              <li>The categories of personal information we have collected about you.</li>
              <li>The categories of sources from which we collected your personal information.</li>
              <li>The business or commercial purposes for our collecting or selling your personal information.</li>
              <li>The categories of third parties to whom we have shared your personal information.</li>
              <li>The specific pieces of personal information we have collected about you.</li>
              <li>
                A list of the categories of personal information disclosed for a business purpose in the prior 12
                months, or that no disclosure occurred.
              </li>
              <li>
                A list of the categories of personal information sold about you in the prior 12 months, or that no sale
                occurred. If we sold your personal information, we will explain:
                <br />
                &bull; The categories of your personal information we have sold.
                <br />
                &bull; The categories of third parties to which we sold personal information, by categories of personal
                information sold for each third party.
              </li>
            </ul>
            <p />
            <p>
              You have the right to make or obtain a transportable copy, no more than twice in a twelve-month period, of
              your personal information that we have collected in the period that is 12 months prior to the request date
              and are maintaining.
            </p>
            <p><strong>Data Deletion Rights</strong></p>
            <p>
              Except to the extent we have a basis for retention under CCPA, you may request that we delete your personal
              information that we have collected directly from you and are maintaining. Note also that we are not required
              to delete your personal information that we did not collect directly from you.
            </p>
            <p><strong>Exercising Your Rights</strong></p>
            <p>
              To make a request for access, portability or deletion according to your rights under CCPA, click
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/d1a38f12-c4a3-412c-907a-4c1b2d5237f4.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              {' '}
              or mail your request for the attention of the Privacy / Legal Department to Clime
              Weather Services, LLC, 555 West 18th Street, New York, NY 10011. California Consumers may exercise these
              rights via an authorized agent who meets the agency requirements of the CCPA. We cannot respond to your
              request or provide you with personal information if we cannot verify your identity or authority to make the
              request and confirm that the personal information relates to you. Any request you submit to us is subject to
              an identification and residency verification process (&quot;Verifiable Consumer Request&quot;).
            </p>
            <p><strong>The Verifiable Consumer Request must:</strong></p>
            <p />
            <ul>
              <li>
                Provide sufficient information that allows us to reasonably verify you are the person about whom we
                collected personal information or an authorized representative; and
              </li>
              <li>
                Describe your request with sufficient detail that allows us to properly understand, evaluate, and
                respond to it.
              </li>
            </ul>
            <p />
            <p>
              Some personal information we maintain about Consumers is not sufficiently associated with enough personal
              information about the Consumer for us to be able to verify that it is a particular Consumer&apos;s personal
              information (e.g., clickstream data tied only to a pseudonymous browser ID). As required by the CCPA, we do
              not include that personal information in response to Verifiable Consumer Requests. If we cannot comply with
              a request, we will explain the reasons in our response.
            </p>
            <p>
              We will make commercially reasonable efforts to identify Consumer personal information that we collect,
              process, store, disclose, and otherwise use and to respond to your California Consumer privacy rights
              requests. We will typically not charge a fee to fully respond to your requests, but we may charge a
              reasonable fee, or refuse to act upon a request, if your request is excessive, repetitive, unfounded, or
              overly burdensome.
            </p>
            <p><strong>Opt-Out</strong></p>
            <p>
              There is not yet a consensus as to whether third party cookies and tracking devices associated with our
              websites and mobile apps may constitute a &quot;sale&quot; of your PI as defined by the CCPA. To make a request to
              opt-out of sale under CCPA, click
              <a
                href="https://privacyportal.onetrust.com/webform/982b0a23-3053-4df0-9089-7ce3acd59c8d/dc5c51a3-7e10-49d3-8bfa-0f5614cf34db"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . See Section 9: Online Privacy Choices and Rights to learn how you can exercise
              your rights regarding interest-based advertising.
            </p>
            <p>
              We will not discriminate against you in a manner prohibited by the CCPA because you exercise your CCPA
              rights. However, we may charge a different price or rate, or offer a different level or quality of good or
              service, to the extent that doing so is reasonably related to the value of the applicable data. In addition,
              we may offer you financial incentives for the collection, sale and retention and use of your personal
              information as permitted by the CCPA that can, without limitation, result in reasonably different prices,
              rates, or quality levels. The material aspects of any financial incentive will be explained and described in
              its program terms. We may add or change incentive programs and/or their terms by posting notice on the
              program descriptions and terms linked to above so check them regularly.
            </p>
            <p>
              California&apos;s &quot;Shine the Light&quot; law, Civil Code section 1798.83, requires certain businesses to
              respond to requests from California customers asking about the businesses&apos; practices related to disclosing
              personal information to third parties for the third parties&apos; direct marketing purposes. Alternately, such
              businesses may have in place a policy not to disclose personal information of customers to third parties for
              the third parties&apos; direct marketing purposes if the customer has exercised an option to opt-out of such
              information-sharing. As discussed above, if we share Personal Information with third parties for their
              marketing purposes you will be able to elect for us not to do so by submitting your request
              <a
                href="mailto:support@climeradar.com"
              >
                here
              </a>
              {' '}
              (please include your name, mailing address, and email
              address).
            </p>
            <p>
              To find out more about our &quot;do not track&quot; practices under Cal. Bus. &amp; Prof.
              Code &sect; 22575, see the &quot;Do Not Track Disclosures&quot; section of this Privacy Policy.
            </p>
            <h4 id="i">
              9. Information for Residents of Mainland China
            </h4>
            <p>
              If you are a resident of Mainland China (“Mainland China”, for the purpose of this Privacy Policy,
              excluding the Hong Kong Special Administrative Region and the Macau Special Administrative Region, and
              Taiwan), the PRC laws and regulations contain rules that are in addition to those set forth elsewhere in
              this Privacy Policy regarding our collection, use, transfer and retention of your personal information.
            </p>
            <p><strong>Principles of Collection </strong></p>
            <p>
              We only collect your information to the extent necessary to provide one or more of the Services, and will
              do so only by fair and reasonable means. The legal basis for collecting and using the information depends on
              what the information is and the context in which we collect it. During your use of some features, we will
              collect your personal information after obtaining your consent. Unless the provision of such information is
              required by applicable laws and regulations, refusing to provide such information will only result in your
              inability to use the related features, and will not affect your use of other features.
            </p>
            <p><strong>Sensitive Personal Information</strong></p>
            <p>
              Access to sensitive personal information, such as contacts, exact location, camera, microphone and album,
              is disabled by default, and will only be enabled upon your express authorization. It is important to note
              that obtaining your authorization to access sensitive personal information is a necessary but not sufficient
              condition for us to collect certain information. Our acquisition of your authorization to access sensitive
              personal information does not mean that we will definitely collect your relevant information. We will only
              collect your sensitive personal information when there is a specified purpose and sufficient necessity and
              in accordance with this Privacy Policy. For the collection and processing of sensitive personal information,
              specific consent shall be obtained from you.
            </p>
            <p>
              We place great value on the protection of minors’ personal information. As required by applicable laws and
              regulations, any user under the age of 14 shall obtain the written consent of his/her parent or statutory
              guardian prior to providing sensitive personal information to us.
            </p>
            <p><strong>Information Shared with a Third Party</strong></p>
            <p>
              We will share your personal information with third parties only in accordance with this Privacy Policy.
              Unless explicitly authorized by you, we will not share any information that can be used to identify your
              identity (such as your name or email address). We may, however, share non-personally identifiable,
              aggregated, and/or public information with third parties. We will direct all such third-party service
              providers to maintain the confidentiality of the information disclosed to them and not to use your
              information for any purpose other than that have been authorized by you.
            </p>
            <p><strong>Data Retention</strong></p>
            <p>
              We may retain personal information we collect from you where we have an ongoing legitimate business need to
              do so. We may retain personal information for as long as necessary for the purposes set out in this Privacy
              Policy, which includes retention that may be required for regulatory purposes.
            </p>
            <p>
              If we discontinue providing our Services, we will notify you of such change by sending a notification,
              posting an announcement, or other means, and delete or anonymize your sensitive personal information within
              a reasonable period. “Anonymization” refers to the irreversible erasure or removal of sensitive personal
              information that leads to the information owner being identified. Any anonymized information shall not be
              considered as personal information.
            </p>
            <p>
              Your personal information collected from Mainland China will be stored in a location within Mainland China
              in accordance with applicable laws and regulations. If it is necessary to change the location where your
              personal information is stored from Mainland China to another location outside Mainland China, the
              information transfer will be conducted in strict compliance with applicable laws.
            </p>
            <p><strong>Right to Delete Information</strong></p>
            <p>We will delete, and you have the right to request the deletion of, your personal information if:</p>
            <p />
            <ul>
              <li>
                the purpose of processing such personal information has been achieved or is unable to be achieved, or
                the personal information is no longer necessary for achieving such purpose;
              </li>
              <li>we cease the provision of the Service, or the required information retention period has expired;</li>
              <li>relevant authorization or consent is withdrawn by you;</li>
              <li>
                the processing of personal information by us is in violation of any applicable law, regulations or
                agreement; or
              </li>
              <li>any other circumstances as provided by applicable laws or regulations.</li>
            </ul>
            <p />
            <p>
              If the information retention period prescribed by law has not expired, or it is technically difficult to
              delete the personal information, we will cease the processing of such personal information, except for
              storage and any necessary measure taken for security protection purpose.
            </p>
            <h4 id="ii">
              10. Online Privacy Choices and Rights
            </h4>
            <p><strong>Access, Edit and Delete Your Information.</strong></p>
            <p>
              If you are a resident of the European Economic Area, your rights to access, edit and delete your
              information can be found in the &quot;Information for Individuals in the European Economic
              Area&quot; section of this Privacy Policy. If you are a California resident, your rights to access, edit and
              delete can be found in the &quot;Information for Residents of California&quot; section of this Privacy
              Policy.
            </p>
            <p>
              If you are not a resident of the EEA or California, depending on your location, you may be able make
              requests to access, correct and/or delete certain personal information that you provide to us. For your
              protection, we may require proof and verification of identity and jurisdiction of residency before we can
              answer the above requests. If you wish to make such a request, you may contact us at the applicable mobile
              application support email indicated in the &quot;How to Contact Us&quot; section of this Privacy Policy. If
              we change or delete your personal information or if you decline to actively share certain personal
              information with us, we may not be able to provide to you our Services or some of the features and
              functionality of our Services. Once we have verified that you own the account, we will honor such requests
              at our discretion and in accordance with applicable law.
            </p>
            <p><strong>Device permissions</strong></p>
            <p>
              Mobile platforms have permission systems for specific types of device data and notifications, such as
              camera and microphone as well as push notifications. Where applicable, you can change your settings on your
              device to either consent or oppose the collection of the corresponding information or the display of the
              corresponding notifications. Of course, if you do that, certain Services may lose full functionality.
            </p>
            <p><strong>Uninstall</strong></p>
            <p>
              You can stop all information collection by the app by disabling call forwarding and deactivating your
              account by following the instructions on the Service&apos;s Settings screen and then uninstalling the app using
              the standard uninstall process for your device. If you uninstall the app from your mobile device, the unique
              identifier associated with your device will continue to be stored. If you re-install the application on the
              same mobile device, we will be able to re-associate this identifier to your previous transactions and
              activities.
            </p>
            <p><strong>Email</strong></p>
            <p>
              If you receive commercial email from us, you may unsubscribe at any time by following the instructions
              contained within the email. You may also opt-out from receiving commercial email from us, and any other
              promotional communications that we may send to you from time to time, by sending your request to us by the
              applicable mobile application support email indicated in the How to Contact Us section of this Privacy
              Policy. Please be aware that if you opt-out of receiving commercial email from us or otherwise modify the
              nature or frequency of promotional communications you receive from us, it may take up to ten business days
              for us to process your request, and you may receive promotional communications from us that you have
              opted-out from during that period. Additionally, even after you opt-out from receiving commercial messages
              from us, you will continue to receive transactional or administrative messages from us regarding the
              Services.
            </p>
            <p><strong>Location information</strong></p>
            <p>
              If you choose to opt-in, some of our apps may collect your device&apos;s precise real-time location, and in such
              cases, you may be able to opt out from further allowing us to have access to such location data by managing
              your location preferences in the app and/or on your device.
            </p>
            <p><strong>Notice to Nevada users</strong></p>
            <p>
              Under Nevada law, Nevada residents may opt out of the &quot;sale&quot; of certain &quot;covered
              information&quot; (as defined under Nevada law) collected by operators of websites or online services. We
              currently do not sell covered information, as &quot;sale&quot; is defined by Nevada law, and we do not have
              plans to sell this information. However, if you would like to be notified if we decide in the future to sell
              personal information covered by the Act, please contact us
              <a href="mailto:support@climeradar.com">here</a>
              .
              You are responsible for updating any change in your email address by the same method and we are not
              obligated to cross-reference other emails you may have otherwise provided us for other purposes. We will
              maintain this information and contact you if our practices change.
            </p>
            <p><strong>New Privacy Laws</strong></p>
            <p>
              We understand that privacy laws are constantly evolving. New US state laws (eg, Colorado, Virginia) and new
              international privacy laws (eg, Brazil&apos;s LGPD and China&apos;s PIPL) are consistently emerging, developing and
              being enacted. These new laws will help protect the rights of users located in those jurisdictions. We will
              respect all new privacy laws and will ensure that we are fully compliant with any new or emerging privacy
              law, rule or regulation.
            </p>
            <p><strong>International Transfers</strong></p>
            <p>
              Our Services are hosted in the United States. If you choose to use our Services from outside the United
              States, with laws governing data collection and use that may differ from United States law, note that you
              are transferring your personal information outside of those regions to the United States for storage and
              processing. We may transfer your data from the United States to other countries in connection with the
              storage and processing of data to operate our business. By using our Services and providing personal
              information, you consent to such transfer, storage and processing. If you are a resident of the EEA, you can
              learn more about transfers outside the EEA in the &quot;Information for Individuals in the European Economic
              Area&quot; section of this Privacy Policy.
            </p>
            <p><strong>Marketing Opt-Outs</strong></p>
            <p>
              You may choose whether to receive some Interest-based Advertising by submitting opt-outs. Some of the
              advertisers and Service Providers that perform advertising-related services for us and third parties may
              participate in the Digital Advertising Alliance&apos;s (&quot;DAA&quot;) Self-Regulatory Program for Online
              Behavioral Advertising. To learn more about how you can exercise certain choices regarding Interest-based
              Advertising, including use of Cross-device Data for serving ads,
              visit
              <strong><u>http://www.aboutads.info/choices/</u></strong>
              ,
              and
              <strong><u>http://www.aboutads.info/appchoices</u></strong>
              {' '}
              for information on the DAA&apos;s opt-out program
              specifically for mobile apps (including use of precise location for third party ads). Some of these
              companies may also be members of the Network Advertising Initiative (&quot;NAI&quot;). To learn more about
              the NAI and your opt-out options for their members,
              see
              <strong><u>http://www.networkadvertising.org/choices/</u></strong>
              . Please be aware that, even if you
              are able to opt out of certain kinds of Interest-based Advertising, you may continue to receive other types
              of ads. Opting out only means that those selected members should no longer deliver certain Interest-based
              Advertising to you but does not mean you will no longer receive any targeted content and/or ads (e.g., from
              other ad networks). Also, if your browsers are configured to reject cookies when you visit these opt-out
              webpages, or you subsequently erase your cookies, use a different device or web browser or use a
              non-browser-based method of access (e.g., mobile app), your NAI / DAA browser-based opt-out may not, or may
              no longer, be effective.
              {' '}
            </p>
            <p>
              For more information on our inbound advertising partners, click
              <a
                href="https://www.apalon.com/partners.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </p>
            <h4 id="j">
              11. Data Retention
            </h4>
            <p>
              Except as provided below, we may retain your personal information for the longer of three (3) years after
              we become aware that you have ceased using our Services or for so long as necessary to fulfill any
              contractual obligation governing the information or our legal and regulatory obligations. However, we may
              not know if you have stopped using our Services, so we encourage you to contact us at the appropriate
              support email in the How to Contact Us section of this Privacy Policy if you are no longer using the
              Services. We may retain other information that is not personally identifiable for backups, archiving,
              prevention of fraud and abuse, analytics, or where we otherwise reasonably believe that we have a legitimate
              reason to do so.
            </p>
            <h4 id="k">
              12. How We Protect Personal Information
            </h4>
            <p>
              We use various efforts intended to safeguard the security and integrity of personal information collected
              through our Services, against theft, improper use, unauthorized access, or leakage. Despite these measures,
              however, we cannot and do not guarantee that information will be absolutely safe from interception or
              intrusion during transmission or while stored on our system, or otherwise, and you provide information to us
              at your own risk.
            </p>
            <p>
              If you correspond with us by email, text message or using Web forms like a &quot;contact us&quot; feature
              available through our Services, you should be aware that your transmission might not be secure from access
              by unauthorized parties. We have no liability for disclosure of your information due to errors or
              unauthorized acts of third parties during or after transmission. If you create an account as part of using
              our Services, you are responsible for maintaining the confidentiality of your account password and for any
              activity that occurs under your
              <strong>account</strong>
              . Please notify us of any unauthorized use of your
              password or account.
            </p>
            <p>
              If we believe that the security of your personal information in our care may have been compromised, we may
              seek to notify you. If we have your email address, we may notify you by email to the most recent email
              address you have provided us in your account profile. Please keep your email address in your account up to
              date. You can change that email address anytime in your account profile. If you receive a notice from us,
              you can print it to retain a copy of it. To receive these notices, you must check your email account using
              your computer or mobile device and email application software. We may also post a conspicuous notice on our
              site or notify you through the mobile application. You consent to our use of email, text message and/or
              notification through the app as a means of such notification. If you prefer for us to use the postal service
              to notify you in this situation, please let us know by submitting your request
              <a
                href="mailto:support@climeradar.com"
              >
                here
              </a>
              . You can make this election any time, and it will apply to
              notifications we make after a reasonable time thereafter for us to process your request. You may also use
              this email address to request a print copy, at no charge, of an electronic notice we have sent to you
              regarding a compromise of your personal information.
            </p>
            <h4 id="l">
              13. Links to Websites and Third-Party Content
            </h4>
            <p>
              For your convenience and information, we may provide links to websites and other third-party content that
              is not owned or operated by us. The websites and third-party content to which we link may have separate
              privacy notices or policies. We are not responsible for the privacy practices of any entity that it does not
              own or control. We encourage you to review the privacy policies of such third parties before providing them
              with any personal information.
            </p>
            <h4 id="m">
              14. Information Relating to Children
            </h4>
            <p>
              We do not knowingly collect information from children under the age of 16 years old (or older if required
              in an applicable jurisdiction to comply with applicable laws). If you are not over 16 years old (or older if
              required in an applicable jurisdiction to comply with applicable laws) then
              <strong>
                DO NOT DOWNLOAD OR USE
                THE SERVICES
              </strong>
              . If you believe that we may have personal information from or about a child under
              the age of 16 years old, please contact us
              <a href="mailto:support@climeradar.com">here</a>
              . Note that we&apos;ll
              attempt to delete the account of any child under the age of 16 that&apos;s reported to us as soon as possible.
              You are responsible for any and all account activity conducted by a minor on your account.
            </p>
            <h4 id="n">
              15. Updates to Our Privacy Policy
            </h4>
            <p>
              We reserve the right to update this Privacy Policy to reflect changes in our practices and services. When
              we post changes to this Privacy Policy, we will update the date of this Privacy Policy. Continued use of the
              Services after such date constitutes acceptance of such updates. When required by applicable law, we may
              inform you by additional means, such as through a notification on the website or in our mobile applications
              if we make material changes to how your personal information is collected, accessed or otherwise used as a
              result of your use of the Services or if your rights under this Privacy Policy are materially impacted by
              changes to our privacy practices. We recommend that you check this page from time to time to inform yourself
              of any changes in this Privacy Policy.
            </p>
            <h4 id="o">
              16. How to Contact Us
            </h4>
            <p>Should you have any questions or comments, please email:</p>
            <ul>
              <li>
                <strong>For Clime:</strong>
                {' '}
                <a href="mailto:support@climeradar.com">support@climeradar.com</a>
              </li>
              <li>
                <strong>For PlanesLive:</strong>
                {' '}
                <a href="mailto:support@planeslive.com">support@planeslive.com</a>
              </li>
            </ul>
            <p>You may also contact us by postal mail:</p>
            <p>
              Clime Weather Services, LLC
              <br />
              555 West 18th Street,
              <br />
              New York, NY 10011
              <i>Attention:</i>
              {' '}
              Legal Department
            </p>
            <p>
              If you have any questions relating to privacy or if you wish to exercise a legal right under applicable
              privacy law, please contact us
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/85ba16a2-9811-439f-a163-e40c176cbc14.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              {' '}
              (for EEA residents) or
              <a
                href="https://privacyportal-cdn.onetrust.com/dsarwebform/982b0a23-3053-4df0-9089-7ce3acd59c8d/d1a38f12-c4a3-412c-907a-4c1b2d5237f4.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              {' '}
              (for California residents). In addition, California residents may reach us by
              mail at the address detailed above. European users, please note that our representative is IAC Search and
              Media Europe Limited, 10 Earlsfort Terrace, Dublin 2, Ireland. If you live in the EEA, you may also file a
              complaint with the competent data protection regulator.
            </p>
            <p>All other queries should be emailed to:</p>
            <ul>
              <li>
                <strong>For Clime:</strong>
                {' '}
                <a href="mailto:support@climeradar.com">support@climeradar.com</a>
              </li>
              <li>
                <strong>For PlanesLive:</strong>
                {' '}
                <a href="mailto:support@planeslive.com">support@planeslive.com</a>
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}
