import { useEffect, useState } from "react";

export default function DonationCard({ title, price, img }) {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 768 ? true : false
  );

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 768 ? true : false);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <li className="w-full">
      <button className="donation-card group">
        <div>
          <p className="title-28 text-[var(--color-gray-1)] group-hover:text-[var(--color-primary-3)]">
            {title} |{" "}
            {typeof price !== typeof "" ? (
              <span className="text-[var(--color-gray-3)] text-base leading-[1.75] group-hover:text-[var(--color-primary-5)]">
                {" "}
                NT${" "}
              </span>
            ) : (
              <></>
            )}
            {price}
          </p>
          <p className="bg-[var(--color-primary-4)] rounded-[var(--sp-2)] px-[var(--sp-3)] py-[var(--sp-2)] mt-[var(--sp-3)] text-[var(--color-gray-1)]">
            已有 2,000 人贊助
          </p>
        </div>
        {isDesktop ? img : <></>}
      </button>
    </li>
  );
}
