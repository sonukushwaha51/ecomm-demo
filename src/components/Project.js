import { useEffect, useState } from "react";
import {Button, Input} from 'reactstrap';

const Project = (props) => {

    const [projectName, setProjectName] = useState("");

    const call = useEffect(() => {
        setProjectName("trigger-processor");
    },[])
    return(
        <div className="project">
            <h2>Enter project name: </h2>
            <Input type="text" value={projectName} onChange={e => setProjectName(e.target.value)}></Input>
            <Button onClick = {() => props.projectName(projectName)}>Create Project</Button>
        </div>
    );
}

export default Project;