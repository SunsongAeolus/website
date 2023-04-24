import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Privacy() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-gray-900 py-24 px-6 text-gray-400 sm:py-32 lg:px-8">
        <div className="lg:w-3/5 text-left">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-6 text-base leading-7">Updated on 2023-03-06</p>
          <p className="mt-6 text-base leading-7">
            We at Sunsong Aeolus Culture Co., Ltd. (together with our
            affiliates, “SunsongAeolus”, “we”, “our” or “us”) respect your
            privacy and are strongly committed to keeping secure any information
            we obtain from you or about you. This Privacy Policy describes our
            practices with respect to Personal Information we collect from or
            about you when you access Chatfloat and its affiliates’ websites
            (collectively, the “Site”), or use ByteAI and its affiliates’
            products and services, including application programming interfaces,
            associated software, tools, developer services, data and
            documentation (collectively, the “Services”).
          </p>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            1. Personal information we collect
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>
              We collect information that alone or in combination with other
              information in our possession could be used to identify you
              (“Personal Information”) as follows:
            </p>
            <p>
              Personal Information You Provide: We may collect Personal
              Information if you create an account to use our Services or
              communicate with us as follows.
            </p>
            <p>
              Communication Information: If you communicate with us, we may
              collect your name, contact information, and the contents of any
              messages you send (“Communication Information”).
            </p>
            <p>
              Personal Information We Collect Through Our Social Media Pages: We
              have pages on social media sites like Instagram, Facebook, Medium,
              Twitter, YouTube and LinkedIn (“Social Media Pages”). When you
              interact with our Social Media Pages, we will collect Personal
              Information that you elect to provide to us, such as your contact
              details (“Social Information”). In addition, the companies that
              host our Social Media Pages may provide us with aggregate
              information and analytics regarding the use of our Social Media
              Pages.
            </p>
            <p>
              Log Data: Information that your browser automatically sends
              whenever you visit the Site (“log data”). Log data includes your
              Internet Protocol address, browser type and settings, the date and
              time of your request, and how you interacted with the Site.
            </p>
            <p>
              Usage Data: We may automatically collect information about your
              use of the Services, such as the types of content that you view or
              engage with, the features you use and the actions you take, as
              well as your time zone, country, the dates and times of access,
              user agent and version, type of computer or mobile device,
              computer connection, IP address, and the like.
            </p>
            <p>
              Device Information: Includes name of the device, operating system,
              and browser you are using. Information collected may depend on the
              type of device you use and its settings.
            </p>
            <p>
              Cookies: We use cookies to operate and administer our Site and
              Services, and improve your experience on it. A “cookie” is a piece
              of information sent to your browser by a website you visit. You
              can set your browser to accept all cookies, to reject all cookies,
              or to notify you whenever a cookie is offered so that you can
              decide each time whether to accept it. However, refusing a cookie
              may in some cases preclude you from using, or negatively affect
              the display or function of, a website or certain areas or features
              of a website. For more details on cookies please visit{" "}
              <Link href="https://allaboutcookies.org/">All About Cookies</Link>
              .
            </p>
            <p>
              Analytics: We may use a variety of online analytics products that
              use cookies to help us analyze how users use the Site and Services
              and enhance your experience when you use the Site and Services.
            </p>
            <p>
              Online Tracking and Do Not Track Signals: We and our third party
              service providers may use cookies or other tracking technologies
              to collect information about your browsing activities over time
              and across different websites following your use of the Site. Our
              Site currently does not respond to “Do Not Track” (“DNT”) signals
              and operates as described in this Privacy Policy whether or not a
              DNT signal is received.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            2. How we use personal information
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>We may use Personal Information for the following purposes:</p>
            <ul>
              <li>
                To provide, administer, maintain, improve and/or analyze the
                Services;
              </li>
              <li>
                To prevent fraud, criminal activity, or misuses of our Services,
                and to ensure the security of our IT systems, architecture, and
                networks; and
              </li>
              <li>
                To comply with legal obligations and legal process and to
                protect our rights, privacy, safety, or property, and/or that of
                our affiliates, you, or other third parties.
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            3. Sharing and disclosure of personal information
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>
              In certain circumstances we may share your Personal Information
              with third parties without further notice to you, unless required
              by the law, including without limitation in the situations below:
            </p>
            <ul className="space-y-3">
              <li>
                Business Transfers: If we are involved in strategic
                transactions, reorganization, bankruptcy, receivership, or
                transition of service to another provider (collectively a
                “Transaction”), your Personal Information and other information
                may be shared in the diligence process with counterparties and
                others assisting with the Transaction and transferred to a
                successor or affiliate as part of that Transaction along with
                other assets.
              </li>
              <li>
                Legal Requirements: If required to do so by law or in the good
                faith belief that such action is necessary to (i) comply with a
                legal obligation, including to meet national security or law
                enforcement requirements, (ii) protect and defend our rights or
                property, (iii) prevent fraud, (iv) act in urgent circumstances
                to protect the personal safety of users of the Services, or the
                public, or (v) protect against legal liability.
              </li>
              <li>
                Affiliates: We may share Personal Information with our
                affiliates, meaning an entity that controls, is controlled by,
                or is under common control with SunsongAeolus. Our affiliates
                may use the Personal Information we share in a manner consistent
                with this Privacy Policy.
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            4. How to contact us; updating your information
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>
              Please contact us at{" "}
              <Link href="mailto:support@bytefloat.email" className="underline">
                support@bytefloat.email
              </Link>{" "}
              if you need to change or correct your Personal Information, or if
              you have any questions or concerns not already addressed in this
              Privacy Policy.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            5. Children
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>
              Our Service is not directed to children who are under the age of
              16. We does not knowingly collect Personal Information from
              children under the age of 16. If you have reason to believe that a
              child under the age of 16 has provided Personal Information to us
              through the Service please email us at{" "}
              <Link href="mailto:support@bytefloat.email" className="underline">
                support@bytefloat.email
              </Link>{" "}
              and we will endeavor to delete that information from our
              databases.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            6. Links to other websites
          </h2>
          <div className="mt-6 text-base leading-7">
            <p>
              The Service may contain links to other websites not operated or
              controlled by SunsongAeolus, including social media services
              (“Third Party Sites”). The information that you share with Third
              Party Sites will be governed by the specific privacy policies and
              terms of service of the Third Party Sites and not by this Privacy
              Policy. By providing these links we do not imply that we endorse
              or have reviewed these sites. Please contact the Third Party Sites
              directly for information on their privacy practices and policies.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            7. Security
          </h2>
          <div className="mt-6 text-base leading-7">
            <p>
              You use the Service at your own risk. We implement commercially
              reasonable technical, administrative, and organizational measures
              to protect Personal Information both online and offline from loss,
              misuse, and unauthorized access, disclosure, alteration, or
              destruction. However, no Internet or e-mail transmission is ever
              fully secure or error free. In particular, e-mail sent to or from
              us may not be secure. Therefore, you should take special care in
              deciding what information you send to us via the Service or
              e-mail. In addition, we are not responsible for circumvention of
              any privacy settings or security measures contained on the
              Service, or third party websites.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            8. International users
          </h2>
          <div className="mt-6 text-base leading-7">
            <p>
              By using our service, you acknowledge and understand that we may
              transfer your data to our facilities and servers located in our
              global infrastructure, based on the reasonable proximity of our
              data centers.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            9. Your choices
          </h2>
          <div className="mt-6 text-base leading-7">
            <p>
              If you choose not to provide Personal Information that is needed
              to use some features of our Service, you may be unable to use
              those features.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            10. Updates to this Privacy Policy
          </h2>
          <div className="mt-6 text-base leading-7">
            <p>
              We may change this Privacy Policy at any time. When we do we will
              post an updated version on this page, unless another type of
              notice is required by applicable law. By continuing to use our
              Service or providing us with Personal Information after we have
              posted an updated Privacy Policy, or notified you by other means,
              you consent to the revised Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Privacy;
