<template>
    <div class="notification">
      <div class="container-fluid">
        <div class="notification-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Notification Component's</h1>
              <p>
                The Notification Components page in our design system is dedicated to a collection of crucial UI 
                elements crafted to effectively convey messages and alerts to users. These components play a vital 
                role in user communication, ensuring that important information is delivered in a clear, timely, 
                and unobtrusive manner.
              </p>

              <p>
                Our Notification Components are built using Vue.js and meticulously documented with Storybook. 
                This documentation provides detailed guidance on how to implement, configure, and customize each 
                component, making it easier for developers to integrate them into their applications seamlessly.
              </p>
            </div>
          </rds-row>
        </div>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

        <rds-grid>
          <div>
            <h3>1. Alert</h3>
            <p>
              Alerts are essential components used to provide immediate contextual feedback and notifications in 
              response to user actions or system activities. They play a crucial role in enhancing user experience by 
              communicating important information effectively and ensuring users are informed about critical events.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
              <h5>1. variant="info" - (default) dismissible="true"</h5>

              <alert
                variant="info"
                text="Providing informational updates or announcements without urgency."
                :dismissible="true"
              />
            </rds-col>

            <rds-col  cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
              <h5>2. variant="success" dismissible="false"</h5>

              <alert
                variant="success"
                text="Confirming a successful form submission."
                :dismissible="false"
              />
            </rds-col>
          </rds-row>
          <rds-row>
            <rds-col  cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
              <h5>3. variant="danger" dismissible="false"</h5>

              <alert
                variant="danger"
                text="Notifying users of invalid input or system errors."
                :dismissible="false"
              />
            </rds-col>

            <rds-col  cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
              <h5>4. variant="warning" dismissible="true"</h5>

              <alert
                variant="warning"
                text="Alerting users to potential risks or actions that require caution."
                :dismissible="true"
              />
            </rds-col>
          </rds-row>
        </rds-grid>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

        <rds-grid>
          <div>
            <h3>2. AlertCard</h3>
            <p>
              AlertCards are versatile components designed to convey important contextual messages and present 
              actionable options based on them. They combine the functionality of alerts with the layout and 
              interaction elements of cards, making them suitable for displaying critical information in a 
              visually appealing and actionable format.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
              <h5>1. variant="info" - (default) dismissible="true"</h5>

              <alert-card
                variant="info"
                title="Informative Text"
                :subTitle="subTitle"
                :withIcon="true"
                :value="true"
              />
            </rds-col>

            <rds-col  cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
              <h5>2. variant="danger" dismissible="false"</h5>

              <alert-card
                variant="danger"
                title="Error Text"
                :subTitle="subTitle"
                :withIcon="false"
                :value="false"
              />
            </rds-col>
          </rds-row>
          <rds-row>

            <rds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >
              <h5>3. variant="warning" dismissible="true"</h5>

              <alert-card
                variant="warning"
                title="Warning Text"
                :subTitle="subTitle"
                :withIcon="true"
                :value="true"
              />
            </rds-col>
          </rds-row>
        </rds-grid>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

        <rds-grid >
          <div>
            <h3>3. Pulsar</h3>
            <p>
              Pulsars are educational components designed to instruct users about new features, updates, 
              or functionalities within an interface or product. They serve as interactive guides that 
              highlight key elements and provide contextual information to enhance user understanding 
              and engagement.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" >
              <h5>1. variant="green" position="top-end"</h5>

              <pulsar
                position="top-start"
                variant="green"
                targetId="targetId1"
              />
            </rds-col>

            <rds-col  cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" >
              <h5>2. variant="blue" position="bottom"</h5>

              <pulsar
                position="top"
                variant="blue"
                targetId="targetId2"
              />
            </rds-col>

            <rds-col  cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" >
              <h5>3. variant="red" position="left-end"</h5>

              <pulsar
                position="left-end"
                variant="red"
                targetId="targetId3"
              />
            </rds-col>
          </rds-row>
        </rds-grid>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

        <rds-grid>
          <div>
            <h3>4. DialogModal</h3>
            <p>
              DialogModal is a crucial component used to interact with users in critical or informative 
              situations. It combines the functionality of a dialog box with modal behavior, providing a 
              focused interface to convey important messages, gather user input, or guide users through 
              specific tasks.
            </p>
          </div>
          <rds-row>
            <rds-col  cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" >
              <h5>1. variant="info" - (default)</h5>

              <dialog-modal
                variant="info"
              />
            </rds-col>

            <rds-col  cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" >
              <h5>2. variant="error"</h5>

              <dialog-modal
                variant="error"
              />
            </rds-col>

            <rds-col  cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4" >
              <h5>3. variant="warning"</h5>

              <dialog-modal
                variant="warning"
              />
            </rds-col>
          </rds-row>
        </rds-grid>
        
      </div>
    </div>
  </template>

  <script>
  import Alert from '../components/Notification/Alert.vue';
  import AlertCard from '../components/Notification/AlertCard.vue';
  import DialogModal from '../components/Notification/DialogModal.vue';
  import Pulsar from '../components/Notification/Pulsar.vue';

  export default {
    name: "Notification",

    // components
    components: {
      Alert,
      AlertCard,
      DialogModal,
      Pulsar,
    },

    // component data
    data() {
      return {
        subTitle: 'There is a theory that says that if one day someone discovers exactly what the Universe is for and why it is here, it will disappear instantly and be replaced by something still stranger and more inexplicable. There is a second theory that says that this has already happened.'
      }
    },
  }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .notification {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }
  </style>
  