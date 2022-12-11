import React from 'react';
import { Grid } from "semantic-ui-react";
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../Details/ActivityDetails';
import ActivityForm from '../Form/ActivityForm';
import ActivityList from './ActivityList';

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    creareOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, creareOrEdit, deleteActivity }: Props) {
    return (
       <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                 selectActivity={selectActivity}
                 deleteActivity={deleteActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    selectedActivity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm} />}
                  {editMode &&  
                <ActivityForm closeForm={closeForm}
                    selectedActivity={selectedActivity}
                    creareOrEdit={creareOrEdit} />}
            </Grid.Column>
       </Grid>

    )
}