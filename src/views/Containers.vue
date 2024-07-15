<template>
    <div class="containers">
      <div class="container-fluid">
        <div class="containers-header">
          <rds-row>
            <div class="header-content">
              <h1>RDS - Containers Component's</h1>
              <p>
                The Container Components page in our design system showcases a variety of fundamental 
                UI elements crafted to structure and organize content within your applications. These 
                Vue.js components provide the building blocks for creating flexible and responsive 
                layouts. Each component is meticulously documented using Storybook, offering detailed 
                instructions for implementation and customization to meet your specific needs.
              </p>

              <p>
                Explore the different components as well and their configurations to find the best 
                fit for your data visualization needs. Each component is accompanied by comprehensive 
                documentation and examples to help you get started quickly and efficiently.
              </p>
            </div>
          </rds-row>
        </div>

        <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

        <div class="dashboard-content">
          <div class="dashboard-main">
            <rds-grid>
              <div>
                <h3>1. Box</h3>
                <p>
                  Boxes are basic container components that encapsulate content with the standard care 
                  border, shadow, and padding styles. They can be used as a primitive component for cards, 
                  popovers, modals, etc.
                </p>
              </div>
              <rds-row>
                <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                  <h5>1. variant="green" clickable="true"</h5>
                  <box
                      :elevated="false"
                      padding="7"
                      :fluid="false"
                      variant="green"
                      :clickable="true"
                  />
                </rds-col>

                <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                  <h5>2. variant="red" padding not pass</h5>
                  <box
                      :elevated="false"
                      :fluid="false"
                      variant="red"
                      :clickable="false"
                  />
                </rds-col>

                <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                  <h5>3. padding="7" fluid="true"</h5>
                  <box
                      :elevated="false"
                      padding="7"
                      :fluid="true"
                      variant="red"
                      :clickable="false"
                  />
                </rds-col>

                <rds-col cols="3" offset="0" colsAtS="12" colsAtM="12" colsAtL="3" colsAtXl="3">
                  <h5>4. elevated="true" padding="10"</h5>
                  <box
                      :elevated="true"
                      padding="10"
                      :fluid="false"
                      variant="grey"
                      :clickable="false"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />  

            <rds-grid>
              <div>
                <h3>2. Card</h3>
                <p>
                  Cards are components used as general purpose containers. From your props and slots header, 
                  body, footer, image, icon and extra it is possible to create more specific variations and 
                  cards, such as the DashboardCard.
                </p>
              </div>
              <rds-row>
                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>1. horizontal="false" clickable="true"</h5>
                  <card
                    title="Card Title 1"
                    content="1 Some quick example text to build on the card title and make up the bulk of the card's content."
                    imageWidth="300"
                    imageHeight="210"
                    :clickable="true"
                    :horizontal="false"
                    imageSrc="https://res.cloudinary.com/duojkrgue/image/upload/v1627283449/cwty0iefpflcx3bpttma.jpg"
                  />
                </rds-col>

                <rds-col cols="8" offset="0" colsAtS="12" colsAtM="12" colsAtL="8" colsAtXl="8">
                  <h5>2. horizontal="true" clickable="false"</h5>
                  <card
                    title="Card Title 2"
                    content="2 Some quick example text to build on the card title and make up the bulk of the card's content."
                    imageWidth="300"
                    imageHeight="210"
                    :clickable="false"
                    :horizontal="true"
                    imageSrc="https://res.cloudinary.com/duojkrgue/image/upload/v1627283293/balihqkaddgozycapnda.jpg"
                  />
                </rds-col>
              </rds-row>

              <rds-row>
                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>3. Card with icon</h5>
                  <rds-card
                    :horizontal="true"
                  >
                  <template #icon>
                    <div class="d-flex align-items-center justify-content-center" style="display: flex; justify-content: center; align-items: center; background: #ecf1fe; height: 48px; width: 48px; border-radius: 8px">
                      <rds-icon name="home-outline" color="#1A55A8"/>
                    </div>
                  </template>
                  <template #header>
                    <div style="font-size: 24px; margin: 4px"> 32 </div>
                  </template>
                  <template #body>
                    UBSs with updated data
                  </template>
                  </rds-card>
                </rds-col>

                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>4. Card with slot </h5>
                  <rds-card
                    :horizontal="true"
                  >
                    <template #header>45 <small>pregnant women</small></template>
                    <template #extra>
                      <rds-badge variant="red">Alert</rds-badge>
                    </template>
                    <template #body>
                      Haven't had a consultation for more than 30 days
                    </template>
                    <template #footer>
                      <div class="d-flex justify-content-end">
                        <small><strong>VIEW LIST</strong></small>
                      </div>
                    </template>
                  </rds-card>
                </rds-col>

                <rds-col cols="4" offset="0" colsAtS="12" colsAtM="12" colsAtL="4" colsAtXl="4">
                  <h5>5. Card simple</h5>
                  <rds-card
                    title="Simple Card Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                  >
                  </rds-card>
                </rds-col>
              </rds-row>
            </rds-grid>

          </div>
        </div>  
      </div>
    </div>
  </template>
  
  <script>
  import Box from '@/components/Containers/Box.vue';
  import Card from '@/components/Containers/Card.vue';

  export default {
    name: 'Loaders',

    components: {
      Box,
      Card,
    },

   data() {
      return {

      }
    },
  }

  </script>
  <style>
  @media (min-width: 1024px) {
    .containers {
      min-height: 100%;
      display: flex;
      align-items: center;
    }
  }
  </style>
  