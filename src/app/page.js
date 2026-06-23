import BookCard from "@/components/Book/BookCard";

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
    </div>
  );
};

export default Home;