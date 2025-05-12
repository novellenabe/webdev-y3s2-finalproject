export default function Footer() {
  return (
    <footer className="flex justify-center flex-col bg-white">
      <hr className="border-slate-200" />
      <section className="mx-2 justify-center flex items-center py-5">
        <div className="p-2 grid grid-rows-2 grid-rows-[auto_auto] grid-cols-0 md:grid-cols-2 md:grid-rows-0 max-w-320 w-full gap-10 md:gap-0">
          <div className="w-full row-start-1 md:row-start-1 md:col-start-1 flex flex-col items-center md:items-start">
            <span className="text-3xl inline-block text-blue-500 font-bold py-1">
              Culinary Compass
            </span>
            <p className="font-serif text-xl text-slate-800 py-1">
              Ready to cook?
            </p>
          </div>
          <div className="w-full row-start-2 md:row-start-1 md:col-start-2 flex flex-col items-center md:items-start">
            <div className="flex flex-row gap-10 md:gap-7">
              <ul>
                <li className="pl-2 py-2">
                  <a href="#" className="text-sm text-blue-600 font-bold py-3">
                    RECIPES
                  </a>
                </li>
                <li className="pl-2 py-2">
                  <a href="#" className="text-sm text-blue-600 font-bold py-3">
                    QUICK & EASY
                  </a>
                </li>
                <li className="pl-2 py-2">
                  <a href="#" className="text-sm text-blue-600 font-bold py-3">
                    IN THE KITCHEN
                  </a>
                </li>
                <li className="pl-2 py-2">
                  <a href="#" className="text-sm text-blue-600 font-bold py-3">
                    BUYING GUIDES
                  </a>
                </li>
                <li className="pl-2 py-2">
                  <a href="#" className="text-sm text-blue-600 font-bold py-3">
                    HOLIDAYS & SEASONS
                  </a>
                </li>
              </ul>

              <div className="flex flex-col md:flex-row gap-0 md:gap-7">
                <ul>
                  <li className="pl-2 py-2">
                    <a href="#" className="text-xs text-slate-400 py-3">
                      About Us
                    </a>
                  </li>
                  <li className="pl-2 py-2">
                    <a href="#" className="text-xs text-slate-400 py-3">
                      Terms of Service
                    </a>
                  </li>
                  <li className="pl-2 py-2">
                    <a href="#" className="text-xs text-slate-400 py-3">
                      Privacy POlicy
                    </a>
                  </li>
                </ul>

                <ul>
                  <li className="pl-2  py-2">
                    <a href="#" className="text-xs text-slate-400 py-3">
                      Contact
                    </a>
                  </li>
                  <li className="pl-2 py-2">
                    <a href="#" className="text-xs text-slate-400 py-3">
                      Advertise
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section>
        <div className="p-5 justify-center flex items-center flex-col">
          <span className="font-bold text-center">
            © 2025 Jaime Manolo C. Cortes & Albert Novell Enabe
          </span>
        </div>
      </section>
    </footer>
  );
}
