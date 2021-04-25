import { useSelector } from "react-redux"
import { selectDirectSubordinates, selectName, selectNumberOfDirectSubordinates } from "../redux/employeeSlice";
import { List, ListItem, Title } from "./StyledComponents";

const Employee = () => {
    const name = useSelector(selectName);
    const numberOfDirectSubornates = useSelector(selectNumberOfDirectSubordinates);
    return (
        <>

            {
                numberOfDirectSubornates > 0 ?
                    <>
                        <Title>Subordinates of employee {name} :</Title>
                        <SubordinateList></SubordinateList>
                    </> :
                    <Title>{name} has no subordinate</Title>
            }
        </>
    )
}
const SubordinateList = () => {
    const directSubordinates = useSelector(selectDirectSubordinates);
    return (
        <List>
            { directSubordinates.map((subordinate, index) => (
                <ListItem key={index}>{subordinate.employeeName}</ListItem>
            ))}
        </List>
    );
}

export default Employee;