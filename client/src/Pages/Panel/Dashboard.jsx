import WithPanelLayout from "../../HOC/withPanelLayout";
import MainDashboard from "../../components/private/Panel/Dashboard";

export default function ShowDashboard(){
    return (
        <WithPanelLayout>
        <MainDashboard />
        </WithPanelLayout>



    )
}