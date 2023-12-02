import MainDashboard from "../../components/private/Panel/Dashboard";
import Footer from "../../components/private/Panel/Footer";
import Navigation from "../../components/private/Panel/Navigation";
import Sidebar from "../../components/private/Panel/Sidebar";

export default function ShowDashboard(){
    return (
        <>
        <Navigation/>
        <Sidebar/>
        <MainDashboard />
        <Footer />
        </>

    )
}