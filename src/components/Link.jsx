export const Link = ({ icon, title, link = "" }) => {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      <img src={icon} alt={icon} className="w-5 h-5 object-cover" />
      <a className="hover:underline" href={link}>
        {title}
      </a>
    </div>
  );
};
