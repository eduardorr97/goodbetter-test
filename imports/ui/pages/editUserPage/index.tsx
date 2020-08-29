import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import AppLayout from '../../components/AppLayout/index';
import ListComponent from '../../components/UserComponent';

const EditPage = () => {
    return (
        <AppLayout>
            <Card>
                <CardContent>
                    <ListComponent></ListComponent>
                </CardContent>
            </Card>
        </AppLayout>
    );
};

export default EditPage;