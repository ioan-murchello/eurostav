const Title = ({ title, bg, children }) => {
  return (
    <div
      className={`flex justify-center flex-col items-end p-10 sm:p-20 text-3xl sm:text-5xl capitalize text-white`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '300px',
        width: '100%',
        filter: 'brightess(150%)',
      }}
    >
      <div className='p-10 pl-32 bg-slate-500/50'>{title}</div>
      <div className=" w-full text-center">{children}</div>
    </div>
  );
};
export default Title;
