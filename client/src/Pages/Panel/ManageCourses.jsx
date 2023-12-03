import WithPanelLayout from "../../HOC/withPanelLayout";

import ManagageCourses from "../../components/private/Panel/ManageCourses";

export default function ShowCourses(){
    return (
        <WithPanelLayout>
        <ManagageCourses/>
        </WithPanelLayout>



    )
}