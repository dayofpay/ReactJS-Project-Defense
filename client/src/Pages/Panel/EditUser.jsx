import WithPanelLayout from "../../HOC/withPanelLayout";

import EditUser from "../../components/private/Panel/EditUser";


export default function ShowEditUser(){
    return (
        <WithPanelLayout>
        <EditUser/>
        </WithPanelLayout>



    )
}