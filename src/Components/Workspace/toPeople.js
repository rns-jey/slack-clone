import { useHistory } from 'react-router-dom';
import React from 'react';
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import './SideNav/SideNav.css';

export default function ToPeople({Icon, title}) {
    const history = useHistory();
    const toPeople = () => {history.push('/people')}

    return (
        <div className="toPeople" onClick={toPeople}>
            <PeopleAltIcon/><h5>People & Users</h5>
        </div>
    )
}