import BookCard from "@/components/Book/BookCard";
import { FiBookOpen, FiShield, FiStar } from "react-icons/fi";

const Home = async () => {
  const response = await fetch(
    "https://assignment-8-openshelf-library.vercel.app/book-data.json",
  );
  const booksData = await response.json();
  return (
    <div className="min-h-screen py-14">
      <section>
        <div className="mb-10 text-center">
             <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f3d66] md:text-sm">
            Book
          </p>
            <h1 className="mt-3 text-3xl font-extrabold text-[#1f5d99] md:text-4xl lg:text-5xl">
            Featured Books
          </h1>
        </div>
        <div className="grid grid-cols-1 p-7 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 lg:p-4">
          {booksData.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="py-21 px-6 bg-base-200 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-base-content/60 mt-3 max-w-xl mx-auto">
            Experience the best digital library platform with premium features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <FiBookOpen size={32} />
            </div>
            <h3 className="font-bold text-xl">Vast Collection</h3>
            <p className="text-sm text-base-content/70">
              Access thousands of books from various genres.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-secondary/10 rounded-full text-secondary">
              <FiStar size={32} />
            </div>
            <h3 className="font-bold text-xl">Top Rated</h3>
            <p className="text-sm text-base-content/70">
              Read the most popular and highly rated titles.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-accent/10 rounded-full text-accent">
              <FiShield size={32} />
            </div>
            <h3 className="font-bold text-xl">Secure Borrowing</h3>
            <p className="text-sm text-base-content/70">
              Your data and reading history are safe with us.
            </p>
          </div>
        </div>
      </section>


        <section className="hero bg-linear-to-br from-primary to-secondary rounded-3xl text-primary-content shadow-xl border-2 py-19">
        <div className="hero-content text-center flex-col">
          <h2 className="text-3xl font-bold">Stay Updated!</h2>
          <p className="max-w-md mx-auto my-4 text-primary-content/80">
            Subscribe to our newsletter to get updates on new arrivals and
            exclusive offers.
          </p>
          <div className="join w-full max-w-sm flex gap-1 mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered join-item w-full text-base-content"
            />
            <button className="inline-flex items-center justify-center rounded-xl bg-[#1f5d99] px-5 py-3 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:px-6 md:text-base">
            Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;