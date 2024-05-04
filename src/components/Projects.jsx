const Projects = () => {
  return (
    <section className="flex flex-col mt-20 mb-5 gap-y-12">
      <h2 className="text-2xl md:text-5xl text-center text-orange-600">Naše Nedávné Projekty​</h2>
      <p className="text-2xl text-center">Fotografie z některých realizovaných projektů.</p>
      <div className='grid grid-cols1 md:grid-cols-3 gap-5'>
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/IMG_20190622_161500-1.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/IMG_20190622_161200.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/IMG_20190622_161003.jpg'
          alt=''
        />
        <img
          className='w-full max-h-[260px] h-full object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/img1.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/eurokvalit_reference013.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px]  object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/IMG_20190622_161500-1.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/20190411_130307.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/IMG_20190622_161500-1.jpg'
          alt=''
        />
        <img
          className='w-full h-[260px] object-cover'
          src='https://www.eurokvalit.eu/wp-content/uploads/2019/12/IMG_20190622_161500-1.jpg'
          alt=''
        />
      </div>
    </section>
  );
}
export default Projects