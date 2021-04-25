
import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Textbox, Container, PageHeader, LabelError } from "./StyledComponents";

function Explorer(props) {
    const [employeeName, setEmployeeName] = useState('');
    const [err, setErr] = useState('');
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        if (employeeName.trim() === '') {
            setErr('Employee Name is required!');
            return;
        }
        history.push('/overview/' + employeeName);
    }

    return (
        <Container>
            <PageHeader>Employee Explorer</PageHeader>
            <form onSubmit={handleSubmit}>
                <Textbox value={employeeName} onChange={(e) => { setEmployeeName(e.target.value); if (e.target.value !== '') setErr(''); }} /><Button type="submit">Search</Button>
            </form>
            <LabelError>{err}</LabelError>
        </Container>
    );
}

export default Explorer;