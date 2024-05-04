const Footer = () => {
    const date = new Date().getFullYear()

  return (
    <footer className="bg-gray-400 p-8">
        <p className="text-md md:text-xl text-center text-white">Copyright {date} EuroStav.cz | Powered by MJ</p>
    </footer>
  )
}
export default Footer