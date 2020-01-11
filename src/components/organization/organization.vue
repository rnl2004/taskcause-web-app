<template>
    <div>
        <v-form ref="form" v-model="valid">
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1"
                        >Organization Profile</v-stepper-step
                    >
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2"
                        >Contacts & Credentials</v-stepper-step
                    >
                    <v-divider></v-divider>
                    <v-stepper-step step="3">Bank Accounts</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card class="mb-4" height="auto">
                            <v-container
                                class="ma-0 mt-0 pl-3 pt-0"
                                grid-list-md
                            >
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md2>
                                        <v-avatar size="70">
                                            <img
                                                :src="
                                                    `${organization.organization_photo}`
                                                "
                                                alt="Organization Photo"
                                            />
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs12 sm6 md10>
                                        <v-text-field
                                            label="Organization Photo URL"
                                            v-model="
                                                organization.organization_photo
                                            "
                                            placeholder=" "
                                        >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md2>
                                        <v-avatar size="70">
                                            <img
                                                :src="
                                                    `${organization.organization_cover}`
                                                "
                                                alt="Organization Cover"
                                            />
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs12 sm6 md10>
                                        <v-text-field
                                            label="Organization Cover URL"
                                            v-model="
                                                organization.organization_cover
                                            "
                                            placeholder=" "
                                        >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md2>
                                        <v-text-field
                                            label="ID"
                                            v-model="
                                                organization.organization_id
                                            "
                                            placeholder=" "
                                            ref="organizationId"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md10>
                                        <v-text-field
                                            label="Organization Name"
                                            v-model="
                                                organization.organization_name
                                            "
                                            placeholder=" "
                                        >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm6 md12>
                                        <v-textarea
                                            label="Description"
                                            v-model="
                                                organization.organization_description
                                            "
                                            placeholder=" "
                                            rows="3"
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md4>
                                        <v-text-field
                                            label="Code"
                                            v-model="
                                                organization.organization_code
                                            "
                                            placeholder=" "
                                            ref="organizationCode"
                                        >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md6>
                                        <v-switch
                                            color="primary"
                                            v-model="
                                                organization.organization_status
                                            "
                                            :label="
                                                `Status: ${
                                                    organization.organization_status ===
                                                        1 ||
                                                    organization.organization_status ===
                                                        true
                                                        ? 'APPROVED'
                                                        : 'DECLINED'
                                                }`
                                            "
                                        ></v-switch>
                                    </v-flex>
                                    <v-flex xs12 sm3 md6>
                                        <v-switch
                                            color="primary"
                                            v-model="
                                                organization.organization_enabled
                                            "
                                            :label="
                                                `Enabled: ${
                                                    organization.organization_enabled ===
                                                        1 ||
                                                    organization.organization_enabled ===
                                                        true
                                                        ? 'YES'
                                                        : 'NO'
                                                }`
                                            "
                                        ></v-switch>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                        <v-btn color="primary" @click="e1 = 2">
                            Continue
                        </v-btn>
                        <v-btn text @click="hideOrganizationDialog()"
                            >Cancel</v-btn
                        >
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-card class="mb-4" height="auto">
                            <v-container
                                class="ma-0 mt-0 pl-3 pt-0"
                                grid-list-md
                            >
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md6>
                                        <v-text-field
                                            label="Last"
                                            v-model="
                                                organization.contact_person_last_name
                                            "
                                            placeholder=" "
                                            ref="organizationLastName"
                                        >
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                            label="First"
                                            v-model="
                                                organization.contact_person_first_name
                                            "
                                            placeholder=" "
                                        >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                            v-model="
                                                organization.organization_email
                                            "
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                            :append-icon="
                                                show1
                                                    ? 'mdi-eye'
                                                    : 'mdi-eye-off'
                                            "
                                            :rules="pwdRules"
                                            :type="show1 ? 'text' : 'password'"
                                            name="input-10-2"
                                            label="Password"
                                            hint="At least 8 characters"
                                            v-model="
                                                organization.organization_password
                                            "
                                            class="input-group--focused"
                                            @click:append="show1 = !show1"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                            v-model="
                                                organization.organization_phone_no
                                            "
                                            label="Phone Number"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                        <v-btn color="primary" @click="e1 = 3">
                            Continue
                        </v-btn>
                        <v-btn text @click="e1 = 1">Back</v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-card class="mb-4" height="auto">
                            <v-container
                                class="ma-0 mt-0 pl-3 pt-0"
                                grid-list-md
                            >
                                <v-layout row wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                            v-model="
                                                organization.organization_bank_account_no
                                            "
                                            label="Bank Account No."
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field
                                            v-model="
                                                organization.organization_bank_routing_no
                                            "
                                            label="Bank Routing No."
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="updateOrganizations(organization)"
                        >
                            Submit
                        </v-btn>
                        <v-btn text @click="e1 = 2">Back</v-btn>
                        <v-btn text @click="hideOrganizationDialog()"
                            >Cancel</v-btn
                        >
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-form>
    </div>
</template>
<script>
import { RepositoryFactory } from '../../../src/repositories/RepositoryFactory';
import { EventBus } from '../../event/event-bus';

const OrganizationsRepository = RepositoryFactory.get('organization');

export default {
    props: { organization: Object },
    data: () => ({
        e1: 0,
        valid: true,
        dialog: false,
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
        editedIndex: -1,
        show1: false,
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        pwdRules: [
            v => !!v || 'Password is required',
            v =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/.test(v) ||
                'Password must contain an upper case letter, a numeric character, and a special character'
        ]
    }),
    mounted() {},
    methods: {
        updateOrganizations(organization) {
            delete organization.index;
            OrganizationsRepository.updateOrganizations(organization).then(
                () => {
                    EventBus.$emit('reload-organizations', {});
                    this.hideOrganizationDialog();
                }
            );
        },
        hideOrganizationDialog() {
            this.$modal.hide('add_edit_organization_dialog');
        }
    }
};
</script>
