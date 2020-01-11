<template>
    <div>
        <h1>Manage Organizations</h1>
        <modal
            name="add_edit_organization_dialog"
            width="40%"
            height="auto"
            @before-open="beforeOpen"
            draggable=".window-header"
        >
            <div class="window-header">
                <v-tooltip left>
                    <v-btn icon slot="activator" color="primary" dark>
                        <v-icon>group_work</v-icon>
                    </v-btn>
                    <span>Drag me!</span>
                </v-tooltip>
                <strong>Edit Organization</strong>
            </div>
            <v-card>
                <organization
                    v-bind:organization="this.organization"
                ></organization>
            </v-card>
        </modal>
        <v-data-table
            :pagination.sync="pagination"
            :headers="headers"
            :items="organizations"
            :loading="false"
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <td>{{ props.item.organization_id }}</td>
                    <td class="text-xs-left">
                        {{ props.item.organization_name }}
                    </td>
                    <td class="text-xs-left">{{ props.item.created_date }}</td>
                    <td class="text-xs-left">
                        {{ props.item.organization_description }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.organization_code }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.contact_person_first_name }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.contact_person_last_name }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.organization_phone_no }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.organization_email }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.organization_status }}
                    </td>
                    <td class="text-xs-left">
                        {{ props.item.organization_enabled }}
                    </td>
                    <td class="justify-center layout px-0">
                        <v-menu bottom left>
                            <template slot="activator">
                                <v-btn icon class="pt-0 pb-0 mt-1 mb-1">
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-tile
                                    @click="
                                        showEditOrganizationDialog(props.item)
                                    "
                                >
                                    <v-btn icon>
                                        <v-icon>edit</v-icon>
                                    </v-btn>
                                    <v-list-tile-title>Edit</v-list-tile-title>
                                </v-list-tile>
                            </v-list>
                        </v-menu>
                    </td>
                </tr>
            </template>
            <template slot="no-data">
                <strong>No Organizations Found.</strong>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import { RepositoryFactory } from '../../../src/repositories/RepositoryFactory';
import Organization from '../../../src/components/organization/organization';
import { EventBus } from '../../event/event-bus';

const OrganizationsRepository = RepositoryFactory.get('organization');

export default {
    components: { Organization },
    data: () => ({
        dialog: false,
        organization: {
            organization_id: '',
            organization_name: '',
            created_date: '',
            organization_description: '',
            organization_code: '',
            contact_person_first_name: '',
            contact_person_last_name: '',
            organization_phone_no: '',
            organization_email: '',
            organization_status: '',
            organization_enabled: ''
        },
        pagination: {},
        selected: [],
        headers: [
            {
                text: 'ID',
                align: 'left',
                sortable: true,
                value: 'organization_id'
            },
            {
                text: 'Organization Name',
                align: 'left',
                value: 'organization_name'
            },
            {
                text: 'Created',
                align: 'left',
                value: 'created_date'
            },
            {
                text: 'Description',
                align: 'left',
                value: 'organization_description'
            },
            {
                text: 'Code',
                align: 'left',
                value: 'organization_code'
            },
            {
                text: 'First',
                align: 'left',
                value: 'contact_person_first_name'
            },
            {
                text: 'Last',
                align: 'left',
                value: 'contact_person_last_name'
            },
            {
                text: 'Phone',
                align: 'left',
                value: 'organization_phone_no'
            },
            {
                text: 'Email',
                align: 'left',
                value: 'organization_email'
            },
            {
                text: 'Status',
                align: 'left',
                value: 'organization_status'
            },
            {
                text: 'Enabled',
                align: 'left',
                value: 'organization_enabled'
            },
            {
                text: 'Action',
                value: null
            }
        ],
        organizations: [],
        editedIndex: -1
    }),
    mounted() {
        this.getOrganizations();
        this.initEventBus();
    },
    methods: {
        getOrganizations() {
            OrganizationsRepository.getOrganizations().then(
                organizations_cb => {
                    this.organizations = organizations_cb.data.data;
                }
            );
        },
        showEditOrganizationDialog(organization) {
            this.editedIndex = this.organizations.indexOf(organization);
            this.editedItem = Object.assign({}, organization);
            this.editedItem.index = this.editedIndex;
            this.dialog = true;
            this.$modal.show('add_edit_organization_dialog', {
                organization: this.editedItem
            });
        },
        hideOrganizationDialog() {
            this.$modal.hide('add_edit_organization_dialog');
        },
        beforeOpen(event) {
            this.organization = event.params.organization;
        },
        initEventBus() {
            EventBus.$on('reload-organizations', () => {
                this.getOrganizations();
            });
        }
    }
};
</script>
