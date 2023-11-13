export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="w-[264px]">
      <p className="text-[var(--color-primary-1)] display mb-[var(--sp-2)]">{title}</p>
      <p className="text-[var(--color-primary-1)] subtitle">{subtitle}</p>
    </div>
  );
}
