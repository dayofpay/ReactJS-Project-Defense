import WithPanelLayout from "../../HOC/withPanelLayout";
import EditCourse from "../../components/private/Panel/EditCourse";


export default function ShowEditCourse(){
    return (
        <WithPanelLayout>
        <EditCourse/>
        </WithPanelLayout>



    )
}