import WithPanelLayout from "../../HOC/withPanelLayout";
import EditFiles from "../../components/private/Panel/EditFiles";


export default function ShowEditFiles(){
    return (
        <WithPanelLayout>
        <EditFiles/>
        </WithPanelLayout>



    )
}