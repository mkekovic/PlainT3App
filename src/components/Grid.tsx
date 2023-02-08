import react, { useState, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import Spinner from './Spinner';
import { useIsAuthenticated } from "@azure/msal-react";
import UnauthorizedContent from "./UnauthorizedContent";

export default function Grid(props: any) {
    const [isLoading, setIsLoading] = useState(true)
    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([{}]);
    let isAuth: any = useIsAuthenticated();

    var myHeaders = new Headers();
    myHeaders.append("authToken", "abc123");
    const renderTableContent = () => {
        if (isLoading) {
            return (
                <Spinner />
            )
        } else if (isAuth || props.isStructured) { // for security of auth
            return (
                <div className='ag-theme-alpine h-96 w-7/12' >
                    <AgGridReact
                        onCellClicked={rowClickedListener}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        rowSelection='multiple'
                        animateRows={true}
                    />
                </div>
            )
        }
    }

    const generateColumnDefs = (obj: any) => {
        let columnData = [];
        for (const key in obj) {
            columnData.push({ field: `${key}` })
        }
        return (columnData);
    }

    const rowClickedListener = useCallback((e: any) => {
        console.log('cell Clicked: ', e)
    }, [])

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true
    }), [])

    useEffect(() => {
        fetch(props.url, props.isStructured ? {} : isAuth ? {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        } : {}).then(result => result.json()).then(rowData => {
            if (rowData?.message == 'Unauthorized') {
                setIsLoading(false)
                throw new Error('Unauthorized');
            }
            let resultData = props.isStructured ? rowData : rowData.Items
            setColumnDefs(generateColumnDefs(resultData[0]))
            setRowData(resultData)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    useEffect(() => {
        isAuth && setIsLoading(true)
        fetch(props.url, props.isStructured ? {} : isAuth ? {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        } : {}).then(result => result.json()).then(rowData => {
            if (rowData?.message == 'Unauthorized') {
                setIsLoading(false)
                throw new Error('Unauthorized');
            }
            let resultData = props.isStructured ? rowData : rowData.Items
            setColumnDefs(generateColumnDefs(resultData[0]))
            setRowData(resultData)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        });
    }, [isAuth])

    return (
        <div className='display flex h-80 w-full justify-center items-center flex-col my-4'>
            {!isAuth && !props.isStructured ? <UnauthorizedContent /> : renderTableContent() }
        </div>
    )
}