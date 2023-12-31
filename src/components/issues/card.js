export default function IssueCard({ img, title, content }) {
  return (
    <li className="issue-card">
      <div className="z-20">{img}</div>
      <p className="title-28 z-20">{title}</p>
      <p className="text-center z-20">{content}</p>
      <div className="absolute z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="234"
          height="125"
          viewBox="0 0 234 125"
          fill="none"
        >
          <ellipse
            cx="120"
            cy="55"
            rx="120"
            ry="55"
            transform="matrix(0.965926 -0.258819 0.205104 0.97874 -10 40)"
            fill="#D1FA31"
          />
        </svg>
      </div>
    </li>
  );
}
