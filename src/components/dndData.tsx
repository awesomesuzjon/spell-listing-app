// src/components/dndData.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDndData, selectDndData, selectDndLoading, selectDndError, AppDispatch } from '../store/slices/dndSlice';
import { RootState } from '../store/store';

const DndData: React.FC = () => {
    const dndData = useSelector(selectDndData);
    const isLoading = useSelector(selectDndLoading);
    const error = useSelector(selectDndError);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchDndData());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {dndData && (
                <pre>{JSON.stringify(dndData, null, 2)}</pre>
            )}
        </div>
    );
};

export default DndData;
