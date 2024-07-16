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

            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>3. CarouselController</h3>
                <p>
                  The CarouselController is a component designed to manage the display and navigation of elements within a 
                  carousel. It provides an intuitive interface for users to scroll through a collection of items, such as 
                  images, cards, or any other type of content.
                </p>
              </div>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>1. simple="false"</h5>
                  <carousel-controller
                    :simple="false"
                  />
                </rds-col>

                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>2. simple="true"</h5>
                  <carousel-controller
                    :simple="true"
                  />
                </rds-col>
              </rds-row>

              
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                  <h5>3. fluid="true"</h5>
                  <carousel-controller
                    :simple="false"
                    :fluid="true"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>3. CollapsibleContainer</h3>
                <p>
                  The CarouselController is a component designed to manage the display and navigation of elements within a 
                  carousel. It provides an intuitive interface for users to scroll through a collection of items, such as 
                  images, cards, or any other type of content.
                </p>
              </div>
              <rds-row>
                <rds-col class="" cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
                  <h5>1. modelValue="false" title="See more information"</h5>
                  <collapsible-container
                    :modelValue="false"
                    title="See more information"
                  />
                </rds-col>

                <rds-col class="" cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>2. modelValue="true"</h5>
                  <collapsible-container
                    :modelValue="true"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>4. DashboardCards</h3>
                <p>
                  DashboardCards are components designed to display information succinctly, making it easy to 
                  understand and classify based on status. These cards are ideal for dashboards where space is 
                  limited and concise information is necessary.
                </p>
              </div>
              <rds-row>
                <rds-col class="" cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
                  <h5>1. showAction="false" </h5>
                  <dashboard-cards
                    :showAction="false"
                    title="See more information"
                  />
                </rds-col>

                <rds-col class="" cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>2. showAction="true" fluid="true"</h5>
                  <dashboard-cards
                    :showAction="true"
                    :fluid="true"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>

            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>5. Divider</h3>
                <p>
                  The Divider component is used to visually separate or group content within a user interface. 
                  It provides a clear visual break between sections, enhancing readability and organization.
                </p>
              </div>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
                  <h5>1. text="Horizontal line text" dimmed="true" inline="true" </h5>
                  <divider
                    class="height-35"
                    text="Horizontal line text"
                    :vertical="false"
                    :dimmed="true"
                    :inline="true"
                  />
                </rds-col>

                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>2. swidth="150"  :vertical="true"</h5>
                  <divider
                    class="height-35"
                    width="150"
                    text="Vertical line text"
                    :vertical="true"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>
            
            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>6. PanelCard</h3>
                <p>
                  PanelCards are components designed to group information into structured containers. They 
                  provide a minimal yet effective way to display content with a clear hierarchy, consisting 
                  of a title, subtitle, and main content area.
                </p>
              </div>
              <rds-row>
                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6" >
                  <h5>1. noContentPadding="true" </h5>
                  <panel-card
                    :noContentPadding="true"
                  />
                </rds-col>

                <rds-col cols="6" offset="0" colsAtS="12" colsAtM="12" colsAtL="6" colsAtXl="6">
                  <h5>2. noContentPadding="false"</h5>
                  <panel-card
                    :noContentPadding="false"
                  />
                </rds-col>
              </rds-row>
            </rds-grid>

            
            <rds-divider :width="0" style="margin-top: 2%; margin-bottom: 2%;" />

            <rds-grid>
              <div>
                <h3>7. Scrollable</h3>
                <p>
                  The Scrollable component is designed to enable scrolling for content that exceeds the visible area. 
                  This component ensures that all content is accessible by providing a scrollable container.
                </p>
              </div>
              <rds-row>
                <rds-col cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12" >
                  <h5>1. noContentPadding="true" </h5>
                  <scrollable
                    maxHeight="250px"
                    :autoHeight="true"
                    :horizontalScroll="true"
                  />
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
  import CarouselController from '@/components/Containers/CarouselController.vue';
  import CollapsibleContainer from '@/components/Containers/CollapsibleContainer.vue';
  import DashboardCards from '@/components/Containers/DashboardCards.vue';
  import Divider from '@/components/Containers/Divider.vue';
  import PanelCard from '@/components/Containers/PanelCard.vue';
  import Scrollable from '@/components/Containers/Scrollable.vue';

  export default {
    name: 'Loaders',

    components: {
      Box,
      Card,
      CarouselController,
      CollapsibleContainer,
      DashboardCards,
      Divider,
      PanelCard,
      Scrollable,
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
      padding-bottom: 10rem;
    }
  }

  .collapsible-border {
    border: 1px solid #d1d1d1;
    border-radius: 15px;
  }

  .p-1 {
    padding: 1rem;
  }

  .mr-3 {
    margin-right: 2.5rem;
  }

  .ml-3 {
    margin-left: 2.5rem;
  }

  .height-35 {
    height: 35vh;
    align-content: center;
  }
  </style>
  