import {AppCallRequest, AppForm, Identifier, SnoozeAlertCreate} from '../types';
import {OpsGenieIcon, Routes} from "../constant";

export async function newCreateSnoozeAlertForm(call: AppCallRequest): Promise<AppForm> {
    console.log('call', call);
    const alertIdentifier: Identifier = {
        identifier: "55487914-e2c5-43cf-80d3-a6d9cba5ded8-1652463057998",
        identifierType : "id"
    };

    const snoozeAlertCreate: SnoozeAlertCreate = {
        note : "some note for snooze action",
        user : "lizeth@ancient.mx",
        source : "source of the snooze request",
        endTime : "2017-06-09T08:30:50.894Z"
    };

    return new Promise((resolve, rejects) => {
        const form: any = {
            title: 'Create OpsGenie Snooze Alert',
            header: 'Create a OpsGenie snooze alert from Mattermost by filling out and submitting this form. Additional text can be added in the `Optional Message` field.',
            icon: OpsGenieIcon,
            fields: [],
            call: {
                path: Routes.App.CallPathAlertSubmitOrUpdate,
            },
        };

        return resolve(form);
    });
}
