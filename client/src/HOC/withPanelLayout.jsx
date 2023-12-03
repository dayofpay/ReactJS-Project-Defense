import Titlebar from "../components/private/Panel/Titlebar"
import Navigation from "../components/private/Panel/Navigation"
import Sidebar from "../components/private/Panel/Sidebar"
import Footer from "../components/private/Panel/Footer"
const WithPanelLayout = ({children}) => {
    return (
        <>
        <Navigation />
        <Sidebar />
        <Titlebar />
        {children}
        <Footer />
      </>
    )
}
export default WithPanelLayout;