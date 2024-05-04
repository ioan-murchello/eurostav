const Title = ({ title, bg }) => {
  return (
    <div
      className={`flex justify-end items-end p-10 sm:p-20 text-3xl sm:text-5xl capitalize text-white`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        filter: 'brightess(150%)',
      }}
    >
      <div className="p-10 pl-32 bg-slate-500/50">{title}</div>
    </div>
  );
};
export default Title;
