import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <h3>Please check the correct page</h3>
      <Link href="/">Click for Home</Link>
    </div>
  );
};
export default PageNotFound;
