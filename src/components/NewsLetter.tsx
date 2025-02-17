function NewsLetter() {
  return (
    <section id="newsletter" className="py-20">
      <div className="md:max-w-7xl mx-auto flex flex-col justify-center gap-10">
        <div className="font-bold text-center space-y-3">
          <h3 className="uppercase text-blue-600 font-extrabold">
            Our Newsletter
          </h3>
          <h1 className="text-3xl md:text-5xl">Subscribe To Our Newsletter</h1>
          <div className="font-medium max-w-lg mx-auto">
            Stay updated with our latest news, exclusive offers, and insightful
            articles delivered directly to your inbox.
          </div>
        </div>

        {/*email form  */}
        <form>
          <div className="relative max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="pl-4 pr-28 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none font-medium focus:ring-2 focus:ring-blue-600 w-full shadow"
            />
            <button className="absolute right-2 text-sm font-medium text-white px-3 bg-blue-500 rounded-lg h-[75%] top-1/2 hover:bg-blue-600 transition-all duration-300 ease-in-out -translate-y-1/2">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
