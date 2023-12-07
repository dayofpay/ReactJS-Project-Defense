import WithPanelLayout from "../../HOC/withPanelLayout";
import EditCourse from "../../components/private/Panel/EditCourse";


export default function ShowEditFiles(){
    return (
        <WithPanelLayout>
        <EditCourse/>
        </WithPanelLayout>



    )
}