import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncSearchEmployee, selectErrorMessage, selectIsError } from "../redux/employeeSlice";
import { Container, PageHeader, Title } from "./StyledComponents";
import Employee from "./EmployeeComponent";

export default function Overview(props) {
    const dispatch = useDispatch();
    const isError = useSelector(selectIsError);
    const errorMessage = useSelector(selectErrorMessage);
    useEffect(function () {
        let searchName = props.match.params.id;
        dispatch(asyncSearchEmployee(searchName, true));
    }, [props.match.params.id, dispatch]);

    return (
        <Container>
            <Link to="/Explorer">Back to Employee Explorer</Link>
            <PageHeader> Employee Overview</PageHeader>
            {isError ?
                <Title>{errorMessage}</Title>
                :
                <Employee></Employee>

            }
        </Container>
    )
}