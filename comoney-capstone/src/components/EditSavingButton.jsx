import React from 'react';
import { FiEdit } from 'react-icons/fi';
import LocaleContext from '../context/LocaleContext';

function EditSavingButton() {
        const { locale } = React.useContext(LocaleContext);

        return (
                <button type="button" className="btn btn-warning pedingSaving" title={locale === 'en' ? 'Edit' : 'Sunting'}>
                        <FiEdit />
                </button>
        )
}

export default EditSavingButton;