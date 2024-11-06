import Link from "next/link";

export default function Products() {
  return (
    <div className="">
      <Link
        href="products/new"
        className="bg-cyan-800 flex w-max p-4 pr-6 rounded-lg text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add new product
      </Link>
    </div>
  );
}
