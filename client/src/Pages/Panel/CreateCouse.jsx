import WithPanelLayout from "../../HOC/withPanelLayout";
import CreateCourse from "../../components/private/Panel/CreateCourse";


export default function ShowCreateCourse(){
    return (
        <WithPanelLayout>
        <CreateCourse/>
        </WithPanelLayout>



    )
}