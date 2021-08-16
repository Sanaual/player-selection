import React from 'react';
import { Table } from 'react-bootstrap';

const PlayerTable = (props) => {

    return (
        <div>

            <Table striped bordered hover variant="dark">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>Name: {props.sel.name}</td>
                        <td>Salary: ${props.sel.price}</td>

                    </tr>

                </tbody>
            </Table>



        </div>
    );
};

export default PlayerTable;