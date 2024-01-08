import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { sendEmail } from "../email";
import { useState } from "react";

export default function Contact() {
  const [emailResp, setEmailResp] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendEmail(e.target);
    await setEmailResp(response);
    await setLoading(false);
    await e.target.reset();
  };
  return (
    <section className="bg-laptop min-h-screen bg-no-repeat bg-cover md:bg-cover bg-center bg-fixed dark:bg-gray-900 fade-in">
      <div className="dark:bg-gray-900 md:dark:bg-gray-900/75 pt-28 flex items-center min-h-screen">
        <div
          id="contact"
          className="md:w-3/4 md:mx-auto dark:bg-gray-900 bg-slate-100/75 md:py-20 flex flex-col items-center justify-center p-4 md:p-20 gap-3 md:gap-5 md:shadow-black/50 md:shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="flex flex-col w-full items-center md:items-start md:w-1/2 gap-3 md:gap-7 ">
              <p className="font-sans dark:text-white font-normal text-3xl md:text-4xl">
                Get In Touch
              </p>
              <p className="dark:text-white/75 font-sans text-lg md:text-xl">
                I'm always interested in hearing about new projects, so if you'd
                like to chat please get in touch.
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <div>
                    <label
                      htmlFor="name"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Hammad"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Hammad@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Write your thoughts here..."
                    required
                  ></textarea>
                </div>
                {emailResp &&
                  (emailResp == 200 ? (
                    <div
                      className="p-4 text-center mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                      role="alert"
                    >
                      <span className="font-medium">Success!</span> Your message
                      has been received
                    </div>
                  ) : (
                    <div
                      class="p-4 text-center mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                      role="alert"
                    >
                      <span class="font-medium">Fail!</span> Your message could
                      not be received.
                    </div>
                  ))}
                <button
                  type="submit"
                  className="relative w-full inline-flex items-center justify-center  overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 p-1"
                  disabled={loading}
                >
                  <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent md:bg-white dark:bg-gray-600 md:group-hover:bg-opacity-0">
                    Send
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div>
            <address>
              <ul className="flex gap-5 dark:text-white text-slate-800 text-xl md:text-2xl">
                <li>
                  <a href="https://twitter.com/hamidazim321">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hamid-azim">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hamidazim321">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
