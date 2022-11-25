import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import LocaleContext from '../context/LocaleContext';

function DeleteSavings({ id, onDelete }) {
        const { locale } = React.useContext(LocaleContext)

        return (
                <button type="button" className="btn btn-danger mx-2" title={locale === 'en' ? 'Delete' : 'Hapus'} onClick={() => onDelete(id)}>
                        <FiTrash2 />
                </button>
        )
}

export default DeleteSavings;