import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-gray-900 py-24 px-6 text-gray-400 sm:py-32 lg:px-8">
        <div className="text-left lg:w-3/5">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Terms of use
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Updated on 2023-04-24
          </p>

          <p className="mt-6 text-base leading-7">
            Although all the clauses contained in this agreement are standard
            clauses about software products, it is advised that you read them
            entirely.
          </p>

          <p className="mt-6 text-base leading-7">
            This End-User License Agreement (&quot;EULA&quot;) constitutes an
            agreement between you and Sunsong Aeolus Culture Co., Ltd. (herein
            referred to as the &quot;Owner&quot;) with regard to the{" "}
            <b>Chatfloat</b> application for Mobile Phones (herein referred to
            as &quot;Software Product&quot; or &quot;Software&quot;). By
            installing the Software, you are agreeing to be bound by the terms
            of this license agreement.
          </p>

          <p className="mt-6 text-base leading-7">
            Your use of the Software (as specified below) is subject to the
            terms and conditions set forth in this EULA. If you do not accept
            the terms of this EULA, do not install or use the Software.
          </p>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            1. Service Description
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>
              The App provides Chat AI features, offering users real-time online
              communication, Q&A, and intelligent recommendations. The App
              includes Pro and Unlimited subscription services to meet the needs
              of different users.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            2. User Eligibility
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p className="mt-6 text-base leading-7">
              Since the App does not provide user registration features, any
              individual aged 13 years or older can use the App directly. If you
              are under 13 years of age, please use the App under the
              supervision of a guardian.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            3. Service Subscription
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <p>
              The App offers two subscription services: Pro and Unlimited. For
              specific pricing and service content, please refer to the relevant
              descriptions within the App.
            </p>
            <ul className="ist-decimal list-inside space-y-3">
              <li>
                Subscription services take effect from the date of subscription
                and are automatically renewed monthly or annually until you
                actively cancel the subscription.
              </li>
              <li>
                Cancellation: You can cancel your subscription at any time
                before the end of the subscription period. Once canceled, your
                subscription service will terminate at the end of the current
                subscription period. After canceling, you will no longer be able
                to use the subscribed services, and fees already paid will not
                be refunded.
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            4. Intellectual Property
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <ul className="ist-decimal list-inside space-y-3">
              <li>
                <p>
                  All content in the App, including but not limited to text,
                  images, audio, video, software, code, user interfaces, etc.,
                  is protected by copyright, trademark, patent, and other
                  intellectual property laws. You may not use, copy,
                  disseminate, publish, modify, translate, reproduce, compile,
                  post, sell or otherwise exploit such content without our
                  express authorization.
                </p>
              </li>
              <li>
                <p>
                  Chatfloat is a registered trademark of SunsongAeolus Culture
                  Co., Ltd. You may not use, copy, disseminate or otherwise
                  exploit the trademark without the express authorization of
                  Bytefloat Inc.
                </p>
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            5. User Conduct
          </h2>
          <div className="mt-6 space-y-6 text-base leading-7">
            <ul className="ist-decimal list-inside space-y-3">
              <li>
                <p>
                  When using the App, you shall comply with national laws and
                  regulations and may not use the App for any illegal or
                  criminal activities.
                </p>
              </li>
              <li>
                <p>
                  You may not use the App to infringe on the intellectual
                  property rights, privacy rights, or other lawful rights and
                  interests of others.
                </p>
              </li>
              <li>
                <p>
                  You may not use the App to publish, disseminate, or store
                  information containing the following content:
                </p>
                <ul>
                  <li>
                    Information that violates national laws, regulations,
                    policies, and other provisions;
                  </li>
                  <li>
                    Information involving state secrets, national security,
                    social stability, and other aspects;
                  </li>
                  <li>
                    Malicious attacks, insults, defamation, or infringement of
                    the legitimate rights and interests of others;
                  </li>
                  <li>
                    Obscene, pornographic, gambling, violent, murderous,
                    terroristic, or crime-inciting content;
                  </li>
                  <li>
                    Racial, religious, or regional discrimination and other
                    discriminatory information;
                  </li>
                  <li>
                    False, fraudulent, misleading, or harmful information to the
                    interests of others;
                  </li>
                  <li>
                    Information containing malicious software, viruses, or other
                    harmful content to computer information network security;
                  </li>
                  <li>
                    Any other information that violates public order and good
                    morals or may cause harm to others.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            6. Privacy Policy
          </h2>
          <div className="mt-6 text-base leading-7">
            <ul className="list-inside list-decimal space-y-3">
              <li>
                <p>
                  When you use the App, we will collect, store, use, and protect
                  your personal information in accordance with the privacy
                  policy of the App. Please make sure to read the{" "}
                  <Link href="#">Chatfloat Privacy Policy</Link> to understand
                  how we handle your personal information.
                </p>
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            7. Disclaimer
          </h2>
          <div className=" mt-6 text-base leading-7">
            <ul className="list-inside list-decimal space-y-3">
              <li>
                <p>
                  The use of the App and the services provided rely on internet
                  technology, and therefore, there may be risks of service
                  interruption or unavailability due to network failure, system
                  failure, server failure, communication failure, and other
                  reasons. In such cases, we will do our best to restore the
                  service, but we shall not be liable for any losses caused to
                  you.
                </p>
              </li>
              <li>
                <p>
                  We make no express or implied warranties for the services
                  provided by the App, including but not limited to
                  merchantability, suitability for a particular purpose, and
                  non-infringement. You understand and agree that the risk of
                  using the App and its services shall be borne by you.
                </p>
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            8. Revisions and Termination
          </h2>
          <div className="mt-6 text-base leading-7">
            <p>
              We reserve the right to modify, update or terminate these Terms at
              any time. If the Terms are changed, we will post the latest
              version within the App and indicate the latest update date. Your
              continued use of the App constitutes your agreement to accept the
              amended Terms. If you do not agree with the amended Terms, please
              stop using the App immediately.
            </p>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            9. Applicable Law and Jurisdiction
          </h2>
          <div className="mt-6 text-base leading-7">
            <ul className="ist-decimal list-inside space-y-3">
              <li>
                <p>
                  The interpretation and application of these Terms, as well as
                  disputes related to these Terms, shall be governed by the laws
                  of the Peoples Republic of China (excluding the laws of Hong
                  Kong, Macao, and Taiwan). In case of conflict between these
                  Terms and the laws of the Peoples Republic of China, the
                  relevant provisions shall be reinterpreted according to the
                  laws, and the legal effect of other provisions shall remain
                  valid. You agree that disputes related to these Terms shall
                  first be resolved through friendly negotiations; if
                  negotiations fail, you agree to submit the dispute to the
                  competent Peoples Court of our domicile for litigation.
                </p>
              </li>
            </ul>
          </div>

          <h2 className="mt-6 font-bold tracking-tight text-gray-300">
            10. Miscellaneous
          </h2>
          <div className="mt-6 text-base leading-7">
            <ul className="ist-decimal list-inside space-y-3">
              <li>
                <p>
                  If any part of these Terms is determined to be invalid or
                  unenforceable, that part shall be deemed deleted, and the
                  remaining parts shall continue to have full legal effect.{" "}
                </p>
              </li>
              <li>
                The headings of these Terms are provided for convenience only
                and do not have legal or contractual effect.
              </li>
              <li>
                If you have any questions about these Terms or the App, please
                contact us through the contact information provided.
              </li>
            </ul>

            <p className="mt-6 text-base leading-7">
              Thank you for using Chatfloat! Please follow these Terms of Use to
              ensure a safe and compliant use environment during your
              experience.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default TermsOfUse;
