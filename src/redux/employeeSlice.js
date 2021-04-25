import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { additivApi } from "../shared/baseUrl";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState:
    {
        name: '',
        designation: '',
        isError: false,
        errorMessage: '',
        directSubordinates: []
    },
    reducers: {
        resetState: (state, action) => {
            state.name = action.payload.name;
            state.designation = '';
            state.isError = false;
            state.errorMessage = '';
            state.directSubordinates = [];
        },
        setDesignation: (state, action) => {
            const index = state.directSubordinates.findIndex((s) => s.employeeName === action.payload.employeeName);
            if (index >= 0)
                state.directSubordinates[index].designation = action.payload.designation;
            else
                state.designation = action.payload.designation;
        },
        addSubordinate: (state, action) => {
            if (!(state.directSubordinates.some(e => e.employeeName === action.payload.employeeName)))
                state.directSubordinates.push(action.payload);
        },
        setErrorMessage: (state, action) => {
            state.isError = true;
            state.errorMessage = action.payload.errorMessage;
        },
    },
});


export const { resetState, addSubordinate, setDesignation, setErrorMessage } = employeeSlice.actions;
let arrayItem = [];
export const asyncSearchEmployee = (name, root) => (dispatch) => {
    if (root) {
        dispatch(resetState({ name: name }));
        arrayItem = [];
    }

    axios.get(additivApi + name).then(
        res => {
            const [title, childElement] = res.data;
            dispatch(setDesignation({ employeeName: name, designation: title }));
            //debugger;
            if (childElement !== undefined) {
                childElement["direct-subordinates"].forEach(element => {
                    if (!arrayItem.includes(element)) {
                        dispatch(
                            addSubordinate({
                                employeeName: element,
                                designation: ''
                            })
                        );
                        arrayItem.push(element);
                        console.log(arrayItem);
                        asyncSearchEmployee(element, false)(dispatch);
                    }
                });
            }

        }
    ).catch(error => {
        console.log(error.response);
        if (error.response.status === 404)
            dispatch(setErrorMessage({ errorMessage: 'Employee not found' }));
        else
            dispatch(setErrorMessage({ errorMessage: error.response.statusText }));
    });
}

export const selectName = state => state.employee.name;
export const selectIsError = state => state.employee.isError;
export const selectErrorMessage = state => state.employee.errorMessage;
export const selectNumberOfDirectSubordinates = state => state.employee.directSubordinates.length;
export const selectDirectSubordinates = state => state.employee.directSubordinates;

export default employeeSlice.reducer;