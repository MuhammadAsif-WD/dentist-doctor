import React from "react";

const Blogs = () => {
  return (
    <section className="text-white bg-slate-500">
      <h1 className="gap-2 pt-3 text-center underline">Question Answer</h1>
      <div className="pt-3 text-center">
        <h4>First Question Answer</h4>
        <h4 className="text-xs xl:text-4xl">
          Question: Difference between authorization and authentication
        </h4>
      </div>
      <div className="grid gap-4 text-white xl:p-10 xl:grid-cols-2 bg-slate-500">
        <div className="p-3 border-4 rounded-xl">
          <h1>Authentication</h1>
          <ul>
            <li>Authentication verifies who the user is.</li>
            <li>
              Authentication works through passwords, one-time pins, biometric
              information, and other information provided or entered by the
              user.
            </li>
            <li>
              Authentication is the first step of a good identity and access
              management process.
            </li>
            <li>
              Authentication is visible to and partially changeable by the user.
            </li>
          </ul>
        </div>
        <div className="p-3 border-4 rounded-xl">
          <h1>Authorization</h1>
          <ul>
            <li>Authorization determines what resources a user can access.</li>
            <li>
              Authorization works through settings that are implemented and
              maintained by the organization.
            </li>
            <li>Authorization always takes place after authentication.</li>
            <li>Authorization isn’t visible to or changeable by the user.</li>
          </ul>
        </div>
      </div>
      <div className="pt-3 text-center">
        <h4>Second Question Answer</h4>
        <h4 className="text-xs xl:text-xl">
          Question: Why are you using firebase? What other options do you have
          to implement authentication?
        </h4>
      </div>
      <div className="grid xl:p-5 xl:gap-4 xl:grid-cols-2">
        <div className="p-3 border-4 rounded-xl">
          <h1>Why are you using firebase?</h1>
          <p>
            Firebase helps you build and run successful apps. Backed by Google,
            loved by developers. Accelerate app development with fully managed
            backend infrastructure. Learn more today. Release Apps Confidently.
            Customize Your App. Boost App Engagement. Backed by Google.
          </p>
        </div>
        <div className="p-3 border-4 rounded-xl">
          <h1 className="text-sm">
            What other options do you have to implement authentication?
          </h1>
          <p>
            In addition to Firebase, there are many other sites that help us in
            user authentication and I have tried to name a few websites that are
            worth mentioning.
          </p>

          <ul>
            <li>Parse – Open Source Backend Platform;</li>
            <li></li>
            <li>Back4app – Parse Hosting Platform;</li>
            <li>
              Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
            </li>
            <li>Backendless – Mobile Backend and API Services Platform;</li>
            <li>
              Kuzzle – Backend for web, hybrid, or native mobile apps and IoT
              projects;
            </li>
            <li>Pubnub – Real-time APIs and Global Messaging;</li>
            <li>Kumulos – App Performance Management;</li>
            <li>Game Sparks – Game Backend Platform;</li>
            <li>
              Hoodie – Generic backend with a client API for Offline First
              applications;
            </li>
            <li>Appwrite – Open-Source backend for Flutter developers</li>
          </ul>
        </div>
      </div>
      <div className="pt-3 text-center">
        <h4>Third Question Answer</h4>
        <h4 className="text-sm">
          Question: What other services does firebase provide other than
          authentication
        </h4>
      </div>
      <div className="p-2 border-4 shadow-lg xl:p-3 xl:mt-20 xl:ml-20 xl:mr-20">
        <div>
          <h3 className="text-sm">
            Something worth mentioning is that Firebus provides us with more
            than just authentication
          </h3>
          <ul>
            <li>
              Cloud Firestore. Build serverless, secure apps at global scale.
              ...
            </li>
            <li>
              Realtime Database. Build serverless apps by storing and syncing
              JSON data between
            </li>
            <li>
              your users in near-realtime, on or offline, with strong user-based
              security. ...
            </li>
            <li>Remote Config. ...</li>
            <li>Cloud Functions. ...</li>
            <li>Cloud Messaging. ...</li>
            <li>Hosting.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
