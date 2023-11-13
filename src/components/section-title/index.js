export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mr-[calc(var(--sp-2)*9)]">
      <p className="text-[var(--color-primary-1)] display mb-[var(--sp-2)]">
        {title}
      </p>
      <p className="text-[var(--color-primary-1)] subtitle">{subtitle}</p>
    </div>
  );
}
