export const galleryData = async () => {
  const response = await fetch(
    "https://assignment-8-openshelf-library-o4liof8l5-reachme1.vercel.app/book-data.json",
  );
  const booksData = await response.json();
  return booksData;
};

export const categoryData = async () => {
  const categoriesResponse = await fetch(
    "https://assignment-8-openshelf-library.vercel.app/bookCategory.json",
  );
  return await categoriesResponse.json();
};