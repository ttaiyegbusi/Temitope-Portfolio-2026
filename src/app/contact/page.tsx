export default function ContactPage() {
  return (
    <main className="w-full max-w-[800px] mx-auto px-5 md:px-6 pt-20 md:pt-28 pb-28 md:pb-32">
      <h1 className="text-xl font-normal text-black mb-8">Get in Touch</h1>
      <div className="flex flex-col gap-6">
        <p className="text-base font-normal text-text-sub leading-normal">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:aiyegbusitope@gmail.com"
            className="text-base text-black underline underline-offset-4 hover:text-text-sub transition-colors"
          >
            aiyegbusitope@gmail.com
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-soft hover:text-black transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-soft hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-soft hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
