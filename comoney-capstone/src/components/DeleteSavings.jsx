import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

function DeleteSavings({id, onDelete}) {
        return (
                <button type="button" class="btn btn-danger mx-2" onClick={() => onDelete(id)}>
                        <FiTrash2 />
                </button>
        ) 
}

export default DeleteSavings;