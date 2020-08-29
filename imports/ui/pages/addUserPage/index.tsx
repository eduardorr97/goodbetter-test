import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import AppLayout from '../../components/AppLayout/index';
import UserComponent from '../../components/UserComponent';

const AddUserPage = () => {
    return (
        <AppLayout>
            <Card>
                <CardContent>
                    <UserComponent></UserComponent>
                </CardContent>
            </Card>
        </AppLayout>
    );
};

export default AddUserPage;