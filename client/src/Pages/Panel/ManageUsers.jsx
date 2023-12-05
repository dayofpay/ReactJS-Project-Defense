import WithPanelLayout from "../../HOC/withPanelLayout";

import ShowUsers from "../../components/private/Panel/ManageUsers";

export default function ManageUsers(){
    return (
        <WithPanelLayout>
        <ShowUsers/>
        </WithPanelLayout>



    )
}