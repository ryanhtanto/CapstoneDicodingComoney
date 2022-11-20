import React from 'react';
import { FiEdit } from 'react-icons/fi';

function EditSavingButton({id, onEdit}) {
        return (
                <button type="button" class="btn btn-warning" onClick={() => onEdit(id)}>
                        <FiEdit  />
                </button>
        ) 
}

export default EditSavingButton;