import Header from './header'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 mx-6 sm:mx-12 md:mx-24 my-6 sm:my-12 md:my-24">{props.children}</main>

      <Footer />
    </div>
  )
}
