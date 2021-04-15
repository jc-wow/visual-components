import React, { useState } from 'react';
import { testData, DataStructure } from './testData';
import './Table.css';

export const Table: React.FC = () => {
    const [tableData, setTableData] = useState(testData);
    const dataLength: number = testData.length;

    const tableHeader: any[] = [];
    for (let i = 0; i < dataLength; i++) {
        tableHeader.push(
            <div className="table-header-wrapper" key={i + 'headercell'}>
                <span className="table-cell">{tableData[i].header}</span>
            </div>,
        );
    }

    const tableBody: any[] = [];
    const rows: number = Object.keys(testData[0]).length;
    for (let j = 0; j < rows - 1; j++) {
				
        for (let i = 0; i < dataLength; i++) {
					tableBody.push(
						<div className={'table-row' + j}>

						</div>
					)
				}
    }

    return (
        <div className="table">
            <div className="table-header">{tableHeader}</div>
            <div className="table-body">
                <div className="table-body-container-wrapper"></div>
            </div>
        </div>
    );
};
